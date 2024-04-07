import { CompetitionServiceInterface } from "../interfaces/competitionServiceInterface";
import { CompetitionRepositoryInterface } from "../interfaces/competitionRepositoryInterface";
import { Competition } from "../entities/Competition.entity";
import { mapCompetition } from "../mappers/CompetitionMapper";

const BASE_API_URL = `https://api.football-data.org/v4/`;

export class CompetitionService implements CompetitionServiceInterface {
  constructor(
    private readonly competitionRepository: CompetitionRepositoryInterface
  ) {}

  async findAll(): Promise<Competition[]> {
    return await this.competitionRepository.findAll();
  }

  async findOne(competitionId: string): Promise<Competition> {
    return await this.competitionRepository.findOne(competitionId);
  }

  async import(code: string): Promise<void> {
    const response = await fetch(`${BASE_API_URL}competitions/${code}/teams`, {
      method: "GET",
      headers: {
        "X-Auth-Token": "47a55eccef364dc893af2b5a8f7aebf6",
      },
      redirect: "follow",
    });
    const data = await response.json();
    
    if (!data) {
      throw new Error("Error on fetching data");
    }

    const competition = mapCompetition(data);
    console.log(JSON.stringify(competition, null, 2));
    await this.competitionRepository.save(competition);
  }
}
