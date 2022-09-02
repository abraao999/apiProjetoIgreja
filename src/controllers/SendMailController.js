require("dotenv").config();

import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  service: "Outlook365",
  auth: {
    user: process.env.USER_EMAIL,
    pass: process.env.PASS_EMAIL,
  },
});
class SendMailController {
  async sendMail(req, res) {
    const { bodyHtml, email } = req.body;

    // console.log(listQuartosEscolhidos);

    await transport.sendMail({
      from: "adbelemolimpialivraria@outlook.com",
      to: [email],
      subject: "Novo pedido de orçamento",
      html: bodyHtml,
    });
    return res.status(200).send();
  }
}
export default new SendMailController();
