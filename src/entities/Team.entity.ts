import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinTable,
  ManyToOne,
  OneToMany,
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
  @JoinTable()
  coach: Coach;

  @OneToMany(() => Player, (player) => player.id, { cascade: true })
  @JoinTable()
  players: Player[];
}
