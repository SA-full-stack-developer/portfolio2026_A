import { CompaniesService } from './companies.service';
export declare class CompaniesController {
    private readonly companiesService;
    constructor(companiesService: CompaniesService);
    findAll(): import("./entities/company.entity").Company[];
    findOne(id: string): import("./entities/company.entity").Company | undefined;
}
