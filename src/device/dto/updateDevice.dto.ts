import { IsEmail, IsString, IsNotEmpty, MinLength, IsOptional, IsNumber } from 'class-validator';

export default class UpdateDeviceDto {
    @IsString()
    @IsOptional()
    public description: string;

    @IsString()
    @IsOptional()
    public address: string;

    @IsNumber()
    @IsOptional()
    public maximumHourelyConsumption: number;

    
}