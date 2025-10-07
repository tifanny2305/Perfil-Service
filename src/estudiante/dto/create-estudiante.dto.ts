import { IsNotEmpty, IsString, IsEmail, IsOptional, IsNumber } from 'class-validator';

export class CreateEstudianteDto {
  @IsNotEmpty()
  @IsString()
  registro: string;

  @IsNotEmpty()
  @IsString()
  nombre: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsString()
  telefono?: string;

  // relación con users
  @IsOptional()
  @IsNumber()
  user_id?: number;

  @IsNotEmpty()
  @IsNumber()
  plan_estudio_id: number;
}
