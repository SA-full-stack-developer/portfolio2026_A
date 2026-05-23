import { Company, Experience, Project, Skill } from "../../../../../libs/shared/models/src/index.ts";
export declare class ExperienceResponseDto implements Experience {
    id: string;
    companyId: string;
    roles: string[];
    description: string;
    technologyIds: string[];
    projectIds: string[];
    showCompany: boolean;
    dates?: {
        startDate: Date;
        endDate: Date | null;
    }[];
    startDate?: Date;
    endDate?: Date | null;
    company?: Company;
    projects: Project[];
    skills: Skill[];
}
