import { Coach } from "../entities/Coach.entity";

export interface CoachRepositoryInterface {
  save(coach: Coach): Promise<Coach>;
}
