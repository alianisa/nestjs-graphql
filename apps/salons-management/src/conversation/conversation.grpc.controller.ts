import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ConversationService } from "./conversation.service";
import { ConversationGrpcControllerBase } from "./base/conversation.grpc.controller.base";

@swagger.ApiTags("conversations")
@common.Controller("conversations")
export class ConversationGrpcController extends ConversationGrpcControllerBase {
  constructor(protected readonly service: ConversationService) {
    super(service);
  }
}
