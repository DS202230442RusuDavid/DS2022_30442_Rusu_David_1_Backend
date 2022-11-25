import { RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';
import { Injectable } from '@nestjs/common';

const QUEUE_NAME = process.env.QUEUE_NAME!;
const EXCHANGE_NAME = process.env.EXCHANGE_NAME!;

@Injectable()
export class MessagingService {
  @RabbitSubscribe({
    exchange: EXCHANGE_NAME,
    routingKey: 'subscribe-route',
    queue: QUEUE_NAME,
  })
  public async pubSubHandler(msg: {}) {
    console.log(`Received message: ${JSON.stringify(msg)}`);
  }
}