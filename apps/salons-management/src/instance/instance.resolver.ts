import * as graphql from "@nestjs/graphql";
import { InstanceResolverBase } from "./base/instance.resolver.base";
import { Instance } from "./base/Instance";
import { InstanceService } from "./instance.service";

@graphql.Resolver(() => Instance)
export class InstanceResolver extends InstanceResolverBase {
  constructor(protected readonly service: InstanceService) {
    super(service);
  }
}
