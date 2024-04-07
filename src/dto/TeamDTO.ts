import CoachDTO from "./CoachDTO";

export interface TeamDTO {
  id: string;
  name: string;
  tla: string;
  shortName: string;
  areaName: string;
  address: string;
  coach: CoachDTO;
}

export default TeamDTO;
