import { Repository } from "typeorm";
import { Coach } from "@entities/Coach.entity";
import { AppDataSource } from "@config/ormconfig";
import { CoachRepositoryInterface } from "@interfaces/coachRespositoryInterface";

export class CoachRepository implements CoachRepositoryInterface {
  private coachRepository: Repository<Coach>;

  constructor() {
    this.coachRepository = AppDataSource.getRepository(Coach);
  }

  async save(coach: Coach): Promise<Coach> {
    return this.coachRepository.save(coach);
  }
}
