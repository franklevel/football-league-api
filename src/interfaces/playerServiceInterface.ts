import { Player } from "../entities/Player.entity";

export interface PlayerServiceInterface {
  findOne(playerId: string): Promise<Player>;
}
