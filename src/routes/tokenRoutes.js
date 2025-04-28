import { Router } from "express";
import tokenController from "../controllers/TokenCotroller";

const router = Router();

router.post("/login", tokenController.generateToken);
router.get("/protegido", tokenController.verifyToken, (req, res) => {
  res.send(`Olá, usuário com ID: ${req.user.id}`);
});

export default router;

