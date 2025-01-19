import { Module } from "@nestjs/common";
import { SalonRatingModuleBase } from "./base/salonRating.module.base";
import { SalonRatingService } from "./salonRating.service";
import { SalonRatingController } from "./salonRating.controller";
import { SalonRatingGrpcController } from "./salonRating.grpc.controller";
import { SalonRatingResolver } from "./salonRating.resolver";

@Module({
  imports: [SalonRatingModuleBase],
  controllers: [SalonRatingController, SalonRatingGrpcController],
  providers: [SalonRatingService, SalonRatingResolver],
  exports: [SalonRatingService],
})
export class SalonRatingModule {}
