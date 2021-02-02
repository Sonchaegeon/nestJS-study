import { Body, Controller, Get, Header, Param, Post, Req } from '@nestjs/common';
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

    @Get(':id')
    findOne(@Param('id') id): string {
        console.log(id);
        return `This action return a #${id} cat`;
    }
}
