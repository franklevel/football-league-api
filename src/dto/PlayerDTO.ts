import TeamMemberDTO from "@dto/TeamMemberDTO";

export interface PlayerDTO extends TeamMemberDTO {
  id: string;
  position: string;
}

export default PlayerDTO;
