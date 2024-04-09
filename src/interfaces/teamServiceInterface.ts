import { Team } from "../entities/Team.entity";

export interface TeamServiceInterface {
  findOne(teamId: string): Promise<Team>;
  save(team: Team): Promise<Team>;
}
