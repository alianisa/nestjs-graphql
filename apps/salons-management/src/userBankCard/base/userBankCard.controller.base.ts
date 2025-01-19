/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { UserBankCardService } from "../userBankCard.service";
import { UserBankCardCreateInput } from "./UserBankCardCreateInput";
import { UserBankCard } from "./UserBankCard";
import { UserBankCardFindManyArgs } from "./UserBankCardFindManyArgs";
import { UserBankCardWhereUniqueInput } from "./UserBankCardWhereUniqueInput";
import { UserBankCardUpdateInput } from "./UserBankCardUpdateInput";

export class UserBankCardControllerBase {
  constructor(protected readonly service: UserBankCardService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: UserBankCard })
  async createUserBankCard(
    @common.Body() data: UserBankCardCreateInput
  ): Promise<UserBankCard> {
    return await this.service.createUserBankCard({
      data: {
        ...data,

        userProfiles: data.userProfiles
          ? {
              connect: data.userProfiles,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        cvv: true,
        expDate: true,
        favorite: true,
        id: true,
        main: true,
        name: true,
        numberField: true,
        token: true,
        updatedAt: true,

        userProfiles: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [UserBankCard] })
  @ApiNestedQuery(UserBankCardFindManyArgs)
  async userBankCards(@common.Req() request: Request): Promise<UserBankCard[]> {
    const args = plainToClass(UserBankCardFindManyArgs, request.query);
    return this.service.userBankCards({
      ...args,
      select: {
        createdAt: true,
        cvv: true,
        expDate: true,
        favorite: true,
        id: true,
        main: true,
        name: true,
        numberField: true,
        token: true,
        updatedAt: true,

        userProfiles: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: UserBankCard })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async userBankCard(
    @common.Param() params: UserBankCardWhereUniqueInput
  ): Promise<UserBankCard | null> {
    const result = await this.service.userBankCard({
      where: params,
      select: {
        createdAt: true,
        cvv: true,
        expDate: true,
        favorite: true,
        id: true,
        main: true,
        name: true,
        numberField: true,
        token: true,
        updatedAt: true,

        userProfiles: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: UserBankCard })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateUserBankCard(
    @common.Param() params: UserBankCardWhereUniqueInput,
    @common.Body() data: UserBankCardUpdateInput
  ): Promise<UserBankCard | null> {
    try {
      return await this.service.updateUserBankCard({
        where: params,
        data: {
          ...data,

          userProfiles: data.userProfiles
            ? {
                connect: data.userProfiles,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          cvv: true,
          expDate: true,
          favorite: true,
          id: true,
          main: true,
          name: true,
          numberField: true,
          token: true,
          updatedAt: true,

          userProfiles: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: UserBankCard })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteUserBankCard(
    @common.Param() params: UserBankCardWhereUniqueInput
  ): Promise<UserBankCard | null> {
    try {
      return await this.service.deleteUserBankCard({
        where: params,
        select: {
          createdAt: true,
          cvv: true,
          expDate: true,
          favorite: true,
          id: true,
          main: true,
          name: true,
          numberField: true,
          token: true,
          updatedAt: true,

          userProfiles: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
