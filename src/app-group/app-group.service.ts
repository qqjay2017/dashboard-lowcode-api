import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IdParamDto } from '../designer/dto';
import { AppGroup } from 'src/entities/appGroup.entity';
import { Repository } from 'typeorm';
import { CreateAppGroupDto } from './dto/createAppGroup.dto';
import { UpdateAppGroupDto } from './dto/updateAppGroup.dto';

@Injectable()
export class AppGroupService {
  constructor(
    @InjectRepository(AppGroup)
    private appGroupRepo: Repository<AppGroup>,
  ) {}
  async findAll(param: IdParamDto) {
    return await this.appGroupRepo.find({
      order: {
        sortNum: 'ASC',
      },
      where: {
        ...param,
      },
    });
  }
  async pageList() {}
  async findOne(param: IdParamDto) {
    const appGroupItem = await this.appGroupRepo.findOne({
      where: {
        ...param,
      },
    });
    if (!appGroupItem) {
      throw new NotFoundException();
    }

    return appGroupItem;
  }
  async create(dto: CreateAppGroupDto) {
    return await this.appGroupRepo.save(dto);
  }
  async update(id: string, dto: UpdateAppGroupDto) {
    return await this.appGroupRepo.update(id, dto);
  }
  async deleteOne(param: IdParamDto) {
    return await this.appGroupRepo.softRemove(param);
  }
}
