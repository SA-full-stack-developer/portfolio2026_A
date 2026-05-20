import { StatsService } from './stats.service';
export declare class StatsController {
    private readonly statsService;
    constructor(statsService: StatsService);
    findAll(): import("./dto/stat-response.dto").StatResponseDto[];
}
