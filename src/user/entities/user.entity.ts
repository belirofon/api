import { IsEnum } from 'class-validator';
import { Column, PrimaryGeneratedColumn } from 'typeorm';

enum Roles {
  ADMIN,
  USER,
  WRITER,
}
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ length: 500 })
  login: string;

  @Column()
  password: string;

  @Column()
  isLogin: boolean;

  @IsEnum(Roles)
  role: Roles[];
}
