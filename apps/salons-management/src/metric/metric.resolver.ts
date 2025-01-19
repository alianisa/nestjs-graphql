import * as graphql from "@nestjs/graphql";
import { MetricResolverBase } from "./base/metric.resolver.base";
import { Metric } from "./base/Metric";
import { MetricService } from "./metric.service";

@graphql.Resolver(() => Metric)
export class MetricResolver extends MetricResolverBase {
  constructor(protected readonly service: MetricService) {
    super(service);
  }
}
