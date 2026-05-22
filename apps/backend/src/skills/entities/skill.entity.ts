export class Skill {
  id!: string;
  name!: string;
  level!: number;
  category!: 'frontend' | 'backend' | 'devops' | 'tools' | 'soft';
  icon!: string;
  highlighted!: boolean;
  yearsOfExperience!: number;
}
