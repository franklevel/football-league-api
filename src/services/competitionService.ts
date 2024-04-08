import { CompetitionServiceInterface } from "@interfaces/competitionServiceInterface";
import { CompetitionRepositoryInterface } from "@interfaces/competitionRepositoryInterface";
import { Competition } from "@entities/Competition.entity";
import { mapCompetition } from "@mappers/CompetitionMapper";
import { fetchData } from "@utils/fetchData";
import { BASE_API_URL } from "@utils/constants";

export class CompetitionService implements CompetitionServiceInterface {
  constructor(
    private readonly competitionRepository: CompetitionRepositoryInterface
  ) {}

  async findAll(): Promise<Competition[]> {
    return await this.competitionRepository.findAll();
  }

  async findOne(
    competitionId: string,
    teamName?: string
  ): Promise<Competition> {
    const competition = await this.competitionRepository.findOne(
      competitionId,
      teamName
    );
    if (!competition) {
      throw new Error("Competition not found");
    }
    console.log(competition);
    return competition;
  }

  async import(code: string): Promise<Competition> {
    const response = await fetchData(`${BASE_API_URL}competitions/${code}/teams`, {
      method: "GET",
      redirect: "follow",
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();

    if (!data) {
      throw new Error("No data received from the server");
    }

    const competition = mapCompetition(data);
    return await this.competitionRepository.save(competition);
  }
}
