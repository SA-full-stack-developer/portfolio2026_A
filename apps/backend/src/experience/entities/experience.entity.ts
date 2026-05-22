export class Experience {
  id!: string;
  companyId!: string;
  roles!: string[];
  description!: string;
  technologyIds!: string[];
  projectIds!: string[];
  showCompany!: boolean;
  dates?: {
    startDate: Date;
    endDate: Date | null;
  }[];
  startDate?: Date;
  endDate?: Date | null;
}
