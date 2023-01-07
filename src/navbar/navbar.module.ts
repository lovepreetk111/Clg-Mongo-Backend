import { Module } from '@nestjs/common';
import { NavbarService } from './navbar.service';
import { NavbarController } from './navbar.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Navbar, NavbarSchema } from './navbar.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Navbar.name,
        schema: NavbarSchema,
      },
    ]),
  ],
  controllers: [NavbarController],
  providers: [NavbarService]
})
export class NavbarModule {}
