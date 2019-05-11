import {
  Column,
  Model,
  Table,
  PrimaryKey,
  Default,
} from 'sequelize-typescript';
import { v1 as uuid } from 'uuid';

@Table({
  timestamps: true,
})
export class User extends Model<User> {
  @PrimaryKey
  @Column
  id: string;

  @Column
  nickname: string;

  @Default('normal')
  @Column
  status: string;

  touchId = () => {
    this.id = uuid();
  }
}
