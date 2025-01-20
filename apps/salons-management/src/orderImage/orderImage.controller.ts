import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { OrderImageService } from "./orderImage.service";
import { OrderImageControllerBase } from "./base/orderImage.controller.base";

@swagger.ApiTags("orderImages")
@common.Controller("orderImages")
export class OrderImageController extends OrderImageControllerBase {
  constructor(
    protected readonly service: OrderImageService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
