import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Unique,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { Team } from "./Team.entity";

@Entity()
@Unique(["code"])
export class Competition {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  code: string;

  @Column()
  areaName: string;

  @ManyToMany(() => Team, (team) => team.id, {
    cascade: true,
  })
  @JoinTable()
  teams: Team[];
}
