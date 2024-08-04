import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IdParamDto } from 'src/designer/dto';
import { CreateApiManageDto } from './dto/createApiManage.dto';
import { Repository } from 'typeorm';
import { ApiManage } from 'src/entities/apiManage.entity';
import { UpdateApiManageDto } from './dto/updateApiManage.dto';
import { PaginationDto } from 'src/designer/dto/pagination.dto';
import { getFindPageOptions } from 'src/utils/getFindPageOptions';

@Injectable()
export class ApiManageService {
  constructor(
    @InjectRepository(ApiManage)
    private apiManageRepo: Repository<ApiManage>,
  ) {}
  async findAll(param: IdParamDto) {
    const list = await this.apiManageRepo.find({
      order: {
        updateAt: 'DESC',
      },
      where: {
        ...param,
      },
    });
    return (list || []).map((item) => {
      return {
        ...item,
        content: undefined,
      };
    });
  }
  async pageList(pageParam: PaginationDto, param: IdParamDto) {
    const total = await this.apiManageRepo.count({
      where: {
        ...param,
      },
    });
    const list = await this.apiManageRepo.find({
      ...getFindPageOptions(pageParam),
      order: {
        updateAt: 'DESC',
      },
      where: {
        ...param,
      },
    });
    return {
      rows: (list || []).map((item) => {
        return {
          ...item,
          content: undefined,
        };
      }),
      total: total,
    };
  }
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
