const { Router } = require('express');
const PessoasController = require('../controllers/PessoasController.cjs');

const router = Router();
router.get('/pessoas', PessoasController.getAll);
router.get('/pessoas/:id', PessoasController.getById);

// Matricula GET
router.get('/pessoas/:estudanteId/matriculas', PessoasController.getAllMatriculas);
router.get('/pessoas/:estudanteId/matriculas/:matriculaId', PessoasController.getMatriculaById);

router.post('/pessoas', PessoasController.create);
// Matricula POST
router.post('/pessoas/:estudanteId/matriculas', PessoasController.createMatricula);

router.put('/pessoas/:id', PessoasController.update);
// Matricula PUT
router.put('/pessoas/:estudanteId/matriculas/:matriculaId', PessoasController.updateMatricula);
router.delete('/pessoas/:id', PessoasController.delete);
// Matricula DELETE
router.delete('/pessoas/:estudanteId/matriculas/:matriculaId', PessoasController.deleteMatricula);

module.exports = router;