import CoachDTO from "@dto/CoachDTO";
import TeamDTO from "@dto/TeamDTO";

export interface CompetitionDTO {
  name: string;
  code: string;
  areaName: string;
  coach?: Partial<CoachDTO>;
  teams?: Partial<TeamDTO>[];
}
export default CompetitionDTO;
