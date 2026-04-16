import { Company } from './entities/company.entity';
export declare class CompaniesService {
    private companies;
    findAll(): Company[];
    findOne(id: string): Company | undefined;
}
