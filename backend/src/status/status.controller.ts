import { Controller, Get } from '@nestjs/common';

import { ApiOperation } from '@nestjs/swagger';
import { StatusService } from './status.service';

@Controller('status')
export class StatusController {
  constructor(private readonly statusService: StatusService) {}

  @Get()
  @ApiOperation({ summary: 'Verificar el estado de la API' })
  getStatus() {
    return { status: this.statusService.getStatus(), uptime: process.uptime() };
  }
}
