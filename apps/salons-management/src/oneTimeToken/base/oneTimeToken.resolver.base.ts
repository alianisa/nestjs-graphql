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
import { OneTimeToken } from "./OneTimeToken";
import { OneTimeTokenCountArgs } from "./OneTimeTokenCountArgs";
import { OneTimeTokenFindManyArgs } from "./OneTimeTokenFindManyArgs";
import { OneTimeTokenFindUniqueArgs } from "./OneTimeTokenFindUniqueArgs";
import { CreateOneTimeTokenArgs } from "./CreateOneTimeTokenArgs";
import { UpdateOneTimeTokenArgs } from "./UpdateOneTimeTokenArgs";
import { DeleteOneTimeTokenArgs } from "./DeleteOneTimeTokenArgs";
import { User } from "../../user/base/User";
import { OneTimeTokenService } from "../oneTimeToken.service";
@graphql.Resolver(() => OneTimeToken)
export class OneTimeTokenResolverBase {
  constructor(protected readonly service: OneTimeTokenService) {}

  async _oneTimeTokensMeta(
    @graphql.Args() args: OneTimeTokenCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [OneTimeToken])
  async oneTimeTokens(
    @graphql.Args() args: OneTimeTokenFindManyArgs
  ): Promise<OneTimeToken[]> {
    return this.service.oneTimeTokens(args);
  }

  @graphql.Query(() => OneTimeToken, { nullable: true })
  async oneTimeToken(
    @graphql.Args() args: OneTimeTokenFindUniqueArgs
  ): Promise<OneTimeToken | null> {
    const result = await this.service.oneTimeToken(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => OneTimeToken)
  async createOneTimeToken(
    @graphql.Args() args: CreateOneTimeTokenArgs
  ): Promise<OneTimeToken> {
    return await this.service.createOneTimeToken({
      ...args,
      data: {
        ...args.data,

        users: {
          connect: args.data.users,
        },
      },
    });
  }

  @graphql.Mutation(() => OneTimeToken)
  async updateOneTimeToken(
    @graphql.Args() args: UpdateOneTimeTokenArgs
  ): Promise<OneTimeToken | null> {
    try {
      return await this.service.updateOneTimeToken({
        ...args,
        data: {
          ...args.data,

          users: {
            connect: args.data.users,
          },
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

  @graphql.Mutation(() => OneTimeToken)
  async deleteOneTimeToken(
    @graphql.Args() args: DeleteOneTimeTokenArgs
  ): Promise<OneTimeToken | null> {
    try {
      return await this.service.deleteOneTimeToken(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "users",
  })
  async getUsers(@graphql.Parent() parent: OneTimeToken): Promise<User | null> {
    const result = await this.service.getUsers(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
