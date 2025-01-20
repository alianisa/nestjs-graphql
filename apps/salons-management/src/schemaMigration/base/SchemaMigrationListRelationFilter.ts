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
import { SchemaMigrationWhereInput } from "./SchemaMigrationWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class SchemaMigrationListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => SchemaMigrationWhereInput,
  })
  @ValidateNested()
  @Type(() => SchemaMigrationWhereInput)
  @IsOptional()
  @Field(() => SchemaMigrationWhereInput, {
    nullable: true,
  })
  every?: SchemaMigrationWhereInput;

  @ApiProperty({
    required: false,
    type: () => SchemaMigrationWhereInput,
  })
  @ValidateNested()
  @Type(() => SchemaMigrationWhereInput)
  @IsOptional()
  @Field(() => SchemaMigrationWhereInput, {
    nullable: true,
  })
  some?: SchemaMigrationWhereInput;

  @ApiProperty({
    required: false,
    type: () => SchemaMigrationWhereInput,
  })
  @ValidateNested()
  @Type(() => SchemaMigrationWhereInput)
  @IsOptional()
  @Field(() => SchemaMigrationWhereInput, {
    nullable: true,
  })
  none?: SchemaMigrationWhereInput;
}
export { SchemaMigrationListRelationFilter as SchemaMigrationListRelationFilter };
