import { Module } from "@nestjs/common";
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import User from "./entities/user.entity";
import Device from "./entities/device.entity";
import Energy from "./entities/energy.entity";

@Module({
    imports: [    
        ConfigModule.forRoot(),
        TypeOrmModule.forRoot({
        type: 'mysql',
        host:  process.env.DB_HOST, 
        port: parseInt(process.env.DB_PORT) || 3306,
        username:  process.env.DB_USER,
        password:  process.env.DB_PASSWORD,
        database:  process.env.DB_NAME,
        entities: [User, Device, Energy],
        synchronize: true,
      })],
    controllers: [],
    providers: [],
})

export default class DBModule {}