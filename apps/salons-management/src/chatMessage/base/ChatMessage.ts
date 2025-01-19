/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
  IsDate,
} from "class-validator";
import { Type } from "class-transformer";
import { UserProfile } from "../../userProfile/base/UserProfile";

@ObjectType()
class ChatMessage {
  @ApiProperty({
    required: false,
    type: () => ChatMessage,
  })
  @ValidateNested()
  @Type(() => ChatMessage)
  @IsOptional()
  chatMessages?: ChatMessage | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: () => [ChatMessage],
  })
  @ValidateNested()
  @Type(() => ChatMessage)
  @IsOptional()
  otherChatMessages?: Array<ChatMessage>;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  text!: string | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  timestamp!: Date | null;

  @ApiProperty({
    required: false,
    type: () => UserProfile,
  })
  @ValidateNested()
  @Type(() => UserProfile)
  @IsOptional()
  userProfiles?: UserProfile | null;
}

export { ChatMessage as ChatMessage };
