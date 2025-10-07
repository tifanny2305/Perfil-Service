import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { EstudianteService } from './estudiante.service';
import { CreateEstudianteDto } from './dto/create-estudiante.dto';

@Controller('estudiantes')
export class EstudianteController {
  constructor(private readonly estudianteService: EstudianteService) {}

  @Get()
  findAll() {
    return this.estudianteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.estudianteService.findOne(id);
  }

  @Post()
  create(@Body() dto: CreateEstudianteDto) {
    return this.estudianteService.create(dto);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() dto: CreateEstudianteDto) {
    return this.estudianteService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.estudianteService.remove(id);
  }
}
