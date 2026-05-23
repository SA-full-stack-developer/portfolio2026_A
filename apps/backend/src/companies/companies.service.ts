import { Injectable } from '@nestjs/common';
import { COMPANIES_DATA } from './data/companies.data';
import { Company } from '@portfolio/shared/models';

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
