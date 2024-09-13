import { Injectable } from '@nestjs/common';
import { TelegramUpdateMessageType } from '../adapters/telegram.adapter';
import { IDontUnderstandMessageUseCase } from './i-dont-understand-message.use-case';
import { HowManyTimeUseCase } from './how-many-time.use-case';

@Injectable()
export class HandleTelegramUpdatesUseCase {
  constructor(
    private iDontUnderstandMessageUseCase: IDontUnderstandMessageUseCase,
    private howManyTimeUseCase: HowManyTimeUseCase,
  ) {}

  execute(payload: TelegramUpdateMessageType) {
    if (
      payload.message.text.toLowerCase() === 'сколько времени?' ||
      payload.message.text.toLowerCase() === 'сколько времени'
    ) {
      this.howManyTimeUseCase.execute(payload);
    } else {
      this.iDontUnderstandMessageUseCase.execute(payload);
    }
  }
}
