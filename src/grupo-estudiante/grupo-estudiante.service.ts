import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GrupoEstudiante } from './entities/grupo-estudiante.entity';
import { CreateGrupoEstudianteDto } from './dto/create-grupo-estudiante.dto';

@Injectable()
export class GrupoEstudianteService {
  constructor(
    @InjectRepository(GrupoEstudiante)
    private readonly grupoEstudianteRepository: Repository<GrupoEstudiante>,
  ) {}

  findAll() {
    return this.grupoEstudianteRepository.find();
  }

  findOne(id: number) {
    return this.grupoEstudianteRepository.findOne({ where: { id } });
  }

  create(dto: CreateGrupoEstudianteDto) {
    const grupoEstudiante = this.grupoEstudianteRepository.create(dto);
    return this.grupoEstudianteRepository.save(grupoEstudiante);
  }

  async update(id: number, data: Partial<CreateGrupoEstudianteDto>) {
    await this.grupoEstudianteRepository.update(id, data);
    return this.findOne(id);
  }

  async remove(id: number) {
    const grupoEstudiante = await this.findOne(id);
    return this.grupoEstudianteRepository.remove(grupoEstudiante);
  }
}
