import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { UserFavoriteSalonModuleBase } from "./base/userFavoriteSalon.module.base";
import { UserFavoriteSalonService } from "./userFavoriteSalon.service";
import { UserFavoriteSalonController } from "./userFavoriteSalon.controller";
import { UserFavoriteSalonGrpcController } from "./userFavoriteSalon.grpc.controller";
import { UserFavoriteSalonResolver } from "./userFavoriteSalon.resolver";

@Module({
  imports: [UserFavoriteSalonModuleBase, forwardRef(() => AuthModule)],
  controllers: [UserFavoriteSalonController, UserFavoriteSalonGrpcController],
  providers: [UserFavoriteSalonService, UserFavoriteSalonResolver],
  exports: [UserFavoriteSalonService],
})
export class UserFavoriteSalonModule {}
