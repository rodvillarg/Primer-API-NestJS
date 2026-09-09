import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello desde mi primer servidor de nest.js';
  }
}
