import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { RefreshTokenService } from "./refreshToken.service";
import { RefreshTokenGrpcControllerBase } from "./base/refreshToken.grpc.controller.base";

@swagger.ApiTags("refreshTokens")
@common.Controller("refreshTokens")
export class RefreshTokenGrpcController extends RefreshTokenGrpcControllerBase {
  constructor(protected readonly service: RefreshTokenService) {
    super(service);
  }
}
