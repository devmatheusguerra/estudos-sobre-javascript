import livros from "../models/Livro.js";

class LivroController {
    static listarTodos(req, res){
        livros.find()
        .populate('autor')
        .exec((err, livros) => {
            if (err) {
                return res.status(500).send(err)
            }

            return res.status(200).send(livros)
        })
    }

    static listarPeloId(req, res){
        const id = req.params.id
        const livro = livros.findById(id, (err, livro) => {
            if (err) {
                return res.status(500).send(err)
            }

            if (!livro) {
                return res.status(404).send('Livro não encontrado')
            }

            return res.status(200).send(livro)
        }
        
        )
    }

    static criar(req, res){
        const livro = new livros(req.body)
        livro.save((err, livro) => {
            if (err) {
                return res.status(500).send(err)
            }

            return res.status(201).send(livro)
        })
    }

    static atualizar(req, res){
        const id = req.params.id
        livros.findByIdAndUpdate(id, req.body, {new: true}, (err, livro) => {
            if (err) {
                return res.status(500).send(err)
            }

            return res.status(200).send(livro)
        })
    }

    static deletar(req, res){
        const id = req.params.id
        livros.findByIdAndDelete(id, (err, livro) => {
            if (err) {
                return res.status(500).send(err)
            }

            if (!livro) {
                return res.status(404).send('Livro não encontrado')
            }

            return res.status(200).send('Livro deletado com sucesso')
        })
    }

    static ListarPorEditora(req, res){
        const id = req.query.editora
        livros.find({editora: { $regex : new RegExp(id, "i") }} ,(err, livro) => {
            if (err) {
                return res.status(500).send(err)
            }

            if (!livro) {
                return res.status(404).send('Livro não encontrado')
            }

            return res.status(200).send(livro)
        })
    }
}

export default LivroController;