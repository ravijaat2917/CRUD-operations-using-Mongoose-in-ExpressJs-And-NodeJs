import express from 'express';
import studentController from '../controllers/studentController.js';
const router = express.Router();

router.get('/' , studentController.getAllDoc);
router.post('/' , studentController.createDoc);
router.get('/edit/:id' , studentController.editDoc);
router.post('/update/:id' , studentController.updateDocByID);
router.post('/delete/:id' , studentController.deleteDocByID);

export default router;