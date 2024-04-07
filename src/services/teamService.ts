import { TeamServiceInterface } from "../interfaces/teamServiceInterface";
import { TeamRepositoryInterface } from "../interfaces/teamRepositoryInterface";
import { Team } from "../entities/Team.entity";


export class TeamService implements TeamServiceInterface {
  constructor(
    private readonly teamRepository: TeamRepositoryInterface
  ) {}

 
  async findOne(teamId: string): Promise<Team> {
    return await this.teamRepository.findOne(teamId);
  }

}
