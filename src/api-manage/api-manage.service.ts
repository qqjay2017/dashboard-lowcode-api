import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IdParamDto } from 'src/designer/dto';
import { CreateApiManageDto } from './dto/createApiManage.dto';
import { Repository } from 'typeorm';
import { ApiManage } from 'src/entities/apiManage.entity';
import { UpdateApiManageDto } from './dto/updateApiManage.dto';

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
  async findOneById(id: IdParamDto['id']) {
    const apiManageItem = await this.apiManageRepo.findOne({
      where: {
        id,
      },
    });
    if (!apiManageItem) {
      throw new NotFoundException();
    }

    return apiManageItem;
  }
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
  async update(id: string, dto: UpdateApiManageDto) {
    return await this.apiManageRepo.update(id, dto);
  }
  async deleteOne(param: IdParamDto) {
    return await this.apiManageRepo.softRemove(param);
  }
}
