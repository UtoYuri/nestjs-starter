import { Sequelize } from 'sequelize-typescript';
import { User } from '../modules/users/user.entity';
import { DB_CONFIG } from '../config';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize(DB_CONFIG);
      sequelize.addModels([User]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
