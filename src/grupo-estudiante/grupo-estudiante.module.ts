import { Module } from '@nestjs/common';
import { GrupoEstudianteService } from './grupo-estudiante.service';
import { GrupoEstudianteController } from './grupo-estudiante.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GrupoEstudiante } from './entities/grupo-estudiante.entity';

@Module({
  imports: [TypeOrmModule.forFeature([GrupoEstudiante])],
  controllers: [GrupoEstudianteController],
  providers: [GrupoEstudianteService],
})
export class GrupoEstudianteModule {}
