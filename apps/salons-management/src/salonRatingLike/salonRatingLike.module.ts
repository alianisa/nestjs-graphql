import { Module } from "@nestjs/common";
import { SalonRatingLikeModuleBase } from "./base/salonRatingLike.module.base";
import { SalonRatingLikeService } from "./salonRatingLike.service";
import { SalonRatingLikeController } from "./salonRatingLike.controller";
import { SalonRatingLikeGrpcController } from "./salonRatingLike.grpc.controller";
import { SalonRatingLikeResolver } from "./salonRatingLike.resolver";

@Module({
  imports: [SalonRatingLikeModuleBase],
  controllers: [SalonRatingLikeController, SalonRatingLikeGrpcController],
  providers: [SalonRatingLikeService, SalonRatingLikeResolver],
  exports: [SalonRatingLikeService],
})
export class SalonRatingLikeModule {}
