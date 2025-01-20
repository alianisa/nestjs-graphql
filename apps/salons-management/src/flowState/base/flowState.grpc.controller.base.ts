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
import { FlowStateService } from "../flowState.service";
import { FlowStateCreateInput } from "./FlowStateCreateInput";
import { FlowStateWhereInput } from "./FlowStateWhereInput";
import { FlowStateWhereUniqueInput } from "./FlowStateWhereUniqueInput";
import { FlowStateFindManyArgs } from "./FlowStateFindManyArgs";
import { FlowStateUpdateInput } from "./FlowStateUpdateInput";
import { FlowState } from "./FlowState";
import { SamlRelayStateFindManyArgs } from "../../samlRelayState/base/SamlRelayStateFindManyArgs";
import { SamlRelayState } from "../../samlRelayState/base/SamlRelayState";
import { SamlRelayStateWhereUniqueInput } from "../../samlRelayState/base/SamlRelayStateWhereUniqueInput";

export class FlowStateGrpcControllerBase {
  constructor(protected readonly service: FlowStateService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: FlowState })
  @GrpcMethod("FlowStateService", "createFlowState")
  async createFlowState(
    @common.Body() data: FlowStateCreateInput
  ): Promise<FlowState> {
    return await this.service.createFlowState({
      data: data,
      select: {
        authCode: true,
        authCodeIssuedAt: true,
        authenticationMethod: true,
        codeChallenge: true,
        code_challenge_method: true,
        createdAt: true,
        id: true,
        providerAccessToken: true,
        providerRefreshToken: true,
        providerType: true,
        updatedAt: true,
        userId: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [FlowState] })
  @ApiNestedQuery(FlowStateFindManyArgs)
  @GrpcMethod("FlowStateService", "flowStates")
  async flowStates(@common.Req() request: Request): Promise<FlowState[]> {
    const args = plainToClass(FlowStateFindManyArgs, request.query);
    return this.service.flowStates({
      ...args,
      select: {
        authCode: true,
        authCodeIssuedAt: true,
        authenticationMethod: true,
        codeChallenge: true,
        code_challenge_method: true,
        createdAt: true,
        id: true,
        providerAccessToken: true,
        providerRefreshToken: true,
        providerType: true,
        updatedAt: true,
        userId: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: FlowState })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("FlowStateService", "flowState")
  async flowState(
    @common.Param() params: FlowStateWhereUniqueInput
  ): Promise<FlowState | null> {
    const result = await this.service.flowState({
      where: params,
      select: {
        authCode: true,
        authCodeIssuedAt: true,
        authenticationMethod: true,
        codeChallenge: true,
        code_challenge_method: true,
        createdAt: true,
        id: true,
        providerAccessToken: true,
        providerRefreshToken: true,
        providerType: true,
        updatedAt: true,
        userId: true,
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
  @swagger.ApiOkResponse({ type: FlowState })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("FlowStateService", "updateFlowState")
  async updateFlowState(
    @common.Param() params: FlowStateWhereUniqueInput,
    @common.Body() data: FlowStateUpdateInput
  ): Promise<FlowState | null> {
    try {
      return await this.service.updateFlowState({
        where: params,
        data: data,
        select: {
          authCode: true,
          authCodeIssuedAt: true,
          authenticationMethod: true,
          codeChallenge: true,
          code_challenge_method: true,
          createdAt: true,
          id: true,
          providerAccessToken: true,
          providerRefreshToken: true,
          providerType: true,
          updatedAt: true,
          userId: true,
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
  @swagger.ApiOkResponse({ type: FlowState })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("FlowStateService", "deleteFlowState")
  async deleteFlowState(
    @common.Param() params: FlowStateWhereUniqueInput
  ): Promise<FlowState | null> {
    try {
      return await this.service.deleteFlowState({
        where: params,
        select: {
          authCode: true,
          authCodeIssuedAt: true,
          authenticationMethod: true,
          codeChallenge: true,
          code_challenge_method: true,
          createdAt: true,
          id: true,
          providerAccessToken: true,
          providerRefreshToken: true,
          providerType: true,
          updatedAt: true,
          userId: true,
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

  @common.Get("/:id/samlRelayStates")
  @ApiNestedQuery(SamlRelayStateFindManyArgs)
  @GrpcMethod("FlowStateService", "findManySamlRelayStates")
  async findManySamlRelayStates(
    @common.Req() request: Request,
    @common.Param() params: FlowStateWhereUniqueInput
  ): Promise<SamlRelayState[]> {
    const query = plainToClass(SamlRelayStateFindManyArgs, request.query);
    const results = await this.service.findSamlRelayStates(params.id, {
      ...query,
      select: {
        createdAt: true,

        flowState: {
          select: {
            id: true,
          },
        },

        forEmail: true,
        id: true,
        redirectTo: true,
        requestId: true,

        ssoProviders: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/samlRelayStates")
  @GrpcMethod("FlowStateService", "connectSamlRelayStates")
  async connectSamlRelayStates(
    @common.Param() params: FlowStateWhereUniqueInput,
    @common.Body() body: SamlRelayStateWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      samlRelayStates: {
        connect: body,
      },
    };
    await this.service.updateFlowState({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/samlRelayStates")
  @GrpcMethod("FlowStateService", "updateSamlRelayStates")
  async updateSamlRelayStates(
    @common.Param() params: FlowStateWhereUniqueInput,
    @common.Body() body: SamlRelayStateWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      samlRelayStates: {
        set: body,
      },
    };
    await this.service.updateFlowState({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/samlRelayStates")
  @GrpcMethod("FlowStateService", "disconnectSamlRelayStates")
  async disconnectSamlRelayStates(
    @common.Param() params: FlowStateWhereUniqueInput,
    @common.Body() body: SamlRelayStateWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      samlRelayStates: {
        disconnect: body,
      },
    };
    await this.service.updateFlowState({
      where: params,
      data,
      select: { id: true },
    });
  }
}
