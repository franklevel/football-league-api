import { Competition } from '../entities/Competition.entity';

export interface CompetitionRepositoryInterface {
    findOne(competitionId: string, teamName?: string): Promise<Competition>;
    findAll(): Promise<Competition[]>;
    save(data: unknown): Promise<Competition>
}
