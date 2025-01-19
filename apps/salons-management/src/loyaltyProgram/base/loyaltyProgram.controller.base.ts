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
import { LoyaltyProgramService } from "../loyaltyProgram.service";
import { LoyaltyProgramCreateInput } from "./LoyaltyProgramCreateInput";
import { LoyaltyProgram } from "./LoyaltyProgram";
import { LoyaltyProgramFindManyArgs } from "./LoyaltyProgramFindManyArgs";
import { LoyaltyProgramWhereUniqueInput } from "./LoyaltyProgramWhereUniqueInput";
import { LoyaltyProgramUpdateInput } from "./LoyaltyProgramUpdateInput";

export class LoyaltyProgramControllerBase {
  constructor(protected readonly service: LoyaltyProgramService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: LoyaltyProgram })
  async createLoyaltyProgram(
    @common.Body() data: LoyaltyProgramCreateInput
  ): Promise<LoyaltyProgram> {
    return await this.service.createLoyaltyProgram({
      data: data,
      select: {
        createdAt: true,
        description: true,
        id: true,
        minPointsForRedemption: true,
        name: true,
        pointsPerCurrency: true,
        redemptionRate: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [LoyaltyProgram] })
  @ApiNestedQuery(LoyaltyProgramFindManyArgs)
  async loyaltyPrograms(
    @common.Req() request: Request
  ): Promise<LoyaltyProgram[]> {
    const args = plainToClass(LoyaltyProgramFindManyArgs, request.query);
    return this.service.loyaltyPrograms({
      ...args,
      select: {
        createdAt: true,
        description: true,
        id: true,
        minPointsForRedemption: true,
        name: true,
        pointsPerCurrency: true,
        redemptionRate: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: LoyaltyProgram })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async loyaltyProgram(
    @common.Param() params: LoyaltyProgramWhereUniqueInput
  ): Promise<LoyaltyProgram | null> {
    const result = await this.service.loyaltyProgram({
      where: params,
      select: {
        createdAt: true,
        description: true,
        id: true,
        minPointsForRedemption: true,
        name: true,
        pointsPerCurrency: true,
        redemptionRate: true,
        updatedAt: true,
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
  @swagger.ApiOkResponse({ type: LoyaltyProgram })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateLoyaltyProgram(
    @common.Param() params: LoyaltyProgramWhereUniqueInput,
    @common.Body() data: LoyaltyProgramUpdateInput
  ): Promise<LoyaltyProgram | null> {
    try {
      return await this.service.updateLoyaltyProgram({
        where: params,
        data: data,
        select: {
          createdAt: true,
          description: true,
          id: true,
          minPointsForRedemption: true,
          name: true,
          pointsPerCurrency: true,
          redemptionRate: true,
          updatedAt: true,
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
  @swagger.ApiOkResponse({ type: LoyaltyProgram })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteLoyaltyProgram(
    @common.Param() params: LoyaltyProgramWhereUniqueInput
  ): Promise<LoyaltyProgram | null> {
    try {
      return await this.service.deleteLoyaltyProgram({
        where: params,
        select: {
          createdAt: true,
          description: true,
          id: true,
          minPointsForRedemption: true,
          name: true,
          pointsPerCurrency: true,
          redemptionRate: true,
          updatedAt: true,
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
