import express, { Router } from 'express';
import multer from 'multer';

import planetController from '../controllers/planetController';

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, './uploads');
	},
	filename: (req, file, cb) => {
		cb(null, file.originalname);
	},
});
const upload = multer({ storage });
const router: Router = express.Router();

router.get('/', planetController.getAll);
router.get('/:id', planetController.getOneById);
router.post('/', planetController.create);
router.put('/:id', planetController.updateById);
router.delete('/:id', planetController.deleteById);
router.post('/:id/image', upload.single('image'), planetController.createImage);

export default router;
