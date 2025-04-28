import express from 'express';
import alunoController from '../controllers/AlunoController';
import loginRequired from '../middlewares/loginRequired';

const router = express.Router();

router.get('/aluno',loginRequired, alunoController.index);
router.post('/aluno', alunoController.create);
router.put("/aluno/:id", alunoController.update);
router.delete("/aluno/:id", alunoController.delete);
router.get('/aluno/:id', alunoController.show);



export default router;
