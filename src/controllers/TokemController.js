import jwt from "jsonwebtoken";
import Membro from "../models/Membro";
// import Tokem from '../models/Tokem';

class TokenController {
  async store(req, res) {
    const { email = "", password = "" } = req.body;
    if (!email || !password) {
      return res.status(401).json({
        erros: "credenciais invalidas",
      });
    }
    const user = await Membro.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({
        erros: "usuario nao existe",
      });
    }
    if (!(await user.passwordIsValid(password))) {
      return res.status(401).json({
        erros: "senha invalida",
      });
    }
    const { id } = user;
    const tokem = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });
    return res.json({ tokem, user });
  }
}
export default new TokenController();
