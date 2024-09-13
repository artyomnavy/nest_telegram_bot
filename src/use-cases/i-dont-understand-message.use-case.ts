import { Injectable } from '@nestjs/common';
import {
  TelegramAdapter,
  TelegramUpdateMessageType,
} from '../adapters/telegram.adapter';

@Injectable()
export class IDontUnderstandMessageUseCase {
  constructor(private readonly telegramAdapter: TelegramAdapter) {}

  execute(payload: TelegramUpdateMessageType) {
    this.telegramAdapter.sendMessage(
      `Прости, я еще слишком туповат`,
      payload.message.from.id,
    );
  }
}
