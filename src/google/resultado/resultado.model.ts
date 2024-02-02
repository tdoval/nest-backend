import { Document, Schema, model } from 'mongoose';

interface Resultado extends Document {
    localidade: string;
    frequencia: string;
    palavraChave: string;
    codigoStatus?: number;
    corpoResposta?: string;
}

const ResultadoSchema = new Schema<Resultado>({
    localidade: { type: String, required: true },
    frequencia: { type: String, required: true },
    palavraChave: { type: String },
    codigoStatus: { type: Number },
    corpoResposta: { type: String },
});

const ResultadoModel = model<Resultado>('Resultado', ResultadoSchema);

export { ResultadoModel, ResultadoSchema };
