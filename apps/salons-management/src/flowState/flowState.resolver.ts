import * as graphql from "@nestjs/graphql";
import { FlowStateResolverBase } from "./base/flowState.resolver.base";
import { FlowState } from "./base/FlowState";
import { FlowStateService } from "./flowState.service";

@graphql.Resolver(() => FlowState)
export class FlowStateResolver extends FlowStateResolverBase {
  constructor(protected readonly service: FlowStateService) {
    super(service);
  }
}
