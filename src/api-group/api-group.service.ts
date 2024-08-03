import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IdParamDto } from 'src/designer/dto';
import { ApiGroup } from 'src/entities/apiGroup.entity';
import { Repository } from 'typeorm';
import { CreateApiGroupDto } from './dto/createApiGroup.dto';

@Injectable()
export class ApiGroupService {
  constructor(
    @InjectRepository(ApiGroup)
    private apiGroupRepo: Repository<ApiGroup>,
  ) {}
  async findAll(param: IdParamDto) {
    return await this.apiGroupRepo.find({
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
    const apiGroupItem = await this.apiGroupRepo.findOne({
      where: {
        ...param,
      },
    });
    if (!apiGroupItem) {
      throw new NotFoundException();
    }

    return apiGroupItem;
  }
  async create(dto: CreateApiGroupDto) {
    return await this.apiGroupRepo.save(dto);
  }
  async update(dto: CreateApiGroupDto) {
    return await this.apiGroupRepo.save(dto);
  }
  async deleteOne(param: IdParamDto) {
    return await this.apiGroupRepo.softRemove(param);
  }
}
