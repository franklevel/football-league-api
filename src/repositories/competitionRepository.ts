import { Repository } from "typeorm";
import { Competition } from "../entities/Competition.entity";
import { AppDataSource } from "../config/ormconfig";
import { CompetitionRepositoryInterface } from "../interfaces/competitionRepositoryInterface";

export class CompetitionRepository implements CompetitionRepositoryInterface {
  private competitionRepository: Repository<Competition>;

  constructor() {
    this.competitionRepository = AppDataSource.getRepository(Competition);
  }

  async findOne(code: string, name?: string): Promise<Competition> {
    const queryBuilder = this.competitionRepository
      .createQueryBuilder("competition")
      .leftJoinAndSelect("competition.teams", "team")
      .leftJoinAndSelect("team.players", "player")
      .leftJoinAndSelect("team.coach", "coach")
      .where("competition.code = :code", { code });

    if (name) {
      queryBuilder.andWhere("team.shortName = :name", { name });
    }

    return queryBuilder.getOne();
  }

  async findAll(): Promise<Competition[]> {
    return this.competitionRepository.find();
  }

  async save(competition: Competition): Promise<void> {
    await this.competitionRepository.save(competition);
  }
}
