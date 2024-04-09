import { Like, Repository } from "typeorm";
import { Team } from "@entities/Team.entity";
import { AppDataSource } from "@config/ormconfig";
import { TeamRepositoryInterface } from "@interfaces/teamRepositoryInterface";

export class TeamRepository implements TeamRepositoryInterface {
  private teamRepository: Repository<Team>;

  constructor() {
    this.teamRepository = AppDataSource.getRepository(Team);
  }

  async findOne(name: string): Promise<Team> {
    return await this.teamRepository.findOne({
      where: [{ name: Like(`%${name}%`) }, { shortName: Like(`%${name}%`) }],
      relations: ["coach", "players"],
    });
  }

  async save(team: Team): Promise<Team> {
    return await this.teamRepository.save(team);
  }
}
