/* eslint-disable no-return-assign */
import Correios from "node-correios/lib/correios";

class CorreioController {
  buscaCep(req, res) {
    const { cep } = req.body;
    let returnCep = "";

    const Correio = new Correios();
    Correio.consultaCEP(req.body).then((response) => {
      returnCep = response;
      res.send(returnCep);
    });
  }
}
export default new CorreioController();
