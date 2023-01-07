import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateNavbarDto } from './dto/create-navbar.dto';
import { UpdateNavbarDto } from './dto/update-navbar.dto';
import { Navbar } from './navbar.schema';

@Injectable()
export class NavbarService {
  constructor(@InjectModel(Navbar.name) private readonly NavbarModel: Model < Navbar > ){}
  async create(createNavbarDto: CreateNavbarDto) {
    const createdNavbar = new this.NavbarModel(createNavbarDto);
    return createdNavbar.save();
  }

  async findAll(): Promise < Navbar[] > {
    return this.NavbarModel.find()
      .exec();
  }

  async findOne(id: string) {
    return this.NavbarModel.findById(id);
  }

  async update(id: string, updateNavbarDto: UpdateNavbarDto): Promise < Navbar > {
    return this.NavbarModel.findByIdAndUpdate(id, updateNavbarDto);
  }

  async remove(id: string) {
    return this.NavbarModel.findByIdAndRemove(id);
  }
}
