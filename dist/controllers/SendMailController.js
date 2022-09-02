"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }require("dotenv").config();

var _nodemailer = require('nodemailer'); var _nodemailer2 = _interopRequireDefault(_nodemailer);

const transport = _nodemailer2.default.createTransport({
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
      subject: "Nova Reserva de livro",
      html: bodyHtml,
    });
    return res.status(200).send();
  }
}
exports. default = new SendMailController();
