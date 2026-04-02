export interface Experience {
  id: string;
  company: string;
  roles: string[];
  startDate: Date;
  endDate: Date | null;
  descriptions: string;
  technologies: string[];
  projects: string[];
}

export function isCurrentJob(experience: Experience): boolean {
  return experience.endDate === null;
}
