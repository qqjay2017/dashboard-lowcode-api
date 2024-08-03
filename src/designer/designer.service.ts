import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDesignerDto } from './dto/createDesigner.dto';
import { Repository } from 'typeorm';
import { Designer } from 'src/entities/designer.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { IdParamDto } from './dto/idParam.dto';

@Injectable()
export class DesignerService {
  constructor(
    @InjectRepository(Designer)
    private designerRepo: Repository<Designer>,
  ) {}
  async findAll(param: IdParamDto) {
    return await this.designerRepo.find({
      order: {
        createdAt: 'desc',
      },
      where: {
        ...param,
      },
    });
  }
  async pageList() {}
  async findOne(param: IdParamDto) {
    const designerItem = await this.designerRepo.findOne({
      where: {
        ...param,
      },
    });
    if (!designerItem) {
      throw new NotFoundException();
    }

    return designerItem;
  }
  async create(dto: CreateDesignerDto) {
    return await this.designerRepo.save(dto);
  }
  async update(dto: CreateDesignerDto) {
    return await this.designerRepo.save(dto);
  }
  async deleteOne(param: IdParamDto) {
    return await this.designerRepo.softRemove(param);
  }
}
