import { Controller, Get, Param } from '@nestjs/common';

import { ApiOperation } from '@nestjs/swagger';
import { ExperienceService } from './experience.service';

@Controller('experience')
export class ExperienceController {
  constructor(private readonly experienceService: ExperienceService) {}

  @Get()
  @ApiOperation({ summary: 'Listar toda la trayectoria profesional' })
  findAll() {
    return this.experienceService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Obtener detalles de una experiencia específica por ID',
  })
  findOne(@Param('id') id: string) {
    return this.experienceService.findOne(id);
  }
}
