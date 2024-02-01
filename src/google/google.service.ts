import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Resultado } from './resultado/resultado.model';

@Injectable()
export class GoogleService {
    constructor(@InjectModel('Resultado') private readonly resultadoModel: Model<Resultado>) { }

    async searchGoogle(localidade: string, frequencia: string, palavraChave: string, retornoPesquisa: string): Promise<Resultado> {
        const resultado = new this.resultadoModel({ localidade, frequencia, palavraChave, retornoPesquisa });
        console.log(resultado);
        return await resultado.save();
    }
}
