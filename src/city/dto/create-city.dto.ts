import { ApiProperty } from "@nestjs/swagger"

export class CreateCityDto {
    @ApiProperty()
    name: string

    @ApiProperty()
    imageUrl: string

    @ApiProperty()
    location: string

    @ApiProperty()
    state: string
}
