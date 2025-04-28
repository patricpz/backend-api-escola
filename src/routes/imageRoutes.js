import express from 'express';
import multer from 'multer';
import loginRequired from '../middlewares/loginRequired';
import imageController from '../controllers/ImageController';


const router = express.Router();

router.post('/fotos',  imageController.create);



export default router;
