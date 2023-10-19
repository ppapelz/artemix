import { Sequelize } from 'sequelize';
import config from '../../config.json';
import {initializeModels} from './entities';

let sequelizeInstance: Sequelize | null = null;

export function getSequelizeInstance(): Sequelize {
  if (!sequelizeInstance) {
    const env = process.env.NODE_ENV || 'development';
    const dbConfig = config[env];
    sequelizeInstance = new Sequelize({...dbConfig, logging: console.log });
    initializeModels(sequelizeInstance);
  }



  return sequelizeInstance;
}