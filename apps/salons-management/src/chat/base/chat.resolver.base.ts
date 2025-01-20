/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Chat } from "./Chat";
import { ChatCountArgs } from "./ChatCountArgs";
import { ChatFindManyArgs } from "./ChatFindManyArgs";
import { ChatFindUniqueArgs } from "./ChatFindUniqueArgs";
import { CreateChatArgs } from "./CreateChatArgs";
import { UpdateChatArgs } from "./UpdateChatArgs";
import { DeleteChatArgs } from "./DeleteChatArgs";
import { UserProfile } from "../../userProfile/base/UserProfile";
import { ChatService } from "../chat.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Chat)
export class ChatResolverBase {
  constructor(
    protected readonly service: ChatService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Chat",
    action: "read",
    possession: "any",
  })
  async _chatsMeta(
    @graphql.Args() args: ChatCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Chat])
  @nestAccessControl.UseRoles({
    resource: "Chat",
    action: "read",
    possession: "any",
  })
  async chats(@graphql.Args() args: ChatFindManyArgs): Promise<Chat[]> {
    return this.service.chats(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Chat, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Chat",
    action: "read",
    possession: "own",
  })
  async chat(@graphql.Args() args: ChatFindUniqueArgs): Promise<Chat | null> {
    const result = await this.service.chat(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Chat)
  @nestAccessControl.UseRoles({
    resource: "Chat",
    action: "create",
    possession: "any",
  })
  async createChat(@graphql.Args() args: CreateChatArgs): Promise<Chat> {
    return await this.service.createChat({
      ...args,
      data: {
        ...args.data,

        userProfilesChatsUserATouserProfiles: args.data
          .userProfilesChatsUserATouserProfiles
          ? {
              connect: args.data.userProfilesChatsUserATouserProfiles,
            }
          : undefined,

        userProfilesChatsUserBTouserProfiles: args.data
          .userProfilesChatsUserBTouserProfiles
          ? {
              connect: args.data.userProfilesChatsUserBTouserProfiles,
            }
          : undefined,

        userProfilesChatsUsersTouserProfiles: args.data
          .userProfilesChatsUsersTouserProfiles
          ? {
              connect: args.data.userProfilesChatsUsersTouserProfiles,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Chat)
  @nestAccessControl.UseRoles({
    resource: "Chat",
    action: "update",
    possession: "any",
  })
  async updateChat(@graphql.Args() args: UpdateChatArgs): Promise<Chat | null> {
    try {
      return await this.service.updateChat({
        ...args,
        data: {
          ...args.data,

          userProfilesChatsUserATouserProfiles: args.data
            .userProfilesChatsUserATouserProfiles
            ? {
                connect: args.data.userProfilesChatsUserATouserProfiles,
              }
            : undefined,

          userProfilesChatsUserBTouserProfiles: args.data
            .userProfilesChatsUserBTouserProfiles
            ? {
                connect: args.data.userProfilesChatsUserBTouserProfiles,
              }
            : undefined,

          userProfilesChatsUsersTouserProfiles: args.data
            .userProfilesChatsUsersTouserProfiles
            ? {
                connect: args.data.userProfilesChatsUsersTouserProfiles,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Chat)
  @nestAccessControl.UseRoles({
    resource: "Chat",
    action: "delete",
    possession: "any",
  })
  async deleteChat(@graphql.Args() args: DeleteChatArgs): Promise<Chat | null> {
    try {
      return await this.service.deleteChat(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => UserProfile, {
    nullable: true,
    name: "userProfilesChatsUserATouserProfiles",
  })
  @nestAccessControl.UseRoles({
    resource: "UserProfile",
    action: "read",
    possession: "any",
  })
  async getUserProfilesChatsUserATouserProfiles(
    @graphql.Parent() parent: Chat
  ): Promise<UserProfile | null> {
    const result = await this.service.getUserProfilesChatsUserATouserProfiles(
      parent.id
    );

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => UserProfile, {
    nullable: true,
    name: "userProfilesChatsUserBTouserProfiles",
  })
  @nestAccessControl.UseRoles({
    resource: "UserProfile",
    action: "read",
    possession: "any",
  })
  async getUserProfilesChatsUserBTouserProfiles(
    @graphql.Parent() parent: Chat
  ): Promise<UserProfile | null> {
    const result = await this.service.getUserProfilesChatsUserBTouserProfiles(
      parent.id
    );

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => UserProfile, {
    nullable: true,
    name: "userProfilesChatsUsersTouserProfiles",
  })
  @nestAccessControl.UseRoles({
    resource: "UserProfile",
    action: "read",
    possession: "any",
  })
  async getUserProfilesChatsUsersTouserProfiles(
    @graphql.Parent() parent: Chat
  ): Promise<UserProfile | null> {
    const result = await this.service.getUserProfilesChatsUsersTouserProfiles(
      parent.id
    );

    if (!result) {
      return null;
    }
    return result;
  }
}
