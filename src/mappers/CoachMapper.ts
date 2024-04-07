import CoachDTO from "../dto/CoachDTO";

export function mapCoach(coach: Partial<CoachDTO>): CoachDTO {
  return {
    name: coach.name,
    dateOfBirth: coach.dateOfBirth,
    nationality: coach.nationality,
  };
}
