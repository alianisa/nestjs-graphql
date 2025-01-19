import { Module } from "@nestjs/common";
import { LoyaltyProgramModuleBase } from "./base/loyaltyProgram.module.base";
import { LoyaltyProgramService } from "./loyaltyProgram.service";
import { LoyaltyProgramController } from "./loyaltyProgram.controller";
import { LoyaltyProgramGrpcController } from "./loyaltyProgram.grpc.controller";
import { LoyaltyProgramResolver } from "./loyaltyProgram.resolver";

@Module({
  imports: [LoyaltyProgramModuleBase],
  controllers: [LoyaltyProgramController, LoyaltyProgramGrpcController],
  providers: [LoyaltyProgramService, LoyaltyProgramResolver],
  exports: [LoyaltyProgramService],
})
export class LoyaltyProgramModule {}
