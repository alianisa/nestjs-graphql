import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ApiKeyService } from "./apiKey.service";
import { ApiKeyGrpcControllerBase } from "./base/apiKey.grpc.controller.base";

@swagger.ApiTags("apiKeys")
@common.Controller("apiKeys")
export class ApiKeyGrpcController extends ApiKeyGrpcControllerBase {
  constructor(protected readonly service: ApiKeyService) {
    super(service);
  }
}
