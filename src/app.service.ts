import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class AppService {
  // constructor(@Inject('TASK') private tasks: any[]) {}

  getHello(): string {
    // console.log(this.tasks);
    return `Hello Mundo!`;
  }
}
