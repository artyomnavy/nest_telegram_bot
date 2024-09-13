import { Injectable } from '@nestjs/common';
import {
  TelegramAdapter,
  TelegramUpdateMessageType,
} from '../adapters/telegram.adapter';

@Injectable()
export class HandleTelegramUpdatesUseCase {
  constructor(private readonly telegramAdapter: TelegramAdapter) {}

  execute(payload: TelegramUpdateMessageType) {
    if (
      payload.message.text.toLowerCase() === 'сколько времени?' ||
      payload.message.text.toLowerCase() === 'сколько времени'
    ) {
      this.telegramAdapter.sendMessage(
        `${new Date()}`,
        payload.message.from.id,
      );
    } else {
      this.telegramAdapter.sendMessage(
        `Прости, я еще слишком туповат`,
        payload.message.from.id,
      );
    }
  }
}
