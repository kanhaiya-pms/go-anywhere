import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { PlaceService } from './place.service';
import { CreatePlaceDto } from './dto/create-place.dto';
import { UpdatePlaceDto } from './dto/update-place.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { IAuth } from 'utils/common.interface';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('place')
export class PlaceController {
  constructor(private readonly placeService: PlaceService) {}


  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @Post()
  create(@Request() auth: any, @Body() createPlaceDto: CreatePlaceDto) {
    console.log(auth.user,createPlaceDto);
    
    return this.placeService.create(createPlaceDto, auth.user);
  }

  @Get()
  findAll() {
    return this.placeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.placeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePlaceDto: UpdatePlaceDto) {
    return this.placeService.update(+id, updatePlaceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.placeService.remove(+id);
  }
}
