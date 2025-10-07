import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { GrupoEstudianteService } from './grupo-estudiante.service';
import { CreateGrupoEstudianteDto } from './dto/create-grupo-estudiante.dto';

@Controller('grupos-estudiantes')
export class GrupoEstudianteController {
  constructor(private readonly grupoEstudianteService: GrupoEstudianteService) {}

  @Get()
  findAll() {
    return this.grupoEstudianteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.grupoEstudianteService.findOne(id);
  }

  @Post()
  create(@Body() dto: CreateGrupoEstudianteDto) {
    return this.grupoEstudianteService.create(dto);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() dto: CreateGrupoEstudianteDto) {
    return this.grupoEstudianteService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.grupoEstudianteService.remove(id);
  }
}
