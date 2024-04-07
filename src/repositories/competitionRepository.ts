import { Repository } from "typeorm";
import { Competition } from "../entities/Competition.entity";
import { AppDataSource } from "../config/ormconfig";
import { CompetitionRepositoryInterface } from "../interfaces/competitionRepositoryInterface";

export class CompetitionRepository implements CompetitionRepositoryInterface {
  private competitionRepository: Repository<Competition>;

  constructor() {
    this.competitionRepository = AppDataSource.getRepository(Competition);
  }

  async findOne(competitionId: string): Promise<Competition> {
    return this.competitionRepository.findOneBy({ id: competitionId });
  }

  async findAll(): Promise<Competition[]> {
    return this.competitionRepository.find();
  }

  async save(competition: Competition): Promise<void> {
    await this.competitionRepository.save(competition);
  }
}
