import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SalonServiceCategoryModuleBase } from "./base/salonServiceCategory.module.base";
import { SalonServiceCategoryService } from "./salonServiceCategory.service";
import { SalonServiceCategoryController } from "./salonServiceCategory.controller";
import { SalonServiceCategoryGrpcController } from "./salonServiceCategory.grpc.controller";
import { SalonServiceCategoryResolver } from "./salonServiceCategory.resolver";

@Module({
  imports: [SalonServiceCategoryModuleBase, forwardRef(() => AuthModule)],
  controllers: [
    SalonServiceCategoryController,
    SalonServiceCategoryGrpcController,
  ],
  providers: [SalonServiceCategoryService, SalonServiceCategoryResolver],
  exports: [SalonServiceCategoryService],
})
export class SalonServiceCategoryModule {}
