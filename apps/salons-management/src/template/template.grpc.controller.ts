import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TemplateService } from "./template.service";
import { TemplateGrpcControllerBase } from "./base/template.grpc.controller.base";

@swagger.ApiTags("templates")
@common.Controller("templates")
export class TemplateGrpcController extends TemplateGrpcControllerBase {
  constructor(protected readonly service: TemplateService) {
    super(service);
  }
}
