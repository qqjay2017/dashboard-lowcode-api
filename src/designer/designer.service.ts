import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDesignerDto } from './dto/createDesigner.dto';
import { Repository } from 'typeorm';
import { Designer } from 'src/entities/designer.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { IdParamDto } from './dto/idParam.dto';
import { UpdateDesignerDto } from './dto/updateDesigner.dto';
import { PaginationDto } from './dto/pagination.dto';

import { getFindPageOptions } from 'src/utils/getFindPageOptions';

@Injectable()
export class DesignerService {
  constructor(
    @InjectRepository(Designer)
    private designerRepo: Repository<Designer>,
  ) {}
  async findAll(param: IdParamDto) {
    const list = await this.designerRepo.find({
      order: {
        updateAt: 'desc',
      },
      where: {
        ...param,
      },
      select: {
        content: false,
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
    const total = await this.designerRepo.count({
      where: {
        ...param,
      },
    });
    const list = await this.designerRepo.find({
      ...getFindPageOptions(pageParam),
      order: {
        updateAt: 'desc',
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
  async findOne(param: IdParamDto) {
    try {
      const designerItem = await this.designerRepo.findOne({
        where: {
          ...param,
        },
      });
      if (!designerItem) {
        throw new NotFoundException();
      }
  
      return designerItem;
    } catch (error) {
      return error
      
    }
  }
  async create(dto: CreateDesignerDto) {
    return await this.designerRepo.save(dto);
  }
  async update(id: string, dto: UpdateDesignerDto) {
    return await this.designerRepo.update(id, dto);
  }
  async deleteOne(param: IdParamDto) {
    return await this.designerRepo.softRemove(param);
  }
}
