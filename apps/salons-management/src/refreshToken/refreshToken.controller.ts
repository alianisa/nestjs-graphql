import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { RefreshTokenService } from "./refreshToken.service";
import { RefreshTokenControllerBase } from "./base/refreshToken.controller.base";

@swagger.ApiTags("refreshTokens")
@common.Controller("refreshTokens")
export class RefreshTokenController extends RefreshTokenControllerBase {
  constructor(protected readonly service: RefreshTokenService) {
    super(service);
  }
}
