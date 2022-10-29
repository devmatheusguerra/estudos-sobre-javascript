const database = require('../models/index.cjs');
const ObjectModel = database.Turmas;

class TurmasController {
    static async getAll(req, res) {
        try {
            const all = await ObjectModel.findAll();
            return res.status(200).json(all);
        }
        catch (error) {
            return res.status(500).json(error.message);
        }

    }
    static async getById(req, res) {
        const { id } = req.params;
        try {
            const turma = await ObjectModel.findOne({ where: { id: Number(id) } });
            return res.status(200).json(turma);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async create(req, res) {
        const newTurma = req.body;
        try {
            const createdTurma = await ObjectModel.create(newTurma);
            return res.status(200).json(createdTurma);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }


    static async update(req, res) {
        const { id } = req.params;
        const updatedTurma = req.body;
        try {
            await ObjectModel.update(updatedTurma, { where: { id: Number(id) } });
            const turma = await ObjectModel.findOne({ where: { id: Number(id) } });
            return res.status(200).json(turma);
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
}

module.exports = TurmasController;

