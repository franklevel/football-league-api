import { CompetitionService } from "../services/competitionService";
import { CompetitionRepository } from "../repositories/competitionRepository";
import { PlayerRepository } from "../repositories/playerRepository";
import { PlayerService } from "../services/playerService";
import { TeamRepository } from "../repositories/teamRepository";
import { TeamService } from "../services/teamService";

const competitionRepository = new CompetitionRepository();
const competitionService = new CompetitionService(competitionRepository);

const playerRepository = new PlayerRepository();
const playerService = new PlayerService(playerRepository);

const teamRepository = new TeamRepository();
const teamService = new TeamService(teamRepository);

const Query = {
  getCompetition: async (_, { code }) => {
    try {
      const competition = await competitionService.findOne(code);
      return competition;
    } catch (error) {
      throw new Error("Failed to get competition");
    }
  },
  getAllCompetitions: async () => {
    try {
      const competitions = await competitionService.findAll();
      return competitions;
    } catch (error) {
      throw new Error("Failed to get all competitions");
    }
  },
  getTeam: async (_, { teamId }) => {
    try {
      const team = await teamService.findOne(teamId);
      return team;
    } catch (error) {
      throw new Error(`Failed to get team details: Error: ${error}`);
    }
  },
  getPlayer: async (_, { playerId }) => {
    try {
      const player = await playerService.findOne(playerId);
      return player;
    } catch (error) {
      throw new Error("Failed to get player");
    }
  },
};

const Mutation = {
  importLeague: async (_, { code }) => {
    try {
      const competition = await competitionService.import(code);
      return competition;
    } catch (error) {
      throw new Error("Failed to create competition");
    }
  },
};

export const resolvers = {
  Query,
  Mutation,
};
