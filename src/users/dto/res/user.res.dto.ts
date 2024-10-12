export class UserResDto {
  id: string;
  //@ApiProperty({example:"Jon Tyr"})
  name: string;
  age?: number;
  email: string;
  role: string;
  created_at: Date;
  updated_at: Date;
}
