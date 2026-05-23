import { CompaniesService } from './companies.service';
export declare class CompaniesController {
    private readonly companiesService;
    constructor(companiesService: CompaniesService);
    findAll(): import("@portfolio/shared/models").Company[];
    findOne(id: string): import("@portfolio/shared/models").Company | undefined;
}
