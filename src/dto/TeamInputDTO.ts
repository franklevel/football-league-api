import CoachDTO from "./CoachDTO";
import CompetitionDTO from "./CompetitionDTO";
import TeamDTO from "./TeamDTO";

export interface TeamDetailsDTO {
  id: string;
  name: string;
  tla: string;
  areaName: string;
  shortName: string;
  address: string;
  area: { name: string };
  squad: TeamDTO[];
  coach: CoachDTO;
}
export interface TeamInputDTO extends TeamDTO {
  area: { name: string };
  competition: CompetitionDTO;
  teams: TeamDetailsDTO[];
}

export default TeamInputDTO;
