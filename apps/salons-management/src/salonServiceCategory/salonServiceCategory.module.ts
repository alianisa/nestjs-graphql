import { Module } from "@nestjs/common";
import { SalonServiceCategoryModuleBase } from "./base/salonServiceCategory.module.base";
import { SalonServiceCategoryService } from "./salonServiceCategory.service";
import { SalonServiceCategoryController } from "./salonServiceCategory.controller";
import { SalonServiceCategoryGrpcController } from "./salonServiceCategory.grpc.controller";
import { SalonServiceCategoryResolver } from "./salonServiceCategory.resolver";

@Module({
  imports: [SalonServiceCategoryModuleBase],
  controllers: [
    SalonServiceCategoryController,
    SalonServiceCategoryGrpcController,
  ],
  providers: [SalonServiceCategoryService, SalonServiceCategoryResolver],
  exports: [SalonServiceCategoryService],
})
export class SalonServiceCategoryModule {}
