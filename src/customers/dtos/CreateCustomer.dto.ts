import { IsEmail, IsNotEmpty, IsNotEmptyObject, IsNumber, ValidateNested } from "class-validator";
import { CreateAddressDto } from "./CreateAddress.dto";
import { Type } from "class-transformer";

export class CreateCustomerDto {
  @IsEmail()
  email: string;

  @IsNumber()
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  name: string;

  @ValidateNested()
  @Type(() => CreateAddressDto)
  address: CreateAddressDto;
}