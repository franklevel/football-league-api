import TeamInputDTO from "../dto/TeamInputDTO";
import CompetitionDTO from "../dto/CompetitionDTO";
import { mapTeams } from "./TeamMapper";

export function mapCompetition(
  data: TeamInputDTO
): CompetitionDTO {
  return {
    name: data?.competition.name,
    code: data?.competition.code,
    areaName: data?.teams[0]?.area.name,
    teams: mapTeams(data),
  };
}
