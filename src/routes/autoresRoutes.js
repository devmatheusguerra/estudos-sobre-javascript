import express from 'express'
import AutoresController from '../controllers/autoresController.js'
const router = express.Router()

router
  .get('/autores', AutoresController.listarTodos)
  .get('/autores/:id', AutoresController.listarPeloId)
  .post('/autores', AutoresController.criar)
  .put('/autores/:id', AutoresController.atualizar)
  .delete('/autores/:id', AutoresController.deletar)

export default router
