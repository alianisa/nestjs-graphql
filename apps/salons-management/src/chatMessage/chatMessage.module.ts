import { Module } from "@nestjs/common";
import { ChatMessageModuleBase } from "./base/chatMessage.module.base";
import { ChatMessageService } from "./chatMessage.service";
import { ChatMessageController } from "./chatMessage.controller";
import { ChatMessageGrpcController } from "./chatMessage.grpc.controller";
import { ChatMessageResolver } from "./chatMessage.resolver";

@Module({
  imports: [ChatMessageModuleBase],
  controllers: [ChatMessageController, ChatMessageGrpcController],
  providers: [ChatMessageService, ChatMessageResolver],
  exports: [ChatMessageService],
})
export class ChatMessageModule {}
