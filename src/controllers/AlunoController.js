import Aluno from "../models/Aluno.js";

const alunoController = {
  async index(req, res) {
    try {
      const alunos = await Aluno.findAll();
      return res.json(alunos);
    } catch (err) {
      return res.status(500).json({ error: "Erro ao buscar alunos" });
    }
  },

  async create(req, res) {
    try {
      const { nome, sobrenome, email, idade, peso, altura } = req.body;

      const novoAluno = await Aluno.create({
        nome,
        sobrenome,
        email,
        idade,
        peso,
        altura
      });

      console.log(req.body)

      return res.status(201).json(novoAluno);
    } catch (err) {
      return res.status(400).json({ error: "Erro ao criar aluno" });
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params;
      const { nome, email, password, idade, peso, altura } = req.body;

      const aluno = await Aluno.findByPk(id);

      if (!aluno) {
        return res.status(404).json({ error: "Usuário não encontrado" });
      }

      await aluno.update({ nome, email, password, idade, peso, altura });

      return res.json({
        id: aluno.id,
        nome: aluno.nome,
        email: aluno.email,
        idade: aluno.idade,
        peso: aluno.peso,
        altura: aluno.altura,
        updatedAt: aluno.updatedAt
      });
    } catch (err) {
      console.error(err);
      return res.status(400).json({
        error: "Erro ao atualizar usuário",
        messages: err.errors?.map(e => e.message) || []
      });
    }
  },

  async delete(req, res) {
    try {
      const { id } = req.params;

      const aluno = await Aluno.findByPk(id);

      if (!aluno) {
        return res.status(404).json({ error: "Usuário não encontrado" });
      }

      await aluno.destroy();

      return res.json({ message: "Usuário deletado com sucesso!" });
    } catch (err) {
      return res.status(500).json({ error: "Erro ao deletar usuário" });
    }
  },

  async show(req, res) {
    try {
      const { id } = req.params;
      const aluno = await Aluno.findByPk(id, {
        attributes: ['id', 'nome', 'email', 'idade', 'peso', 'altura', 'createdAt', 'updatedAt'],
      });

      if (!aluno) {
        return res.status(404).json({ error: "Usuário não encontrado" });
      }

      return res.json(aluno);
    } catch (err) {
      return res.status(500).json({ error: "Erro ao buscar usuário" });
    }
  },

  about(req, res) {
    res.render("home/about", {
      title: "Sobre",
      content: "Esta é a página sobre a aplicação."
    });
  }
};

export default alunoController;
