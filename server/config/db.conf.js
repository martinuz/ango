import mongoose from 'mongoose';
import dbConst from '../constants/db.json';

export default class DBConfig {
    static getMongoUrl(){
      if(process.env.NODE_ENV === 'production'){
        return process.env.MONGOHQ_URL;
      }
      else if (process.env.NODE_ENV === 'dockermachine'){
        return dbConst.dockermachine;
      } else {
        return dbConst.localhost;
      }
    }

    static init() {
      const URL = this.getMongoUrl();

      mongoose.connect(URL);
      mongoose.connection.on('error', console.error.bind(console, 'An error ocurred with the DB connection: '));
    }
};
