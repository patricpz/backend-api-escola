import jwt from "jsonwebtoken";

export default (req, res, next) => {

  const { authorization } = req.headers;

  if(!authorization) {
    return res.status(401).json({ error: "Usuário precisa estar logado" });
  }

  const [texto, token] = authorization.split(" ");

  try {
    const dados =jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, email } = dados;
    req.userId = id;
    req.userEmail = email;
    return next();
  } catch (err) {
    return res.status(401).json({ error: "Token inválido ou expirado." });
  }
};
