import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TelegramAdapter } from './adapters/telegram.adapter';
import { HandleTelegramUpdatesUseCase } from './use-cases/handle-telegram-updates.use-case';
import { IDontUnderstandMessageUseCase } from './use-cases/i-dont-understand-message.use-case';
import { HowManyTimeUseCase } from './use-cases/how-many-time.use-case';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    TelegramAdapter,
    HandleTelegramUpdatesUseCase,
    IDontUnderstandMessageUseCase,
    HowManyTimeUseCase,
  ],
})
export class AppModule {}
