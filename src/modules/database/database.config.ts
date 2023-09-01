import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

@Injectable()
export class DatabaseConfig implements TypeOrmOptionsFactory {
  constructor(private configService: ConfigService) {}

  /**
   * Retrieve and return the TypeORM module options for database configuration.
   *
   * @returns A Promise that resolves to a TypeOrmModuleOptions object containing database configuration.
   */
  async createTypeOrmOptions(): Promise<TypeOrmModuleOptions> {
    return await this.configService.get('database');
  }
}
