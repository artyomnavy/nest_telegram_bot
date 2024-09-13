import { Injectable } from '@nestjs/common';
import {
  TelegramAdapter,
  TelegramUpdateMessageType,
} from '../adapters/telegram.adapter';

@Injectable()
export class HowManyTimeUseCase {
  constructor(private readonly telegramAdapter: TelegramAdapter) {}

  execute(payload: TelegramUpdateMessageType) {
    this.telegramAdapter.sendMessage(`${new Date()}`, payload.message.from.id);
  }
}
