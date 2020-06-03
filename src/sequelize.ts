import {Sequelize} from 'sequelize-typescript';
import { config } from './config/config';


const c = config.dev;

const DATABASE_URI= 'postgresql://udagramvivekdev:udagramvivekdev@udagramvivekdev.ce3djkvlodxa.us-east-1.rds.amazonaws.com:5432/udagramvivekdev';

export const sequelize = new Sequelize(DATABASE_URI);


