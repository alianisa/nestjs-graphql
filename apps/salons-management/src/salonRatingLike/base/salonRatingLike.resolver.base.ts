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
import { SalonRatingLike } from "./SalonRatingLike";
import { SalonRatingLikeCountArgs } from "./SalonRatingLikeCountArgs";
import { SalonRatingLikeFindManyArgs } from "./SalonRatingLikeFindManyArgs";
import { SalonRatingLikeFindUniqueArgs } from "./SalonRatingLikeFindUniqueArgs";
import { CreateSalonRatingLikeArgs } from "./CreateSalonRatingLikeArgs";
import { UpdateSalonRatingLikeArgs } from "./UpdateSalonRatingLikeArgs";
import { DeleteSalonRatingLikeArgs } from "./DeleteSalonRatingLikeArgs";
import { SalonRating } from "../../salonRating/base/SalonRating";
import { Salon } from "../../salon/base/Salon";
import { UserProfile } from "../../userProfile/base/UserProfile";
import { SalonRatingLikeService } from "../salonRatingLike.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SalonRatingLike)
export class SalonRatingLikeResolverBase {
  constructor(
    protected readonly service: SalonRatingLikeService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "SalonRatingLike",
    action: "read",
    possession: "any",
  })
  async _salonRatingLikesMeta(
    @graphql.Args() args: SalonRatingLikeCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [SalonRatingLike])
  @nestAccessControl.UseRoles({
    resource: "SalonRatingLike",
    action: "read",
    possession: "any",
  })
  async salonRatingLikes(
    @graphql.Args() args: SalonRatingLikeFindManyArgs
  ): Promise<SalonRatingLike[]> {
    return this.service.salonRatingLikes(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => SalonRatingLike, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "SalonRatingLike",
    action: "read",
    possession: "own",
  })
  async salonRatingLike(
    @graphql.Args() args: SalonRatingLikeFindUniqueArgs
  ): Promise<SalonRatingLike | null> {
    const result = await this.service.salonRatingLike(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => SalonRatingLike)
  @nestAccessControl.UseRoles({
    resource: "SalonRatingLike",
    action: "create",
    possession: "any",
  })
  async createSalonRatingLike(
    @graphql.Args() args: CreateSalonRatingLikeArgs
  ): Promise<SalonRatingLike> {
    return await this.service.createSalonRatingLike({
      ...args,
      data: {
        ...args.data,

        salonRatings: args.data.salonRatings
          ? {
              connect: args.data.salonRatings,
            }
          : undefined,

        salons: {
          connect: args.data.salons,
        },

        userProfilesSalonRatingLikesUserIdTouserProfiles: args.data
          .userProfilesSalonRatingLikesUserIdTouserProfiles
          ? {
              connect:
                args.data.userProfilesSalonRatingLikesUserIdTouserProfiles,
            }
          : undefined,

        userProfilesSalonRatingLikesVoterIdTouserProfiles: args.data
          .userProfilesSalonRatingLikesVoterIdTouserProfiles
          ? {
              connect:
                args.data.userProfilesSalonRatingLikesVoterIdTouserProfiles,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => SalonRatingLike)
  @nestAccessControl.UseRoles({
    resource: "SalonRatingLike",
    action: "update",
    possession: "any",
  })
  async updateSalonRatingLike(
    @graphql.Args() args: UpdateSalonRatingLikeArgs
  ): Promise<SalonRatingLike | null> {
    try {
      return await this.service.updateSalonRatingLike({
        ...args,
        data: {
          ...args.data,

          salonRatings: args.data.salonRatings
            ? {
                connect: args.data.salonRatings,
              }
            : undefined,

          salons: {
            connect: args.data.salons,
          },

          userProfilesSalonRatingLikesUserIdTouserProfiles: args.data
            .userProfilesSalonRatingLikesUserIdTouserProfiles
            ? {
                connect:
                  args.data.userProfilesSalonRatingLikesUserIdTouserProfiles,
              }
            : undefined,

          userProfilesSalonRatingLikesVoterIdTouserProfiles: args.data
            .userProfilesSalonRatingLikesVoterIdTouserProfiles
            ? {
                connect:
                  args.data.userProfilesSalonRatingLikesVoterIdTouserProfiles,
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

  @graphql.Mutation(() => SalonRatingLike)
  @nestAccessControl.UseRoles({
    resource: "SalonRatingLike",
    action: "delete",
    possession: "any",
  })
  async deleteSalonRatingLike(
    @graphql.Args() args: DeleteSalonRatingLikeArgs
  ): Promise<SalonRatingLike | null> {
    try {
      return await this.service.deleteSalonRatingLike(args);
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
  @graphql.ResolveField(() => SalonRating, {
    nullable: true,
    name: "salonRatings",
  })
  @nestAccessControl.UseRoles({
    resource: "SalonRating",
    action: "read",
    possession: "any",
  })
  async getSalonRatings(
    @graphql.Parent() parent: SalonRatingLike
  ): Promise<SalonRating | null> {
    const result = await this.service.getSalonRatings(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Salon, {
    nullable: true,
    name: "salons",
  })
  @nestAccessControl.UseRoles({
    resource: "Salon",
    action: "read",
    possession: "any",
  })
  async getSalons(
    @graphql.Parent() parent: SalonRatingLike
  ): Promise<Salon | null> {
    const result = await this.service.getSalons(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => UserProfile, {
    nullable: true,
    name: "userProfilesSalonRatingLikesUserIdTouserProfiles",
  })
  @nestAccessControl.UseRoles({
    resource: "UserProfile",
    action: "read",
    possession: "any",
  })
  async getUserProfilesSalonRatingLikesUserIdTouserProfiles(
    @graphql.Parent() parent: SalonRatingLike
  ): Promise<UserProfile | null> {
    const result =
      await this.service.getUserProfilesSalonRatingLikesUserIdTouserProfiles(
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
    name: "userProfilesSalonRatingLikesVoterIdTouserProfiles",
  })
  @nestAccessControl.UseRoles({
    resource: "UserProfile",
    action: "read",
    possession: "any",
  })
  async getUserProfilesSalonRatingLikesVoterIdTouserProfiles(
    @graphql.Parent() parent: SalonRatingLike
  ): Promise<UserProfile | null> {
    const result =
      await this.service.getUserProfilesSalonRatingLikesVoterIdTouserProfiles(
        parent.id
      );

    if (!result) {
      return null;
    }
    return result;
  }
}
