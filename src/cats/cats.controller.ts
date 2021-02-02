import {
  Body,
  Controller,
  Get,
  Header,
  Param,
  Post,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import { CreateCatDto } from './create-cat.dto';

@Controller('cats')
export class CatsController {
  @Get()
  findAll(@Req() request: Request): string {
    return `This action returns all cats
      <br> query: ${request.query.name}`;
  }

  @Post()
  @Header('Cache-Control', 'no-store')
  create(@Body() createCatDto: CreateCatDto) {
    return `This action adds a new cat
      <br> name: ${createCatDto.name} age: ${createCatDto.age}`;
  }

  @Get(':id')
  findOne(@Param('id') id): string {
    console.log(id);
    return `This action return a #${id} cat`;
  }
}
