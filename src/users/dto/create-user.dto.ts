import { ApiProperty } from "@nestjs/swagger";
import { ERole } from "../schema/users.schema";

export class CreateUserDto {
    @ApiProperty()
    name: string

    @ApiProperty()
    email: string

    @ApiProperty()
    number: string

    @ApiProperty()
    password: string
}
