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
import { MfaChallenge } from "./MfaChallenge";
import { MfaChallengeCountArgs } from "./MfaChallengeCountArgs";
import { MfaChallengeFindManyArgs } from "./MfaChallengeFindManyArgs";
import { MfaChallengeFindUniqueArgs } from "./MfaChallengeFindUniqueArgs";
import { CreateMfaChallengeArgs } from "./CreateMfaChallengeArgs";
import { UpdateMfaChallengeArgs } from "./UpdateMfaChallengeArgs";
import { DeleteMfaChallengeArgs } from "./DeleteMfaChallengeArgs";
import { MfaFactor } from "../../mfaFactor/base/MfaFactor";
import { MfaChallengeService } from "../mfaChallenge.service";
@graphql.Resolver(() => MfaChallenge)
export class MfaChallengeResolverBase {
  constructor(protected readonly service: MfaChallengeService) {}

  async _mfaChallengesMeta(
    @graphql.Args() args: MfaChallengeCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [MfaChallenge])
  async mfaChallenges(
    @graphql.Args() args: MfaChallengeFindManyArgs
  ): Promise<MfaChallenge[]> {
    return this.service.mfaChallenges(args);
  }

  @graphql.Query(() => MfaChallenge, { nullable: true })
  async mfaChallenge(
    @graphql.Args() args: MfaChallengeFindUniqueArgs
  ): Promise<MfaChallenge | null> {
    const result = await this.service.mfaChallenge(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => MfaChallenge)
  async createMfaChallenge(
    @graphql.Args() args: CreateMfaChallengeArgs
  ): Promise<MfaChallenge> {
    return await this.service.createMfaChallenge({
      ...args,
      data: {
        ...args.data,

        mfaFactors: {
          connect: args.data.mfaFactors,
        },
      },
    });
  }

  @graphql.Mutation(() => MfaChallenge)
  async updateMfaChallenge(
    @graphql.Args() args: UpdateMfaChallengeArgs
  ): Promise<MfaChallenge | null> {
    try {
      return await this.service.updateMfaChallenge({
        ...args,
        data: {
          ...args.data,

          mfaFactors: {
            connect: args.data.mfaFactors,
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

  @graphql.Mutation(() => MfaChallenge)
  async deleteMfaChallenge(
    @graphql.Args() args: DeleteMfaChallengeArgs
  ): Promise<MfaChallenge | null> {
    try {
      return await this.service.deleteMfaChallenge(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => MfaFactor, {
    nullable: true,
    name: "mfaFactors",
  })
  async getMfaFactors(
    @graphql.Parent() parent: MfaChallenge
  ): Promise<MfaFactor | null> {
    const result = await this.service.getMfaFactors(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
