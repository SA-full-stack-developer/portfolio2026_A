import { SkillsService } from '../skills/skills.service';
import { StatResponseDto } from './dto/stat-response.dto';
export declare class StatsService {
    private readonly skillsService;
    constructor(skillsService: SkillsService);
    private readonly rawStats;
    findAll(): StatResponseDto[];
    private calculateFinalValue;
    private shouldShowPlus;
    private diffInYears;
    private diffInDays;
}
