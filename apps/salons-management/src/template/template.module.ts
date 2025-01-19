import { Module } from "@nestjs/common";
import { TemplateModuleBase } from "./base/template.module.base";
import { TemplateService } from "./template.service";
import { TemplateController } from "./template.controller";
import { TemplateGrpcController } from "./template.grpc.controller";
import { TemplateResolver } from "./template.resolver";

@Module({
  imports: [TemplateModuleBase],
  controllers: [TemplateController, TemplateGrpcController],
  providers: [TemplateService, TemplateResolver],
  exports: [TemplateService],
})
export class TemplateModule {}
