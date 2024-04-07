import { Coach } from "../entities/Coach.entity";
import TeamDTO from "../dto/TeamDTO";
import TeamInputDTO, { TeamDetailsDTO } from "../dto/TeamInputDTO";
import { Team } from "../entities/Team.entity";
import { mapPlayers } from "./PlayerMapper";

export function mapTeams(data: TeamInputDTO): TeamDTO[] {
  return data?.teams?.map((team: TeamDetailsDTO) => {
    const {
      name,
      tla,
      shortName,
      address,
      coach,
      squad,
      area: { name: areaName },
    } = team;

    const newCoach = new Coach();
    newCoach.name = coach.name;
    newCoach.nationality = coach.nationality;
    newCoach.dateOfBirth = coach.dateOfBirth;

    const players = mapPlayers(squad);

    const newTeam = new Team();
    newTeam.name = name;
    newTeam.tla = tla;
    newTeam.shortName = shortName;
    newTeam.areaName = areaName;
    newTeam.address = address;
    newTeam.coach = newCoach;
    newTeam.players = players;
    
    return newTeam;
  });
}
