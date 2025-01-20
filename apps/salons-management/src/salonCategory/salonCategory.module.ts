import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SalonCategoryModuleBase } from "./base/salonCategory.module.base";
import { SalonCategoryService } from "./salonCategory.service";
import { SalonCategoryController } from "./salonCategory.controller";
import { SalonCategoryGrpcController } from "./salonCategory.grpc.controller";
import { SalonCategoryResolver } from "./salonCategory.resolver";

@Module({
  imports: [SalonCategoryModuleBase, forwardRef(() => AuthModule)],
  controllers: [SalonCategoryController, SalonCategoryGrpcController],
  providers: [SalonCategoryService, SalonCategoryResolver],
  exports: [SalonCategoryService],
})
export class SalonCategoryModule {}
