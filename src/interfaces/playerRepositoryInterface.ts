import { Player } from '../entities/Player.entity';

export interface PlayerRepositoryInterface {
    findOne(playerId: string): Promise<Player>;
}
