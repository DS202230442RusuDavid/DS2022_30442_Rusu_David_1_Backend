import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { Module } from '@nestjs/common';
import { MessagingService } from './message.service';

//RABBITMQ CONNECTION VARIABLES
const AMQP_URL = process.env.AMQP_URL!;
const QUEUE_NAME = process.env.QUEUE_NAME!;
const EXCHANGE_NAME = process.env.EXCHANGE_NAME!;

@Module({
  imports: [
    RabbitMQModule.forRoot(RabbitMQModule, {
      uri: AMQP_URL,
    }),
    RabbitModule,
  ],
  providers: [MessagingService],
})
export class RabbitModule {}