import { Module } from "@nestjs/common";
import { AppointmentModuleBase } from "./base/appointment.module.base";
import { AppointmentService } from "./appointment.service";
import { AppointmentController } from "./appointment.controller";
import { AppointmentGrpcController } from "./appointment.grpc.controller";
import { AppointmentResolver } from "./appointment.resolver";

@Module({
  imports: [AppointmentModuleBase],
  controllers: [AppointmentController, AppointmentGrpcController],
  providers: [AppointmentService, AppointmentResolver],
  exports: [AppointmentService],
})
export class AppointmentModule {}
