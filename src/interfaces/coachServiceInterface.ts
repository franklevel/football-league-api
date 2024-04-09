import { Coach } from "../entities/Coach.entity";

export interface CoachServiceInterface {
  update(teamName: string, coach: Coach): Promise<Coach>;
}
