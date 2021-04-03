import jwt from "jsonwebtoken";
import Membro from "../models/Membro";

export default async (req, res, next) => {
  const { authorization } = req.headers;
  console.log(req);
  if (!authorization) {
    return res.status(401).json({ erros: "login requerido" });
  }
  const [, tokem] = authorization.split(" ");
  try {
    const dados = jwt.verify(tokem, process.env.TOKEN_SECRET);
    const { id, email } = dados;

    const user = await Membro.findOne({ where: { id, email } });
    if (!user) {
      return res.status(401).json({ erros: "usuario invalido" });
    }
    req.userId = id;
    req.userEmail = email;
    return next();
  } catch (error) {
    return res.status(404).json({ erros: "token expirado ou invalido" });
  }
};
