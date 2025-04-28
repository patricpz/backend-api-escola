import User from "../models/User.js";

const userController = {
  async index(req, res) {
    try {
      const users = await User.findAll({attributes: ['id', 'nome', 'email']});
      return res.json(users);
    } catch (err) {
      return res.status(500).json({ error: "Erro ao buscar usuários" });
    }
  },

  async show(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id, {
        attributes: ['id', 'nome', 'email', 'createdAt', 'updatedAt'],
      });

      if (!user) {
        return res.status(404).json({ error: "Usuário não encontrado" });
      }

      return res.json(user);
    } catch (err) {
      return res.status(500).json({ error: "Erro ao buscar usuário" });
    }
  },

  async create(req, res) {
    try {
      const { nome, email, password } = req.body;

      const user = await User.create({ nome, email, password });

      return res.status(201).json({
        id: user.id,
        nome: user.nome,
        email: user.email,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt
      });
    } catch (err) {
      console.error(err);
      return res.status(400).json({
        error: "Erro ao criar usuário",
        messages: err.errors?.map(e => e.message) || []
      });
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params;
      const { nome, email, password } = req.body;

      const user = await User.findByPk(id);

      if (!user) {
        return res.status(404).json({ error: "Usuário não encontrado" });
      }

      await user.update({ nome, email, password });

      return res.json({
        id: user.id,
        nome: user.nome,
        email: user.email,
        updatedAt: user.updatedAt
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

      const user = await User.findByPk(id);

      if (!user) {
        return res.status(404).json({ error: "Usuário não encontrado" });
      }

      await user.destroy();

      return res.json({ message: "Usuário deletado com sucesso!" });
    } catch (err) {
      return res.status(500).json({ error: "Erro ao deletar usuário" });
    }
  }
};

export default userController;
