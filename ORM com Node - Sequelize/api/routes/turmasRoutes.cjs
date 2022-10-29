const { Router } = require('express');
const TurmasController = require('../controllers/TurmasController.cjs');

const router = Router();
router.get('/turmas', TurmasController.getAll);
router.get('/turmas/:id', TurmasController.getById);
router.post('/turmas', TurmasController.create);
router.put('/turmas/:id', TurmasController.update);
router.delete('/turmas/:id', TurmasController.delete);

module.exports = router;