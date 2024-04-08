import { Competition } from "../entities/Competition.entity";

export interface CompetitionServiceInterface {
  findOne(competitionId: string, teamName?: string): Promise<Competition>;
  findAll(): Promise<Competition[]>;
  import(code: string): Promise<void>
}
