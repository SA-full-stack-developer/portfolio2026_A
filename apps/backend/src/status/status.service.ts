import { Injectable } from '@nestjs/common';
import { STATUS } from './data/status.data';
import { Status } from '@portfolio/shared/models';

@Injectable()
export class StatusService {
  private readonly rawStatus: string = STATUS;

  getStatus(): Status {
    return { status: this.rawStatus };
  }
}
