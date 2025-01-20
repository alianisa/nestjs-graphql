import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SalonRatingModuleBase } from "./base/salonRating.module.base";
import { SalonRatingService } from "./salonRating.service";
import { SalonRatingController } from "./salonRating.controller";
import { SalonRatingGrpcController } from "./salonRating.grpc.controller";
import { SalonRatingResolver } from "./salonRating.resolver";

@Module({
  imports: [SalonRatingModuleBase, forwardRef(() => AuthModule)],
  controllers: [SalonRatingController, SalonRatingGrpcController],
  providers: [SalonRatingService, SalonRatingResolver],
  exports: [SalonRatingService],
})
export class SalonRatingModule {}
