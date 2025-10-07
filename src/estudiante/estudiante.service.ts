import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Estudiante } from './entities/estudiante.entity';
import { CreateEstudianteDto } from './dto/create-estudiante.dto';

@Injectable()
export class EstudianteService {
  constructor(
    @InjectRepository(Estudiante)
    private readonly estudianteRepository: Repository<Estudiante>,
  ) {}

  findAll() {
    return this.estudianteRepository.find();
  }

  findOne(id: number) {
    return this.estudianteRepository.findOne({ where: { id } });
  }

  create(createEstudianteDto: CreateEstudianteDto) {
    const estudiante = this.estudianteRepository.create(createEstudianteDto);
    return this.estudianteRepository.save(estudiante);
  }

  async update(id: number, data: Partial<CreateEstudianteDto>) {
    await this.estudianteRepository.update(id, data);
    return this.findOne(id);
  }

  async remove(id: number) {
    const estudiante = await this.findOne(id);
    return this.estudianteRepository.remove(estudiante);
  }
}
