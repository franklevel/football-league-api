import { CompetitionService } from "@services/competitionService";
import { CompetitionRepository } from "@repositories/competitionRepository";
import { PlayerRepository } from "@repositories/playerRepository";
import { PlayerService } from "@services/playerService";
import { TeamRepository } from "@repositories/teamRepository";
import { TeamService } from "@services/teamService";
import { CoachService } from "@services/coachService";
import { CoachRepository } from "@repositories/coachRepository";

const competitionRepository = new CompetitionRepository();
const competitionService = new CompetitionService(competitionRepository);

const playerRepository = new PlayerRepository();
const playerService = new PlayerService(playerRepository);

const teamRepository = new TeamRepository();
const teamService = new TeamService(teamRepository);

const coachRepository = new CoachRepository();
const coachService = new CoachService(coachRepository, teamRepository);

const Query = {
  getPlayers: async (_, { leagueCode, teamName }) => {
    try {
      const competition = await competitionService.findOne(
        leagueCode,
        teamName
      );
      const players = competition.teams
        .map((team) => team.players)
        .map((player) => player);

      return players.flat();
    } catch (error) {
      throw new Error(error);
    }
  },
  getAllCompetitions: async () => {
    try {
      const competitions = await competitionService.findAll();
      return competitions;
    } catch (error) {
      throw new Error(error);
    }
  },
  getTeam: async (_, { name }) => {
    try {
      const team = await teamService.findOne(name);
      return team;
    } catch (error) {
      throw new Error(error);
    }
  },
  getPlayer: async (_, { playerId }) => {
    try {
      const player = await playerService.findOne(playerId);
      return player;
    } catch (error) {
      throw new Error(error);
    }
  },
};

const Mutation = {
  importLeague: async (_, { leagueCode }) => {
    try {
      const competition = await competitionService.import(leagueCode);
      return competition;
    } catch (error) {
      throw new Error(error);
    }
  },
  setTeamCoach: async (_, { teamName, coachInput }) => {
    try {
      console.log("From resolver");
      console.log(teamName, coachInput);
      const coach = await coachService.update(teamName, coachInput);
      return coach;
    } catch (error) {
      throw new Error(error);
    }
  },
};

export const resolvers = {
  Query,
  Mutation,
};
