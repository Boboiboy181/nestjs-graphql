import { Field, InputType } from '@nestjs/graphql';
import { IsDateString, IsString, MaxLength, MinLength } from 'class-validator';

@InputType()
export class CreateLessonInput {
  @IsString()
  @MinLength(1)
  @MaxLength(255)
  @Field()
  name: string;

  @IsDateString()
  @Field()
  startDate: string;

  @IsDateString()
  @Field()
  endDate: string;
}
