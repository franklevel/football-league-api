import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { Coach } from "./Coach.entity";
import { Player } from "./Player.entity";

@Entity()
export class Team {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  tla: string;

  @Column()
  shortName: string;

  @Column()
  areaName: string;

  @Column()
  address: string;

  @ManyToOne(() => Coach, (coach) => coach.id, { cascade: true })
  coach: Coach;

  @ManyToMany(() => Player, (player) => player.id, { cascade: true })
  @JoinTable()
  players: Player[];
}
