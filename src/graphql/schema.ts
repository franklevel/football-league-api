import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Competition {
    name: String!
    code: String!
    areaName: String!
  }

  type Player { 
    id: String!
    name: String!
    position: String!
    nationality: String!
    dateOfBirth: String!
  }

  type Coach {
    id: String!
    name: String!
    nationality: String!
    dateOfBirth: String!
  }

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
    getCompetition(code: String!): Competition
    getAllCompetitions: [Competition]
    getPlayer(id: String!): Player
    getTeam(teamId: String!): Team
  }

  type Mutation {
    importLeague(code: String!): Competition
  }
`;
