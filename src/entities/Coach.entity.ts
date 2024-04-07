import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Coach {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  dateOfBirth: string;

  @Column()
  nationality: string;
}
