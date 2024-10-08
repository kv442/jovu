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
import { TicketCreateNestedManyWithoutPrioritiesInput } from "./TicketCreateNestedManyWithoutPrioritiesInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class PriorityCreateInput {
  @ApiProperty({
    required: false,
    type: () => TicketCreateNestedManyWithoutPrioritiesInput,
  })
  @ValidateNested()
  @Type(() => TicketCreateNestedManyWithoutPrioritiesInput)
  @IsOptional()
  @Field(() => TicketCreateNestedManyWithoutPrioritiesInput, {
    nullable: true,
  })
  tickets?: TicketCreateNestedManyWithoutPrioritiesInput;
}

export { PriorityCreateInput as PriorityCreateInput };
