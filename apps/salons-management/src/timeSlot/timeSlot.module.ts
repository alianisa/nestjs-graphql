import { Module } from "@nestjs/common";
import { TimeSlotModuleBase } from "./base/timeSlot.module.base";
import { TimeSlotService } from "./timeSlot.service";
import { TimeSlotController } from "./timeSlot.controller";
import { TimeSlotGrpcController } from "./timeSlot.grpc.controller";
import { TimeSlotResolver } from "./timeSlot.resolver";

@Module({
  imports: [TimeSlotModuleBase],
  controllers: [TimeSlotController, TimeSlotGrpcController],
  providers: [TimeSlotService, TimeSlotResolver],
  exports: [TimeSlotService],
})
export class TimeSlotModule {}
