import { Injectable } from '@nestjs/common';
import { COMPANIES_DATA } from './data/companies.data';
import { Company } from './entities/company.entity';

@Injectable()
export class CompaniesService {
  private companies: Company[] = COMPANIES_DATA;

  findAll(): Company[] {
    return this.companies;
  }

  findOne(id: string): Company | undefined {
    return this.companies.find((c) => c.id === id);
  }
}
