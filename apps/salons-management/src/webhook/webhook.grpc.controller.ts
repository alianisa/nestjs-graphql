import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { WebhookService } from "./webhook.service";
import { WebhookGrpcControllerBase } from "./base/webhook.grpc.controller.base";

@swagger.ApiTags("webhooks")
@common.Controller("webhooks")
export class WebhookGrpcController extends WebhookGrpcControllerBase {
  constructor(protected readonly service: WebhookService) {
    super(service);
  }
}
