import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Coach {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  dateOfBirth: string;

  @Column({ nullable: true })
  nationality: string;
}
