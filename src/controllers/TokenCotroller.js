import jwt from "jsonwebtoken";
import User from "../models/User";

const SECRET_KEY = process.env.JWT_SECRET || "secreta_super_segura";

const tokenController = {
  async generateToken(req, res) {
    const { email, password } = req.body;

    try {
      const user = await User.findOne({ where: { email } });

      if (!user) {
        return res.status(401).json({ message: 'Usuario nao encontrado' });
      }

      if(!(await user.passwordIsValid(password))) {
        return res.status(401).json({ message: 'Senha inválida.' });
      }

      const { id } = user;

      const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
        expiresIn: process.env.TOKEN_EXPIRATION,
      });

      return res.status(200).json({ token });
    } catch (err) {
      console.error('Erro ao gerar token:', err);
      return res.status(500).json({ message: 'Erro interno do servidor.' });
    }
  },

  async verifyToken(req, res, next) {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(403).json({ message: "Token não fornecido." });
    }

    try {
      const decoded = jwt.verify(token, SECRET_KEY);
      req.user = decoded;
      next();
    } catch (err) {
      return res.status(401).json({ message: "Token inválido ou expirado." });
    }
  },
};

export default tokenController;
