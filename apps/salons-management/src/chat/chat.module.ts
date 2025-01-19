import { Module } from "@nestjs/common";
import { ChatModuleBase } from "./base/chat.module.base";
import { ChatService } from "./chat.service";
import { ChatController } from "./chat.controller";
import { ChatGrpcController } from "./chat.grpc.controller";
import { ChatResolver } from "./chat.resolver";

@Module({
  imports: [ChatModuleBase],
  controllers: [ChatController, ChatGrpcController],
  providers: [ChatService, ChatResolver],
  exports: [ChatService],
})
export class ChatModule {}
