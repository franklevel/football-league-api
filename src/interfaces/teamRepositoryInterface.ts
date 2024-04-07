import { Team } from '../entities/Team.entity';

export interface TeamRepositoryInterface {
    findOne(teamId: string): Promise<Team>;
}
