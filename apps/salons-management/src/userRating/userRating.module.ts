import { Module } from "@nestjs/common";
import { UserRatingModuleBase } from "./base/userRating.module.base";
import { UserRatingService } from "./userRating.service";
import { UserRatingController } from "./userRating.controller";
import { UserRatingGrpcController } from "./userRating.grpc.controller";
import { UserRatingResolver } from "./userRating.resolver";

@Module({
  imports: [UserRatingModuleBase],
  controllers: [UserRatingController, UserRatingGrpcController],
  providers: [UserRatingService, UserRatingResolver],
  exports: [UserRatingService],
})
export class UserRatingModule {}
