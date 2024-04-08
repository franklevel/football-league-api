import { gql } from "apollo-server-express";

export const typeDefs = gql`
  """
  This type represents a competition
  """
  type Competition {
    name: String!
    code: String!
    areaName: String!
    teams: [Team]
  }

  """
  This type represents a player
  """
  type Player {
    id: String!
    name: String!
    position: String!
    nationality: String!
    dateOfBirth: String
  }

  """
  This type represents a coach
  """
  type Coach {
    id: String!
    name: String!
    nationality: String!
    dateOfBirth: String
  }

  """
  This type represents a team
  """
  type Team {
    id: String!
    name: String!
    address: String!
    shortName: String!
    areaName: String!
    tla: String!
    coach: Coach!
    players: [Player]
  }

  type Query {
    """
    This query returns players by league code and team name
    """
    getPlayers(leagueCode: String!, teamName: String): [Player]

    """
    This query returns all the competitions
    """
    getAllCompetitions: [Competition]

    """
    This query returns a player by ID
    """
    getPlayer(id: String!): Player

    """
    This query returns a team by name
    """
    getTeam(name: String!): Team
  }

  type Mutation {
    """
    This mutation import a league by providing a league code
    """
    importLeague(leagueCode: String!): Competition
  }
`;
