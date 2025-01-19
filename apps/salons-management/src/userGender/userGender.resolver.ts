import * as graphql from "@nestjs/graphql";
import { UserGenderResolverBase } from "./base/userGender.resolver.base";
import { UserGender } from "./base/UserGender";
import { UserGenderService } from "./userGender.service";

@graphql.Resolver(() => UserGender)
export class UserGenderResolver extends UserGenderResolverBase {
  constructor(protected readonly service: UserGenderService) {
    super(service);
  }
}
