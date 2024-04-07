import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: '127.0.0.1',
  port: 3306,
  username: 'football_league_user',
  password: 'football_league_pwd',
  database: 'football_league_db',
  entities: ['src/entities/*.entity.ts'],
  migrations: ['src/database/migrations/*.ts'],
  synchronize: true,
  logging: true,
});