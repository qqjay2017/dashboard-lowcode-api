import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IdParamDto } from 'src/designer/dto';
import { CreateApiManageDto } from './dto/createApiManage.dto';
import { Repository } from 'typeorm';
import { ApiManage } from 'src/entities/apiManage.entity';

@Injectable()
export class ApiManageService {
  constructor(
    @InjectRepository(ApiManage)
    private apiManageRepo: Repository<ApiManage>,
  ) {}
  async findAll(param: IdParamDto) {
    return await this.apiManageRepo.find({
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
    const apiManageItem = await this.apiManageRepo.findOne({
      where: {
        ...param,
      },
    });
    if (!apiManageItem) {
      throw new NotFoundException();
    }

    return apiManageItem;
  }
  async create(dto: CreateApiManageDto) {
    return await this.apiManageRepo.save(dto);
  }
  async update(dto: CreateApiManageDto) {
    return await this.apiManageRepo.save(dto);
  }
  async deleteOne(param: IdParamDto) {
    return await this.apiManageRepo.softRemove(param);
  }
}
