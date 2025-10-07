import { IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class CreateGrupoEstudianteDto {
  @IsOptional()
  @IsNumber()
  nota?: number;

  @IsNotEmpty()
  @IsNumber()
  creditos: number;

  @IsNotEmpty()
  @IsNumber()
  estudiante_id: number;

  @IsNotEmpty()
  @IsNumber()
  grupo_id: number;
}
