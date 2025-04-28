import Aluno from "../models/Aluno";


const homeController = {
  index(req, res) {
    res.json({
      title: "Página Inicial",
      message: "Bem-vindo à página home!"
    });
  },

  about(req, res) {
    res.render("home/about", {
      title: "Sobre",
      content: "Esta é a página sobre a aplicação."
    });
  }
};

export default homeController;
