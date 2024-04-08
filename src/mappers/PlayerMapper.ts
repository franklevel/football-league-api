import { Player } from "../entities/Player.entity";
import PlayerDTO from "../dto/PlayerDTO";

export function mapPlayers(
  players: Partial<PlayerDTO>[]
): PlayerDTO[] {
  return players.map((player: PlayerDTO) => {
    const { name, position, dateOfBirth, nationality } = player;

    const newPlayer = new Player();
    newPlayer.name = name;
    newPlayer.position = position;
    newPlayer.dateOfBirth = dateOfBirth;
    newPlayer.nationality = nationality;

    return newPlayer;
  });
}
