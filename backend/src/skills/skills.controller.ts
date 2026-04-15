import { Controller, Get, Query } from '@nestjs/common';

import { SkillsService } from './skills.service';

@Controller('skills')
export class SkillsController {
  constructor(private readonly skillsService: SkillsService) {}

  @Get()
  findAll(
    @Query('category') category?: string,
    @Query('onlyHighlighted') onlyHighlighted?: string,
  ) {
    const highlighted = onlyHighlighted === 'true';
    return this.skillsService.findAll(category, highlighted);
  }

  @Get('categories')
  findAllCategories() {
    return this.skillsService.getCategories();
  }
}
