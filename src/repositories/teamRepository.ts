import { Repository } from "typeorm";
import { Team } from "../entities/Team.entity";
import { AppDataSource } from "../config/ormconfig";
import { TeamRepositoryInterface } from "../interfaces/teamRepositoryInterface";

export class TeamRepository implements TeamRepositoryInterface {
  private teamRepository: Repository<Team>;

  constructor() {
    this.teamRepository = AppDataSource.getRepository(Team);
  }

  async findOne(teamId: string): Promise<Team> {
    return await this.teamRepository.findOne({
      where: { id: teamId },
      relations: ["coach", "players"],
    });
  }
}
