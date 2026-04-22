import { Controller, Get } from '@nestjs/common';

import { ApiOperation } from '@nestjs/swagger';
import { StatsService } from './stats.service';

@Controller('stats')
export class StatsController {
  constructor(private readonly statsService: StatsService) {}

  @Get()
  @ApiOperation({
    summary:
      'Obtener estadísticas generales (años de experiencia, proyectos totales, etc.)',
  })
  findAll() {
    return this.statsService.findAll();
  }
}
