import { Module } from "@nestjs/common";
import { SalonCategoryModuleBase } from "./base/salonCategory.module.base";
import { SalonCategoryService } from "./salonCategory.service";
import { SalonCategoryController } from "./salonCategory.controller";
import { SalonCategoryGrpcController } from "./salonCategory.grpc.controller";
import { SalonCategoryResolver } from "./salonCategory.resolver";

@Module({
  imports: [SalonCategoryModuleBase],
  controllers: [SalonCategoryController, SalonCategoryGrpcController],
  providers: [SalonCategoryService, SalonCategoryResolver],
  exports: [SalonCategoryService],
})
export class SalonCategoryModule {}
