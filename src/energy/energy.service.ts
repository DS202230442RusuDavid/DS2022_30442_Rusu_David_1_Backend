import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Device from 'src/db/entities/device.entity';
import Energy from 'src/db/entities/energy.entity';
import { Repository } from 'typeorm';
import CreateEnergyDto from './dto/create.energy.dts';
import UpdateEnergyDto from './dto/update.energy.dto';

@Injectable()
export class EnergyService {
  constructor(
    @InjectRepository(Energy)
    private readonly energyRepository: Repository<Energy>,
    @InjectRepository(Device)
    private readonly deviceRepository: Repository<Device>,
  ) {}

  public async getEnergy(energy: Energy) {
    return await this.energyRepository.find({ where: { ...energy} });
  }

  public async createEnergy(energy: CreateEnergyDto): Promise<Energy> {
    const newEnergy = this.energyRepository.create(energy);
    if (await this.energyRepository.save(newEnergy)) {
      if (
        await this.deviceRepository.findOne({ where: { id: energy.deviceId } })
      ) {
        newEnergy.device = (await this.deviceRepository.findOne({
          where: { id:  energy.deviceId },
        }));
        return this.energyRepository.save(newEnergy);
      }
      throw new HttpException('Device not found', HttpStatus.NOT_FOUND);
    }
  }

  public async updateEnergy(energy: Energy): Promise<Energy> {
    const itemToUpdate = await this.energyRepository.findOne({ where: { ...energy } });
    if (itemToUpdate) {
      if (
        await this.energyRepository.save({...itemToUpdate, ...energy})
      ) {
        return await this.energyRepository.findOne({
          where: { ...energy },
        });
      }
      throw new HttpException('Energy not updated', HttpStatus.BAD_REQUEST);
    }
    throw new HttpException('Energy not found', HttpStatus.NOT_FOUND);
  }

  public async deleteEnergy(energy: Energy) {
    const deleteResponse = await this.energyRepository.delete({
     ...energy
    });
    if (!deleteResponse.affected) {
      throw new HttpException('Energy not found', HttpStatus.NOT_FOUND);
    }
  }
}
