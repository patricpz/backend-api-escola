import multer from 'multer';
import multerConfig from '../config/multerConfig.js';

const upload = multer(multerConfig);

const imageController = {
  create(req, res) {
    upload.single('image')(req, res, (err) => {
      if (err) {
        return res.status(400).json({ error: err.message });
      }

      if (!req.file) {
        return res.status(400).json({ errors: [error]});
      }

      return res.status(200).json(req.file);
    });
  }
};

export default imageController;
