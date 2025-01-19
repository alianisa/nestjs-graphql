import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { QueueService } from "./queue.service";
import { QueueGrpcControllerBase } from "./base/queue.grpc.controller.base";

@swagger.ApiTags("queues")
@common.Controller("queues")
export class QueueGrpcController extends QueueGrpcControllerBase {
  constructor(protected readonly service: QueueService) {
    super(service);
  }
}
