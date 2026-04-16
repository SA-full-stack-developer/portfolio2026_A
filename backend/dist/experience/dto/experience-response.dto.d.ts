import { Company } from "../../companies/entities/company.entity";
import { Project } from "../../projects/entities/project.entity";
import { Skill } from "../../skills/entities/skill.entity";
import { Experience } from '../entities/experience.entity';
export declare class ExperienceResponseDto extends Experience {
    company?: Company;
    projects: Project[];
    skills: Skill[];
}
