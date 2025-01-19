import { Module } from "@nestjs/common";
import { ScheduleModuleBase } from "./base/schedule.module.base";
import { ScheduleService } from "./schedule.service";
import { ScheduleController } from "./schedule.controller";
import { ScheduleGrpcController } from "./schedule.grpc.controller";
import { ScheduleResolver } from "./schedule.resolver";

@Module({
  imports: [ScheduleModuleBase],
  controllers: [ScheduleController, ScheduleGrpcController],
  providers: [ScheduleService, ScheduleResolver],
  exports: [ScheduleService],
})
export class ScheduleModule {}
