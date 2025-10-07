import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DocenteModule } from './docente/docente.module';
import { EstudianteModule } from './estudiante/estudiante.module';
import { GrupoEstudianteModule } from './grupo-estudiante/grupo-estudiante.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        host: config.get<string>('DATABASE_HOST'),
        port: config.get<number>('DATABASE_PORT') || 5432,
        username: config.get<string>('DATABASE_USER'),
        password: config.get<string>('DATABASE_PASSWORD'),
        database: config.get<string>('DATABASE_NAME'),
        autoLoadEntities: true,
        synchronize: config.get<string>('NODE_ENV') !== 'production',
        ssl: config.get<string>('DB_SSL') === 'true',
        extra: {
          connectionLimit: 10,
          statement_timeout: 60000,
          idle_in_transaction_session_timeout: 60000,
        },
      }),
    }),
    DocenteModule,
    GrupoEstudianteModule,
    EstudianteModule

  ],
})
export class AppModule { }
