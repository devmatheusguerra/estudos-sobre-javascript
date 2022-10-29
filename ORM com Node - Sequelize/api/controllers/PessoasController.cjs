const database = require('../models/index.cjs');
const ObjectModel = database.Pessoas;

class PessoasController {
    static async getAll(req, res) {
        try {
            const allPessoas = await ObjectModel.findAll();
            return res.status(200).json(allPessoas);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async getById(req, res) {
        const { id } = req.params;
        try {
            const pessoa = await ObjectModel.findOne({ where: { id: Number(id) } });
            return res.status(200).json(pessoa);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async create(req, res) {
        const newPessoa = req.body;
        try {
            const createdPessoa = await ObjectModel.create(newPessoa);
            return res.status(200).json(createdPessoa);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async update(req, res) {
        const { id } = req.params;
        const updatedPessoa = req.body;
        try {
            await ObjectModel.update(updatedPessoa, { where: { id: Number(id) } });
            const pessoa = await ObjectModel.findOne({ where: { id: Number(id) } });
            return res.status(200).json(pessoa);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async delete(req, res) {
        const { id } = req.params;
        try {
            await ObjectModel.destroy({ where: { id: Number(id) } });
            return res.status(200).json({ message: `id ${id} deleted` });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    // Matriculas

    static async getAllMatriculas(req, res) {
        const { estudanteId } = req.params;
        try {
            const matriculas = await database.Matriculas.findAll({ where: { estudante_id: Number(estudanteId) } });
            return res.status(200).json(matriculas);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async getMatriculaById(req, res) {
        const { estudanteId, matriculaId } = req.params;
        try {
            const matricula = await database.Matriculas.findOne({ where: { id: Number(matriculaId), estudante_id: Number(estudanteId) } });
            return res.status(200).json(matricula);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async createMatricula(req, res) {
        const { estudanteId } = req.params;
        const newMatricula = { ...req.body, estudante_id: Number(estudanteId) };
        try {
            const createdMatricula = await database.Matriculas.create(newMatricula);
            return res.status(200).json(createdMatricula);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async updateMatricula(req, res) {
        const { estudanteId, matriculaId } = req.params;
        const updatedMatricula = req.body;
        try {
            await database.Matriculas.update(updatedMatricula, { where: { id: Number(matriculaId), estudante_id: Number(estudanteId) } });
            const matricula = await database.Matriculas.findOne({ where: { id: Number(matriculaId), estudante_id: Number(estudanteId) } });
            return res.status(200).json(matricula);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async deleteMatricula(req, res) {
        const { estudanteId, matriculaId } = req.params;
        try {
            await database.Matriculas.destroy({ where: { id: Number(matriculaId), estudante_id: Number(estudanteId) } });
            return res.status(200).json({ message: `id ${matriculaId} deleted` });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
    
}

module.exports = PessoasController;