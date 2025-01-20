import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MetricModuleBase } from "./base/metric.module.base";
import { MetricService } from "./metric.service";
import { MetricController } from "./metric.controller";
import { MetricGrpcController } from "./metric.grpc.controller";
import { MetricResolver } from "./metric.resolver";

@Module({
  imports: [MetricModuleBase, forwardRef(() => AuthModule)],
  controllers: [MetricController, MetricGrpcController],
  providers: [MetricService, MetricResolver],
  exports: [MetricService],
})
export class MetricModule {}
