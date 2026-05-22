import { Injectable } from '@nestjs/common';
import { STATUS } from './data/status.data';
import { Status } from './entities/status.entity';

@Injectable()
export class StatusService {
  private readonly rawStatus: string = STATUS;

  getStatus(): Status {
    return { status: this.rawStatus };
  }
}
