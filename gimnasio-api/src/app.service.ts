import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hola mundo desde mmi primer servidor de nest.js';
  }
}
