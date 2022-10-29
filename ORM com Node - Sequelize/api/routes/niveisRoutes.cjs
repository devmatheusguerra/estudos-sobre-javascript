const { Router } = require('express');
const NiveisController = require('../controllers/NiveisController.cjs');

const router = Router();
router.get('/niveis', NiveisController.getAll);
router.get('/niveis/:id', NiveisController.getById);
router.post('/niveis', NiveisController.create);
router.put('/niveis/:id', NiveisController.update);
router.delete('/niveis/:id', NiveisController.delete);


module.exports = router;