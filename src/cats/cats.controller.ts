import { Body, Controller, Get, Header, Post, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('cats')
export class CatsController {
    @Get()
    findAll(@Req() request: Request): string {
        return `This action returns all cats
            <br> query: ${request.query.name}`;
    }

    @Post()
    @Header('Cache-Control', 'no-store')
    create(@Body() body): string {
        return `This action adds a new cat
            <br> body: ${body.name}`;
    }
}
