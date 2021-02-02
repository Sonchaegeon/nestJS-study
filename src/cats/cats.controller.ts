import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { Cat } from './entities/cat.entity';

@Controller('cats')
export class CatsController {
  @Get()
  findAll(@Query() query: Cat) {
    return `This action returns all cats 
      <br> name: ${query.name}`;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    console.log(id);
    return `This action return a #${id} cat`;
  }

  @Post()
  @Header('Cache-Control', 'no-store')
  create(@Body() createCatDto: CreateCatDto) {
    return `This action adds a new cat
      <br> name: ${createCatDto.name} age: ${createCatDto.age}`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return `This action updates a #${id} cat`;
  }

  @Delete('id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} cat`;
  }
}
