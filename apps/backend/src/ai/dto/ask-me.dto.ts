import {
  IsArray,
  IsNotEmpty,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';

import { Type } from 'class-transformer';
import { MessageDto } from './chat-cv.dto';

export class AskMeDto {
  @IsString()
  @IsNotEmpty()
  message!: string;

  @IsArray()
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => MessageDto)
  history?: MessageDto[];
}
