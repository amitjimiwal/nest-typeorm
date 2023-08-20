import { join } from 'path';
import { DataSourceOptions } from 'typeorm';
const datasourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  entities: [join(__dirname, '**', '*.entity.{ts,js}')],
  synchronize: false,
  migrations: ['dist/src/db/migrations/*.js'],
};
// const datasource=new DataSource(datasourceOptions);
export default datasourceOptions;
