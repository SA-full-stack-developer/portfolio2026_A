import { Controller, Get, Param } from '@nestjs/common';

import { ApiOperation } from '@nestjs/swagger';
import { CompaniesService } from './companies.service';

@Controller('companies')
export class CompaniesController {
  constructor(private readonly companiesService: CompaniesService) {}

  @Get()
  @ApiOperation({ summary: 'Listar empresas con las que he colaborado' })
  findAll() {
    return this.companiesService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener información detallada de una empresa' })
  findOne(@Param('id') id: string) {
    return this.companiesService.findOne(id);
  }
}
