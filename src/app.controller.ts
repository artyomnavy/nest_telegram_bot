import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { TelegramUpdateMessageType } from './adapters/telegram.adapter';
import { HandleTelegramUpdatesUseCase } from './use-cases/handle-telegram-updates.use-case';

@Controller('notification')
export class AppController {
  constructor(
    private readonly appService: AppService,
    private handleTelegramUpdatesUseCase: HandleTelegramUpdatesUseCase,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('telegram')
  forTelegramHook(@Body() payload: TelegramUpdateMessageType) {
    console.log(payload);
    this.handleTelegramUpdatesUseCase.execute(payload);
    return { status: 'success' };
  }
}
