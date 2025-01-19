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
import { UserService } from "../user.service";
import { UserCreateInput } from "./UserCreateInput";
import { User } from "./User";
import { UserFindManyArgs } from "./UserFindManyArgs";
import { UserWhereUniqueInput } from "./UserWhereUniqueInput";
import { UserUpdateInput } from "./UserUpdateInput";
import { IdentityFindManyArgs } from "../../identity/base/IdentityFindManyArgs";
import { Identity } from "../../identity/base/Identity";
import { IdentityWhereUniqueInput } from "../../identity/base/IdentityWhereUniqueInput";
import { MfaFactorFindManyArgs } from "../../mfaFactor/base/MfaFactorFindManyArgs";
import { MfaFactor } from "../../mfaFactor/base/MfaFactor";
import { MfaFactorWhereUniqueInput } from "../../mfaFactor/base/MfaFactorWhereUniqueInput";
import { OneTimeTokenFindManyArgs } from "../../oneTimeToken/base/OneTimeTokenFindManyArgs";
import { OneTimeToken } from "../../oneTimeToken/base/OneTimeToken";
import { OneTimeTokenWhereUniqueInput } from "../../oneTimeToken/base/OneTimeTokenWhereUniqueInput";
import { SessionFindManyArgs } from "../../session/base/SessionFindManyArgs";
import { Session } from "../../session/base/Session";
import { SessionWhereUniqueInput } from "../../session/base/SessionWhereUniqueInput";

