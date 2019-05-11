import { Controller, Get, HttpCode } from '@nestjs/common';

@Controller()
export class CommonController {
  @Get('/readiness')
  @HttpCode(200)
  async readiness() {
    return {
      errMsg: 'errMsg:ok',
    };
  }
}
