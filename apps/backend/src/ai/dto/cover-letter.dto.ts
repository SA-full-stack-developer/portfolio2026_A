import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CoverLetterDto {
  @IsString()
  @IsNotEmpty()
  company!: string;

  @IsString()
  @IsNotEmpty()
  role!: string;

  @IsString()
  @IsOptional()
  jobDescription?: string;
}
