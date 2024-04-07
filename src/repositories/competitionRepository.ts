import { Repository } from "typeorm";
import { Competition } from "../entities/Competition.entity";
import { AppDataSource } from "../config/ormconfig";
import { CompetitionRepositoryInterface } from "../interfaces/competitionRepositoryInterface";

export class CompetitionRepository implements CompetitionRepositoryInterface {
  private competitionRepository: Repository<Competition>;

  constructor() {
    this.competitionRepository = AppDataSource.getRepository(Competition);
  }

  async findOne(code: string): Promise<Competition> {
    return this.competitionRepository.findOne({
      where: { code },
      relations: ["teams"],
    });
  }

  async findAll(): Promise<Competition[]> {
    return this.competitionRepository.find();
  }

  async save(competition: Competition): Promise<void> {
    await this.competitionRepository.save(competition);
  }
}
