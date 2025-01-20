import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SalonRatingLikeModuleBase } from "./base/salonRatingLike.module.base";
import { SalonRatingLikeService } from "./salonRatingLike.service";
import { SalonRatingLikeController } from "./salonRatingLike.controller";
import { SalonRatingLikeGrpcController } from "./salonRatingLike.grpc.controller";
import { SalonRatingLikeResolver } from "./salonRatingLike.resolver";

@Module({
  imports: [SalonRatingLikeModuleBase, forwardRef(() => AuthModule)],
  controllers: [SalonRatingLikeController, SalonRatingLikeGrpcController],
  providers: [SalonRatingLikeService, SalonRatingLikeResolver],
  exports: [SalonRatingLikeService],
})
export class SalonRatingLikeModule {}
