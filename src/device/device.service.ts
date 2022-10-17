import { Injectable } from "@nestjs/common";
import Device from "src/db/entities/device.entity";
import updateDeviceDto from "./dto/updateDevice.dto";

@Injectable()
export class DeviceService {
    async delete(id: number){
        throw new Error("Method not implemented.");
    }
    async update(id: number, device: updateDeviceDto){
        throw new Error("Method not implemented.");
    }
    async create(device: Device){
        throw new Error("Method not implemented.");
    }
    async findOne(id: number) {
        return null;
    }
}

