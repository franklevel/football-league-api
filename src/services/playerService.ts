import { PlayerServiceInterface } from "@interfaces/playerServiceInterface";
import { PlayerRepositoryInterface } from "@interfaces/playerRepositoryInterface";
import { Player } from "@entities/Player.entity";


export class PlayerService implements PlayerServiceInterface {
  constructor(
    private readonly playerRepository: PlayerRepositoryInterface
  ) {}

 
  async findOne(code: string): Promise<Player> {
    return await this.playerRepository.findOne(code);
  }

}
