import express from 'express'
import LivroController from '../controllers/livrosController.js'

const router = express.Router()

router
  .get('/livros', LivroController.listarTodos)
  .get('/livros/busca', LivroController.ListarPorEditora)
  .get('/livros/:id', LivroController.listarPeloId)
  .post('/livros', LivroController.criar)
  .put('/livros/:id', LivroController.atualizar)
  .delete('/livros/:id', LivroController.deletar)

export default router