export class UserControllerBase {
  constructor(protected readonly service: UserService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: User })
  async createUser(@common.Body() data: UserCreateInput): Promise<User> {
    return await this.service.createUser({
      data: data,
      select: {
        aud: true,
        bannedUntil: true,
        confirmationSentAt: true,
        confirmationToken: true,
        confirmedAt: true,
        createdAt: true,
        deletedAt: true,
        email: true,
        emailChange: true,
        emailChangeConfirmStatus: true,
        emailChangeSentAt: true,
        emailChangeTokenCurrent: true,
        emailChangeTokenNew: true,
        emailConfirmedAt: true,
        id: true,
        instanceId: true,
        invitedAt: true,
        isAnonymous: true,
        isSsoUser: true,
        isSuperAdmin: true,
        lastSignInAt: true,
        phone: true,
        phoneChange: true,
        phoneChangeSentAt: true,
        phoneChangeToken: true,
        phoneConfirmedAt: true,
        rawAppMetaData: true,
        rawUserMetaData: true,
        reauthenticationSentAt: true,
        reauthenticationToken: true,
        recoverySentAt: true,
        recoveryToken: true,
        roles: true,
        updatedAt: true,
        username: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [User] })
  @ApiNestedQuery(UserFindManyArgs)
  async users(@common.Req() request: Request): Promise<User[]> {
    const args = plainToClass(UserFindManyArgs, request.query);
    return this.service.users({
      ...args,
      select: {
        aud: true,
        bannedUntil: true,
        confirmationSentAt: true,
        confirmationToken: true,
        confirmedAt: true,
        createdAt: true,
        deletedAt: true,
        email: true,
        emailChange: true,
        emailChangeConfirmStatus: true,
        emailChangeSentAt: true,
        emailChangeTokenCurrent: true,
        emailChangeTokenNew: true,
        emailConfirmedAt: true,
        id: true,
        instanceId: true,
        invitedAt: true,
        isAnonymous: true,
        isSsoUser: true,
        isSuperAdmin: true,
        lastSignInAt: true,
        phone: true,
        phoneChange: true,
        phoneChangeSentAt: true,
        phoneChangeToken: true,
        phoneConfirmedAt: true,
        rawAppMetaData: true,
        rawUserMetaData: true,
        reauthenticationSentAt: true,
        reauthenticationToken: true,
        recoverySentAt: true,
        recoveryToken: true,
        roles: true,
        updatedAt: true,
        username: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: User })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async user(
    @common.Param() params: UserWhereUniqueInput
  ): Promise<User | null> {
    const result = await this.service.user({
      where: params,
      select: {
        aud: true,
        bannedUntil: true,
        confirmationSentAt: true,
        confirmationToken: true,
        confirmedAt: true,
        createdAt: true,
        deletedAt: true,
        email: true,
        emailChange: true,
        emailChangeConfirmStatus: true,
        emailChangeSentAt: true,
        emailChangeTokenCurrent: true,
        emailChangeTokenNew: true,
        emailConfirmedAt: true,
        id: true,
        instanceId: true,
        invitedAt: true,
        isAnonymous: true,
        isSsoUser: true,
        isSuperAdmin: true,
        lastSignInAt: true,
        phone: true,
        phoneChange: true,
        phoneChangeSentAt: true,
        phoneChangeToken: true,
        phoneConfirmedAt: true,
        rawAppMetaData: true,
        rawUserMetaData: true,
        reauthenticationSentAt: true,
        reauthenticationToken: true,
        recoverySentAt: true,
        recoveryToken: true,
        roles: true,
        updatedAt: true,
        username: true,
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
  @swagger.ApiOkResponse({ type: User })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateUser(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() data: UserUpdateInput
  ): Promise<User | null> {
    try {
      return await this.service.updateUser({
        where: params,
        data: data,
        select: {
          aud: true,
          bannedUntil: true,
          confirmationSentAt: true,
          confirmationToken: true,
          confirmedAt: true,
          createdAt: true,
          deletedAt: true,
          email: true,
          emailChange: true,
          emailChangeConfirmStatus: true,
          emailChangeSentAt: true,
          emailChangeTokenCurrent: true,
          emailChangeTokenNew: true,
          emailConfirmedAt: true,
          id: true,
          instanceId: true,
          invitedAt: true,
          isAnonymous: true,
          isSsoUser: true,
          isSuperAdmin: true,
          lastSignInAt: true,
          phone: true,
          phoneChange: true,
          phoneChangeSentAt: true,
          phoneChangeToken: true,
          phoneConfirmedAt: true,
          rawAppMetaData: true,
          rawUserMetaData: true,
          reauthenticationSentAt: true,
          reauthenticationToken: true,
          recoverySentAt: true,
          recoveryToken: true,
          roles: true,
          updatedAt: true,
          username: true,
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
  @swagger.ApiOkResponse({ type: User })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteUser(
    @common.Param() params: UserWhereUniqueInput
  ): Promise<User | null> {
    try {
      return await this.service.deleteUser({
        where: params,
        select: {
          aud: true,
          bannedUntil: true,
          confirmationSentAt: true,
          confirmationToken: true,
          confirmedAt: true,
          createdAt: true,
          deletedAt: true,
          email: true,
          emailChange: true,
          emailChangeConfirmStatus: true,
          emailChangeSentAt: true,
          emailChangeTokenCurrent: true,
          emailChangeTokenNew: true,
          emailConfirmedAt: true,
          id: true,
          instanceId: true,
          invitedAt: true,
          isAnonymous: true,
          isSsoUser: true,
          isSuperAdmin: true,
          lastSignInAt: true,
          phone: true,
          phoneChange: true,
          phoneChangeSentAt: true,
          phoneChangeToken: true,
          phoneConfirmedAt: true,
          rawAppMetaData: true,
          rawUserMetaData: true,
          reauthenticationSentAt: true,
          reauthenticationToken: true,
          recoverySentAt: true,
          recoveryToken: true,
          roles: true,
          updatedAt: true,
          username: true,
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

  @common.Get("/:id/identities")
  @ApiNestedQuery(IdentityFindManyArgs)
  async findIdentities(
    @common.Req() request: Request,
    @common.Param() params: UserWhereUniqueInput
  ): Promise<Identity[]> {
    const query = plainToClass(IdentityFindManyArgs, request.query);
    const results = await this.service.findIdentities(params.id, {
      ...query,
      select: {
        createdAt: true,
        email: true,
        id: true,
        identityData: true,
        lastSignInAt: true,
        provider: true,
        providerId: true,
        updatedAt: true,

        users: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/identities")
  async connectIdentities(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: IdentityWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      identities: {
        connect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/identities")
  async updateIdentities(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: IdentityWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      identities: {
        set: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/identities")
  async disconnectIdentities(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: IdentityWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      identities: {
        disconnect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/mfaFactors")
  @ApiNestedQuery(MfaFactorFindManyArgs)
  async findMfaFactors(
    @common.Req() request: Request,
    @common.Param() params: UserWhereUniqueInput
  ): Promise<MfaFactor[]> {
    const query = plainToClass(MfaFactorFindManyArgs, request.query);
    const results = await this.service.findMfaFactors(params.id, {
      ...query,
      select: {
        createdAt: true,
        factor_type: true,
        friendlyName: true,
        id: true,
        lastChallengedAt: true,
        phone: true,
        secret: true,
        status: true,
        updatedAt: true,

        users: {
          select: {
            id: true,
          },
        },

        webAuthnAaguid: true,
        webAuthnCredential: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/mfaFactors")
  async connectMfaFactors(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: MfaFactorWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      mfaFactors: {
        connect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/mfaFactors")
  async updateMfaFactors(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: MfaFactorWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      mfaFactors: {
        set: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/mfaFactors")
  async disconnectMfaFactors(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: MfaFactorWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      mfaFactors: {
        disconnect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/oneTimeTokens")
  @ApiNestedQuery(OneTimeTokenFindManyArgs)
  async findOneTimeTokens(
    @common.Req() request: Request,
    @common.Param() params: UserWhereUniqueInput
  ): Promise<OneTimeToken[]> {
    const query = plainToClass(OneTimeTokenFindManyArgs, request.query);
    const results = await this.service.findOneTimeTokens(params.id, {
      ...query,
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
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/oneTimeTokens")
  async connectOneTimeTokens(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: OneTimeTokenWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      oneTimeTokens: {
        connect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/oneTimeTokens")
  async updateOneTimeTokens(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: OneTimeTokenWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      oneTimeTokens: {
        set: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/oneTimeTokens")
  async disconnectOneTimeTokens(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: OneTimeTokenWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      oneTimeTokens: {
        disconnect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/sessions")
  @ApiNestedQuery(SessionFindManyArgs)
  async findSessions(
    @common.Req() request: Request,
    @common.Param() params: UserWhereUniqueInput
  ): Promise<Session[]> {
    const query = plainToClass(SessionFindManyArgs, request.query);
    const results = await this.service.findSessions(params.id, {
      ...query,
      select: {
        aal: true,
        createdAt: true,
        factorId: true,
        id: true,
        ip: true,
        notAfter: true,
        refreshedAt: true,
        tag: true,
        updatedAt: true,
        userAgent: true,

        users: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/sessions")
  async connectSessions(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: SessionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      sessions: {
        connect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/sessions")
  async updateSessions(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: SessionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      sessions: {
        set: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/sessions")
  async disconnectSessions(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: SessionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      sessions: {
        disconnect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }
}
