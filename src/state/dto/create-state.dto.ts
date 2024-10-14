import { ApiProperty } from "@nestjs/swagger"

export class CreateStateDto {
    @ApiProperty()
    name: string

    @ApiProperty()
    imageUrl: string

    @ApiProperty()
    location: string
}
