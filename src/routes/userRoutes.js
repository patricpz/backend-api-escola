import { Router } from "express";
import userController from "../controllers/UserController";

import loginRequired from "../middlewares/loginRequired";

const router = Router();

router.get("/users", userController.index);

// Para mostrar o perfil de um usuário especifico deve ser corrigido no futuro
router.get("/users/:id", userController.show);

router.post("/users", userController.create);
router.put("/users",  loginRequired, userController.update);
router.delete("/users", loginRequired, userController.delete);

export default router;
