import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IdParamDto } from 'src/designer/dto';
import { ApiOrigin } from 'src/entities/apiOrigin.entity';
import { Repository } from 'typeorm';
import { CreateApiOriginDto } from './dto/createApiOrigin.dto';

@Injectable()
export class ApiOriginService {
  constructor(
    @InjectRepository(ApiOrigin)
    private apiBaseNameRepo: Repository<ApiOrigin>,
  ) {}
  async findAll(param: IdParamDto) {
    return await this.apiBaseNameRepo.find({
      order: {
        updateAt: 'DESC',
      },
      where: {
        ...param,
      },
    });
  }
  async pageList() {}
  async findOne(param: IdParamDto) {
    const apiBaseNameItem = await this.apiBaseNameRepo.findOne({
      where: {
        ...param,
      },
    });
    if (!apiBaseNameItem) {
      throw new NotFoundException();
    }

    return apiBaseNameItem;
  }
  async create(dto: CreateApiOriginDto) {
    return await this.apiBaseNameRepo.save(dto);
  }
  async update(dto: CreateApiOriginDto) {
    return await this.apiBaseNameRepo.save(dto);
  }
  async deleteOne(param: IdParamDto) {
    return await this.apiBaseNameRepo.softRemove(param);
  }
}
