import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as ngrok from 'ngrok';
import * as dotenv from 'dotenv';
import { TelegramAdapter } from './adapters/telegram.adapter';

dotenv.config();

const settings = {
  appBaseUrl: process.env.CURRENT_APP_BASE_URL || 'https://localhost:3000',
};

async function connectToNgrok() {
  const url = await ngrok.connect(3000);
  console.log(url);
  return url;
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

  const telegramAdapter = await app.resolve(TelegramAdapter);

  let baseUrl = settings.appBaseUrl;

  // if (process.env.NODE_ENV === 'development')

  if (true) {
    baseUrl = await connectToNgrok();
  }

  await telegramAdapter.setWebhook(baseUrl + '/notification/telegram');
}

bootstrap();
