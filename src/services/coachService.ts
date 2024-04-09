import { Coach } from "@entities/Coach.entity";
import { CoachRepositoryInterface } from "@interfaces/coachRespositoryInterface";
import { CoachServiceInterface } from "@interfaces/coachServiceInterface";
import { TeamRepositoryInterface } from "@interfaces/teamRepositoryInterface";

export class CoachService implements CoachServiceInterface {
  constructor(
    private readonly coachRepository: CoachRepositoryInterface,
    private readonly teamRepository: TeamRepositoryInterface
  ) {}

  async update(teamName: string, coach: Coach): Promise<Coach> {
    const team = await this.teamRepository.findOne(teamName);

    if (!team) {
      throw new Error(`Team with name ${teamName} not found`);
    }
    console.log(`Received coach: ${JSON.stringify(coach, null, 2)}`);
    console.log(team.coach);
    const updatedCoach = { ...team.coach, ...coach };
    console.log(updatedCoach);
    await this.teamRepository.save(team);
    await this.coachRepository.save(updatedCoach);

    return coach;
  }
}
