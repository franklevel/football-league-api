import TeamMemberDTO from "./TeamMemberDTO";

export interface PlayerDTO extends TeamMemberDTO {
  id: string;
  position: string;
}

export default PlayerDTO;
