import autores from '../models/Autor.js'

class AutoresController {
  static listarTodos (req, res) {
    autores.find((err, autores) => {
      if (err) {
        return res.status(500).send(err)
      }

      return res.status(200).send(autores)
    })
  }

  static listarPeloId (req, res) {
    const id = req.params.id
    const autor = autores.findById(id, (err, autor) => {
      if (err) {
        return res.status(500).send(err)
      }

      if (!autor) {
        return res.status(404).send('Autor não encontrado')
      }

      return res.status(200).send(autor)
    })
  }

  static criar (req, res) {
    const autor = new autores(req.body)
    autor.save((err, autor) => {
      if (err) {
        return res.status(500).send(err)
      }

      return res.status(201).send(autor)
    })
  }

  static atualizar (req, res) {
    const id = req.params.id
    autores.findByIdAndUpdate(id, req.body, { new: true }, (err, autor) => {
      if (err) {
        return res.status(500).send(err)
      }

      return res.status(200).send(autor)
    })
  }

  static deletar (req, res) {
    const id = req.params.id
    autores.findByIdAndDelete(id, (err, autor) => {
      if (err) {
        return res.status(500).send(err)
      }

      if (!autor) {
        return res.status(404).send('Autor não encontrado')
      }

      return res.status(200).send('Autor deletado com sucesso')
    })
  }
}

export default AutoresController
