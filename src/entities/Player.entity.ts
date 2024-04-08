import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Player {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  position: string;

  @Column({ nullable: true })
  dateOfBirth: string;

  @Column()
  nationality: string;
}
