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
import { SsoProviderService } from "../ssoProvider.service";
import { SsoProviderCreateInput } from "./SsoProviderCreateInput";
import { SsoProvider } from "./SsoProvider";
import { SsoProviderFindManyArgs } from "./SsoProviderFindManyArgs";
import { SsoProviderWhereUniqueInput } from "./SsoProviderWhereUniqueInput";
import { SsoProviderUpdateInput } from "./SsoProviderUpdateInput";
import { SamlProviderFindManyArgs } from "../../samlProvider/base/SamlProviderFindManyArgs";
import { SamlProvider } from "../../samlProvider/base/SamlProvider";
import { SamlProviderWhereUniqueInput } from "../../samlProvider/base/SamlProviderWhereUniqueInput";
import { SamlRelayStateFindManyArgs } from "../../samlRelayState/base/SamlRelayStateFindManyArgs";
import { SamlRelayState } from "../../samlRelayState/base/SamlRelayState";
import { SamlRelayStateWhereUniqueInput } from "../../samlRelayState/base/SamlRelayStateWhereUniqueInput";
import { SsoDomainFindManyArgs } from "../../ssoDomain/base/SsoDomainFindManyArgs";
import { SsoDomain } from "../../ssoDomain/base/SsoDomain";
import { SsoDomainWhereUniqueInput } from "../../ssoDomain/base/SsoDomainWhereUniqueInput";

export class SsoProviderControllerBase {
  constructor(protected readonly service: SsoProviderService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: SsoProvider })
  async createSsoProvider(
    @common.Body() data: SsoProviderCreateInput
  ): Promise<SsoProvider> {
    return await this.service.createSsoProvider({
      data: data,
      select: {
        createdAt: true,
        id: true,
        resourceId: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [SsoProvider] })
  @ApiNestedQuery(SsoProviderFindManyArgs)
  async ssoProviders(@common.Req() request: Request): Promise<SsoProvider[]> {
    const args = plainToClass(SsoProviderFindManyArgs, request.query);
    return this.service.ssoProviders({
      ...args,
      select: {
        createdAt: true,
        id: true,
        resourceId: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: SsoProvider })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async ssoProvider(
    @common.Param() params: SsoProviderWhereUniqueInput
  ): Promise<SsoProvider | null> {
    const result = await this.service.ssoProvider({
      where: params,
      select: {
        createdAt: true,
        id: true,
        resourceId: true,
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
  @swagger.ApiOkResponse({ type: SsoProvider })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateSsoProvider(
    @common.Param() params: SsoProviderWhereUniqueInput,
    @common.Body() data: SsoProviderUpdateInput
  ): Promise<SsoProvider | null> {
    try {
      return await this.service.updateSsoProvider({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          resourceId: true,
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
  @swagger.ApiOkResponse({ type: SsoProvider })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteSsoProvider(
    @common.Param() params: SsoProviderWhereUniqueInput
  ): Promise<SsoProvider | null> {
    try {
      return await this.service.deleteSsoProvider({
        where: params,
        select: {
          createdAt: true,
          id: true,
          resourceId: true,
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

  @common.Get("/:id/samlProviders")
  @ApiNestedQuery(SamlProviderFindManyArgs)
  async findSamlProviders(
    @common.Req() request: Request,
    @common.Param() params: SsoProviderWhereUniqueInput
  ): Promise<SamlProvider[]> {
    const query = plainToClass(SamlProviderFindManyArgs, request.query);
    const results = await this.service.findSamlProviders(params.id, {
      ...query,
      select: {
        attributeMapping: true,
        createdAt: true,
        entityId: true,
        id: true,
        metadataUrl: true,
        metadataXml: true,
        nameIdFormat: true,

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

  @common.Post("/:id/samlProviders")
  async connectSamlProviders(
    @common.Param() params: SsoProviderWhereUniqueInput,
    @common.Body() body: SamlProviderWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      samlProviders: {
        connect: body,
      },
    };
    await this.service.updateSsoProvider({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/samlProviders")
  async updateSamlProviders(
    @common.Param() params: SsoProviderWhereUniqueInput,
    @common.Body() body: SamlProviderWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      samlProviders: {
        set: body,
      },
    };
    await this.service.updateSsoProvider({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/samlProviders")
  async disconnectSamlProviders(
    @common.Param() params: SsoProviderWhereUniqueInput,
    @common.Body() body: SamlProviderWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      samlProviders: {
        disconnect: body,
      },
    };
    await this.service.updateSsoProvider({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/samlRelayStates")
  @ApiNestedQuery(SamlRelayStateFindManyArgs)
  async findSamlRelayStates(
    @common.Req() request: Request,
    @common.Param() params: SsoProviderWhereUniqueInput
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
  async connectSamlRelayStates(
    @common.Param() params: SsoProviderWhereUniqueInput,
    @common.Body() body: SamlRelayStateWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      samlRelayStates: {
        connect: body,
      },
    };
    await this.service.updateSsoProvider({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/samlRelayStates")
  async updateSamlRelayStates(
    @common.Param() params: SsoProviderWhereUniqueInput,
    @common.Body() body: SamlRelayStateWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      samlRelayStates: {
        set: body,
      },
    };
    await this.service.updateSsoProvider({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/samlRelayStates")
  async disconnectSamlRelayStates(
    @common.Param() params: SsoProviderWhereUniqueInput,
    @common.Body() body: SamlRelayStateWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      samlRelayStates: {
        disconnect: body,
      },
    };
    await this.service.updateSsoProvider({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/ssoDomains")
  @ApiNestedQuery(SsoDomainFindManyArgs)
  async findSsoDomains(
    @common.Req() request: Request,
    @common.Param() params: SsoProviderWhereUniqueInput
  ): Promise<SsoDomain[]> {
    const query = plainToClass(SsoDomainFindManyArgs, request.query);
    const results = await this.service.findSsoDomains(params.id, {
      ...query,
      select: {
        createdAt: true,
        domain: true,
        id: true,

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

  @common.Post("/:id/ssoDomains")
  async connectSsoDomains(
    @common.Param() params: SsoProviderWhereUniqueInput,
    @common.Body() body: SsoDomainWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      ssoDomains: {
        connect: body,
      },
    };
    await this.service.updateSsoProvider({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/ssoDomains")
  async updateSsoDomains(
    @common.Param() params: SsoProviderWhereUniqueInput,
    @common.Body() body: SsoDomainWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      ssoDomains: {
        set: body,
      },
    };
    await this.service.updateSsoProvider({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/ssoDomains")
  async disconnectSsoDomains(
    @common.Param() params: SsoProviderWhereUniqueInput,
    @common.Body() body: SsoDomainWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      ssoDomains: {
        disconnect: body,
      },
    };
    await this.service.updateSsoProvider({
      where: params,
      data,
      select: { id: true },
    });
  }
}
