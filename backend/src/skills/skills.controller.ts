import { Controller, Get, Query } from '@nestjs/common';

import { ApiOperation } from '@nestjs/swagger';
import { SkillsService } from './skills.service';

@Controller('skills')
export class SkillsController {
  constructor(public readonly skillsService: SkillsService) {}

  @Get()
  @ApiOperation({ summary: 'Obtener listado completo de habilidades' })
  findAll(
    @Query('category') category?: string,
    @Query('onlyHighlighted') onlyHighlighted?: string,
  ) {
    const highlighted = onlyHighlighted === 'true';
    return this.skillsService.findAll(category, highlighted);
  }

  @Get('categories')
  @ApiOperation({
    summary: 'Obtener las categorías de habilidades (Frontend, Backend, etc.)',
  })
  findAllCategories() {
    return this.skillsService.getCategories();
  }
}
