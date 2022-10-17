import { Body, Controller, Delete, Get, Param, Patch, Post, Req, UseGuards } from "@nestjs/common";
import Device from "src/db/entities/device.entity";
import Role from "src/roles/role.enum";
import RoleGuard from "src/roles/role.guard";
import { DeviceService } from "./device.service";
import UpdateDeviceDto from "./dto/updateDevice.dto";

@Controller("device")
export default class DeviceController {
    constructor(private readonly deviceService: DeviceService) {}


    @Get(":id")
    @UseGuards(RoleGuard(Role.Admin))
    async findOne(@Param("id") id: number){
        return this.deviceService.findOne(id);
    }

    @Post()
    @UseGuards(RoleGuard(Role.Admin))
    async create(@Body() device: Device){
        return this.deviceService.create(device);
    }

    @Patch(":id")
    @UseGuards(RoleGuard(Role.Admin))
    async update(@Param("id") id: number, @Body() device: UpdateDeviceDto){
        return this.deviceService.update(id, device);
    }

    @Delete(":id")
    @UseGuards(RoleGuard(Role.Admin))
    async delete(@Param("id") id: number){
        return this.deviceService.delete(id);
    }
}

