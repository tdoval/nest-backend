import * as mongoose from 'mongoose';

export const ResultadoSchema = new mongoose.Schema({
    localidade: String,
    frequencia: String,
    palavraChave: String,
});

export interface Resultado extends mongoose.Document {
    localidade: String,
    frequencia: String,
    palavraChave: String,
}

export const ResultadoModel = mongoose.model<Resultado>('Resultado', ResultadoSchema);
