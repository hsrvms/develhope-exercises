import express, { Router } from 'express';
import planetController from '../controllers/planetController';

const router: Router = express.Router();

router.get('/', planetController.getAll);
router.get('/:id', planetController.getOneById);
router.post('/', planetController.create);
router.put('/:id', planetController.updateById);
router.delete('/:id', planetController.deleteById);


export default router;