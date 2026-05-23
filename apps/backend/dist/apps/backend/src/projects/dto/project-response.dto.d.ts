import { Company, Project } from "../../../../../libs/shared/models/src/index.ts";
export declare class ProjectResponseDto implements Project {
    id: string;
    name: string;
    description: string;
    companyId: string;
    company?: Company;
}
