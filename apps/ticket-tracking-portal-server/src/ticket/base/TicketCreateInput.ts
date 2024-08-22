/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  MaxLength,
  IsOptional,
  ValidateNested,
  IsDate,
} from "class-validator";
import { CommentWhereUniqueInput } from "../../comment/base/CommentWhereUniqueInput";
import { Type } from "class-transformer";
import { PriorityWhereUniqueInput } from "../../priority/base/PriorityWhereUniqueInput";

@InputType()
class TicketCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  assigned?: string | null;

  @ApiProperty({
    required: false,
    type: () => CommentWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CommentWhereUniqueInput)
  @IsOptional()
  @Field(() => CommentWhereUniqueInput, {
    nullable: true,
  })
  comment?: CommentWhereUniqueInput | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  createdDate?: Date | null;

  @ApiProperty({
    required: false,
    type: () => PriorityWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PriorityWhereUniqueInput)
  @IsOptional()
  @Field(() => PriorityWhereUniqueInput, {
    nullable: true,
  })
  priority?: PriorityWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  program?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  resource?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  state?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  subject?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  ticketNumber?: string | null;
}

export { TicketCreateInput as TicketCreateInput };
