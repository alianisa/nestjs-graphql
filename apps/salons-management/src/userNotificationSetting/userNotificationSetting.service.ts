import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserNotificationSettingServiceBase } from "./base/userNotificationSetting.service.base";

@Injectable()
export class UserNotificationSettingService extends UserNotificationSettingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
