import { Controller, Get, Version, VERSION_NEUTRAL } from '@nestjs/common';
import { AppService } from './app.service';

@Controller({
  path: '',
  version: '1',
})
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Version([VERSION_NEUTRAL, '1'])
  getHello(): string {
    return this.appService.getHello();
  }

  @Get()
  @Version('2')
  getHelloV2(): string {
    return 'Hello World V2!';
  }
}
