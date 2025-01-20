import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { UserFavoriteMasterModuleBase } from "./base/userFavoriteMaster.module.base";
import { UserFavoriteMasterService } from "./userFavoriteMaster.service";
import { UserFavoriteMasterController } from "./userFavoriteMaster.controller";
import { UserFavoriteMasterGrpcController } from "./userFavoriteMaster.grpc.controller";
import { UserFavoriteMasterResolver } from "./userFavoriteMaster.resolver";

@Module({
  imports: [UserFavoriteMasterModuleBase, forwardRef(() => AuthModule)],
  controllers: [UserFavoriteMasterController, UserFavoriteMasterGrpcController],
  providers: [UserFavoriteMasterService, UserFavoriteMasterResolver],
  exports: [UserFavoriteMasterService],
})
export class UserFavoriteMasterModule {}
