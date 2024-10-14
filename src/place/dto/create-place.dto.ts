import { ApiProperty } from "@nestjs/swagger"
import { ITiming } from "../schema/place.schema"

export class CreatePlaceDto {
    @ApiProperty()
    name: string

    @ApiProperty()
    imageUrl: string

    @ApiProperty()
    content: string

    @ApiProperty()
    location: string

    @ApiProperty()
    timing: string

    @ApiProperty()
    fee: string

    @ApiProperty()
    state: string

    @ApiProperty()
    city: string
}
