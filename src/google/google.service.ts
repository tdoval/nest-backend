import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import axios from 'axios';

interface ResultadoDocument {
    localidade: string;
    frequencia: string;
    palavraChave: string;
    codigoStatus?: number;
    corpoResposta?: string;
}


@Injectable()
export class GoogleService {
    constructor(@InjectModel('Resultado') private readonly resultadoModel: Model<ResultadoDocument>) { }

    async searchGoogle(localidade: string, frequencia: string, palavraChave: string): Promise<ResultadoDocument> {
        try {
            const { data } = await axios.get(`http://localhost:8080/search`, {
                params: {
                    location: localidade,
                    frequency: frequencia,
                    keywords: palavraChave,
                },
            })

            console.log(`Console Log: ${data}`);

            const resultado = new this.resultadoModel({
                localidade: data.localidade,
                frequencia: data.frequencia,
                palavraChave: data.palavrasChave,
                codigoStatus: data.codigoStatus,
                corpoResposta: data.corpoResposta,
            });

            console.log(`RESULTADO LOG: ${resultado}`);

            return await resultado.save();
        } catch (error) {
            console.error('Erro ao consumir a API do Google:', error)
            return null;
        }

    }
}
