import CoachDTO from "./CoachDTO";
import TeamDTO from "./TeamDTO";

export interface CompetitionDTO {
  name: string;
  code: string;
  areaName: string;
  coach?: Partial<CoachDTO>;
  teams?: Partial<TeamDTO>[];
}
export default CompetitionDTO;
