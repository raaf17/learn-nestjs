export class CreateCustomerDto {
  @IsEmail()
  id: number;
  name: string;
  email: string
}