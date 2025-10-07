import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Docente } from './entities/docente.entity';
import { CreateDocenteDto } from './dto/create-docente.dto';

@Injectable()
export class DocenteService {
  constructor(
    @InjectRepository(Docente)
    private readonly docenteRepository: Repository<Docente>,
  ) {}

  findAll() {
    return this.docenteRepository.find();
  }

  findOne(id: number) {
    return this.docenteRepository.findOne({ where: { id } });
  }

  create(createDocenteDto: CreateDocenteDto) {
    const docente = this.docenteRepository.create(createDocenteDto);
    return this.docenteRepository.save(docente);
  }

  async update(id: number, data: Partial<CreateDocenteDto>) {
    await this.docenteRepository.update(id, data);
    return this.findOne(id);
  }

  async remove(id: number) {
    const docente = await this.findOne(id);
    return this.docenteRepository.remove(docente);
  }
}
