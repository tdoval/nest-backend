import { Controller, Post, Body } from '@nestjs/common';
import { GoogleService } from './google.service';

@Controller('google')
export class GoogleController {
    constructor(private readonly googleService: GoogleService) { }

    @Post('/search')
    async searchGoogle(@Body() searchParams: any): Promise<any> {
        const { localidade, frequencia, palavraChave } = searchParams;
        const results = await this.googleService.searchGoogle(localidade, frequencia, palavraChave);
        return results;
    }
}
