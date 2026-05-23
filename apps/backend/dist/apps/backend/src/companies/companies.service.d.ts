import { Company } from "../../../../libs/shared/models/src/index.ts";
export declare class CompaniesService {
    private companies;
    findAll(): Company[];
    findOne(id: string): Company | undefined;
}
