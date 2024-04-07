import { Request, Response } from "express";
import { CompetitionService } from "../services/competitionService";
import { CompetitionRepository } from "../repositories/competitionRepository";
import { Competition } from "../entities/Competition.entity";

const competitionRepository = new CompetitionRepository();

const competitionService = new CompetitionService(competitionRepository);

export const getAll = async (
  req: Request,
  res: Response
): Promise<Competition[] | void> => {
  try {
    const { code } = req.query;
    const competitions = await competitionService.import(code as string);
    console.log({ competitions });
    res.status(200).json({ competitions });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to send Compentition", error });
  }
};
