import { Repository } from "typeorm";
import { Player } from "../entities/Player.entity";
import { AppDataSource } from "../config/ormconfig";
import { PlayerRepositoryInterface } from "../interfaces/playerRepositoryInterface";

export class PlayerRepository implements PlayerRepositoryInterface{
  private playerRepository: Repository<Player>;

  constructor() {
    this.playerRepository = AppDataSource.getRepository(Player);
  }


  async findOne(id: string): Promise<Player> {
    return this.playerRepository.findOneBy({ id });
  }

}
