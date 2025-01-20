import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { WebhookModuleBase } from "./base/webhook.module.base";
import { WebhookService } from "./webhook.service";
import { WebhookController } from "./webhook.controller";
import { WebhookGrpcController } from "./webhook.grpc.controller";
import { WebhookResolver } from "./webhook.resolver";

@Module({
  imports: [WebhookModuleBase, forwardRef(() => AuthModule)],
  controllers: [WebhookController, WebhookGrpcController],
  providers: [WebhookService, WebhookResolver],
  exports: [WebhookService],
})
export class WebhookModule {}
