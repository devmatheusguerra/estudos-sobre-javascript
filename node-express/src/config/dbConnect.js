import dotenv from 'dotenv';
import mongoose from "mongoose";
// Loading Data From .env File
dotenv.config()


mongoose.connect(`mongodb+srv://devmatheusguerra:${process.env.mongo_password}@alura-livros.oqo5gfz.mongodb.net/?retryWrites=true&w=majority`);

const db = mongoose.connection;

export default db;