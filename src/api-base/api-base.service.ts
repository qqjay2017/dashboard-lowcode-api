import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IdParamDto } from 'src/designer/dto';
import { ApiBase } from 'src/entities/apiBase.entity';
import { Repository } from 'typeorm';
import { CreateApiBaseDto } from './dto/createApiBase.dto';

@Injectable()
export class ApiBaseService {
  constructor(
    @InjectRepository(ApiBase)
    private apiBaseNameRepo: Repository<ApiBase>,
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
  async create(dto: CreateApiBaseDto) {
    return await this.apiBaseNameRepo.save(dto);
  }
  async update(dto: CreateApiBaseDto) {
    return await this.apiBaseNameRepo.save(dto);
  }
  async deleteOne(param: IdParamDto) {
    return await this.apiBaseNameRepo.softRemove(param);
  }
}
