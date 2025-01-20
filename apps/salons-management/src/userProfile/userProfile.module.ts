import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { UserProfileModuleBase } from "./base/userProfile.module.base";
import { UserProfileService } from "./userProfile.service";
import { UserProfileController } from "./userProfile.controller";
import { UserProfileGrpcController } from "./userProfile.grpc.controller";
import { UserProfileResolver } from "./userProfile.resolver";

@Module({
  imports: [UserProfileModuleBase, forwardRef(() => AuthModule)],
  controllers: [UserProfileController, UserProfileGrpcController],
  providers: [UserProfileService, UserProfileResolver],
  exports: [UserProfileService],
})
export class UserProfileModule {}
