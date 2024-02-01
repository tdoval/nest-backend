import { Controller, Post, Body } from '@nestjs/common';
import { GoogleService } from './google.service';

@Controller('google')
export class GoogleController {
    constructor(private readonly googleService: GoogleService) { }

    @Post('/search')
    async searchGoogle(@Body() searchParams: any): Promise<any> {
        const { frequencia, localidade, palavraChave } = searchParams;
        const results = await this.googleService.searchGoogle(frequencia, localidade, palavraChave);
        return results;
    }
}
