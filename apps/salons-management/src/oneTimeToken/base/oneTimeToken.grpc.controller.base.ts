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
import { GrpcMethod } from "@nestjs/microservices";
import { OneTimeTokenService } from "../oneTimeToken.service";
import { OneTimeTokenCreateInput } from "./OneTimeTokenCreateInput";
import { OneTimeTokenWhereInput } from "./OneTimeTokenWhereInput";
import { OneTimeTokenWhereUniqueInput } from "./OneTimeTokenWhereUniqueInput";
import { OneTimeTokenFindManyArgs } from "./OneTimeTokenFindManyArgs";
import { OneTimeTokenUpdateInput } from "./OneTimeTokenUpdateInput";
import { OneTimeToken } from "./OneTimeToken";

export class OneTimeTokenGrpcControllerBase {
  constructor(protected readonly service: OneTimeTokenService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: OneTimeToken })
  @GrpcMethod("OneTimeTokenService", "createOneTimeToken")
  async createOneTimeToken(
    @common.Body() data: OneTimeTokenCreateInput
  ): Promise<OneTimeToken> {
    return await this.service.createOneTimeToken({
      data: {
        ...data,

        users: {
          connect: data.users,
        },
      },
      select: {
        createdAt: true,
        id: true,
        relatesTo: true,
        tokenHash: true,
        token_type: true,
        updatedAt: true,

        users: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [OneTimeToken] })
  @ApiNestedQuery(OneTimeTokenFindManyArgs)
  @GrpcMethod("OneTimeTokenService", "oneTimeTokens")
  async oneTimeTokens(@common.Req() request: Request): Promise<OneTimeToken[]> {
    const args = plainToClass(OneTimeTokenFindManyArgs, request.query);
    return this.service.oneTimeTokens({
      ...args,
      select: {
        createdAt: true,
        id: true,
        relatesTo: true,
        tokenHash: true,
        token_type: true,
        updatedAt: true,

        users: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: OneTimeToken })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("OneTimeTokenService", "oneTimeToken")
  async oneTimeToken(
    @common.Param() params: OneTimeTokenWhereUniqueInput
  ): Promise<OneTimeToken | null> {
    const result = await this.service.oneTimeToken({
      where: params,
      select: {
        createdAt: true,
        id: true,
        relatesTo: true,
        tokenHash: true,
        token_type: true,
        updatedAt: true,

        users: {
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
  @swagger.ApiOkResponse({ type: OneTimeToken })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("OneTimeTokenService", "updateOneTimeToken")
  async updateOneTimeToken(
    @common.Param() params: OneTimeTokenWhereUniqueInput,
    @common.Body() data: OneTimeTokenUpdateInput
  ): Promise<OneTimeToken | null> {
    try {
      return await this.service.updateOneTimeToken({
        where: params,
        data: {
          ...data,

          users: {
            connect: data.users,
          },
        },
        select: {
          createdAt: true,
          id: true,
          relatesTo: true,
          tokenHash: true,
          token_type: true,
          updatedAt: true,

          users: {
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
  @swagger.ApiOkResponse({ type: OneTimeToken })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("OneTimeTokenService", "deleteOneTimeToken")
  async deleteOneTimeToken(
    @common.Param() params: OneTimeTokenWhereUniqueInput
  ): Promise<OneTimeToken | null> {
    try {
      return await this.service.deleteOneTimeToken({
        where: params,
        select: {
          createdAt: true,
          id: true,
          relatesTo: true,
          tokenHash: true,
          token_type: true,
          updatedAt: true,

          users: {
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
