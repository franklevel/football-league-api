import CoachDTO from "@dto/CoachDTO";
import CompetitionDTO from "@dto/CompetitionDTO";
import TeamDTO from "@dto/TeamDTO";

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
