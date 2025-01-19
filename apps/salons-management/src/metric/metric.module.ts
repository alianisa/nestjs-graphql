import { Module } from "@nestjs/common";
import { MetricModuleBase } from "./base/metric.module.base";
import { MetricService } from "./metric.service";
import { MetricController } from "./metric.controller";
import { MetricGrpcController } from "./metric.grpc.controller";
import { MetricResolver } from "./metric.resolver";

@Module({
  imports: [MetricModuleBase],
  controllers: [MetricController, MetricGrpcController],
  providers: [MetricService, MetricResolver],
  exports: [MetricService],
})
export class MetricModule {}
