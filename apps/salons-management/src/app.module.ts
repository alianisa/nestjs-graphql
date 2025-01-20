import { Module } from "@nestjs/common";
import { CacheModule } from "@nestjs/cache-manager";
import { redisStore } from "cache-manager-ioredis-yet";
import { ApiKeyModule } from "./apiKey/apiKey.module";
import { AppointmentModule } from "./appointment/appointment.module";
import { AttendanceModule } from "./attendance/attendance.module";
import { ChatMessageModule } from "./chatMessage/chatMessage.module";
import { ChatModule } from "./chat/chat.module";
import { ConversationModule } from "./conversation/conversation.module";
import { DepositModule } from "./deposit/deposit.module";
import { DiscountModule } from "./discount/discount.module";
import { EmployeeDailyStatModule } from "./employeeDailyStat/employeeDailyStat.module";
import { EmployeeStatModule } from "./employeeStat/employeeStat.module";
import { EmployeeTaskModule } from "./employeeTask/employeeTask.module";
import { EmployeeWorkScheduleModule } from "./employeeWorkSchedule/employeeWorkSchedule.module";
import { LoyaltyProgramModule } from "./loyaltyProgram/loyaltyProgram.module";
import { LoyaltyTransactionModule } from "./loyaltyTransaction/loyaltyTransaction.module";
import { MetricModule } from "./metric/metric.module";
import { MobilePaymentProviderModule } from "./mobilePaymentProvider/mobilePaymentProvider.module";
import { NotificationModule } from "./notification/notification.module";
import { OrderImageModule } from "./orderImage/orderImage.module";
import { OrderModule } from "./order/order.module";
import { PaymentModule } from "./payment/payment.module";
import { PayrollModule } from "./payroll/payroll.module";
import { PromocodeModule } from "./promocode/promocode.module";
import { QueueModule } from "./queue/queue.module";
import { SalonAccountModule } from "./salonAccount/salonAccount.module";
import { SalonCategoryModule } from "./salonCategory/salonCategory.module";
import { SalonRatingLikeModule } from "./salonRatingLike/salonRatingLike.module";
import { SalonRatingModule } from "./salonRating/salonRating.module";
import { SalonServiceCategoryModule } from "./salonServiceCategory/salonServiceCategory.module";
import { SalonServiceModule } from "./salonService/salonService.module";
import { SalonModule } from "./salon/salon.module";
import { ScheduleModule } from "./schedule/schedule.module";
import { TimeSlotModule } from "./timeSlot/timeSlot.module";
import { TransactionModule } from "./transaction/transaction.module";
import { UserAccountModule } from "./userAccount/userAccount.module";
import { UserActivityModule } from "./userActivity/userActivity.module";
import { UserAddressModule } from "./userAddress/userAddress.module";
import { UserBankCardModule } from "./userBankCard/userBankCard.module";
import { UserFavoriteMasterModule } from "./userFavoriteMaster/userFavoriteMaster.module";
import { UserFavoriteSalonModule } from "./userFavoriteSalon/userFavoriteSalon.module";
import { UserGenderModule } from "./userGender/userGender.module";
import { UserNotificationSettingModule } from "./userNotificationSetting/userNotificationSetting.module";
import { UserProfileModule } from "./userProfile/userProfile.module";
import { UserRatingModule } from "./userRating/userRating.module";
import { VerificationCodeModule } from "./verificationCode/verificationCode.module";
import { WebhookModule } from "./webhook/webhook.module";
import { UserModule } from "./user/user.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  controllers: [],
  imports: [
    ACLModule,
    AuthModule,
    ApiKeyModule,
    AppointmentModule,
    AttendanceModule,
    ChatMessageModule,
    ChatModule,
    ConversationModule,
    DepositModule,
    DiscountModule,
    EmployeeDailyStatModule,
    EmployeeStatModule,
    EmployeeTaskModule,
    EmployeeWorkScheduleModule,
    LoyaltyProgramModule,
    LoyaltyTransactionModule,
    MetricModule,
    MobilePaymentProviderModule,
    NotificationModule,
    OrderImageModule,
    OrderModule,
    PaymentModule,
    PayrollModule,
    PromocodeModule,
    QueueModule,
    SalonAccountModule,
    SalonCategoryModule,
    SalonRatingLikeModule,
    SalonRatingModule,
    SalonServiceCategoryModule,
    SalonServiceModule,
    SalonModule,
    ScheduleModule,
    TimeSlotModule,
    TransactionModule,
    UserAccountModule,
    UserActivityModule,
    UserAddressModule,
    UserBankCardModule,
    UserFavoriteMasterModule,
    UserFavoriteSalonModule,
    UserGenderModule,
    UserNotificationSettingModule,
    UserProfileModule,
    UserRatingModule,
    VerificationCodeModule,
    WebhookModule,
    UserModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
    CacheModule.registerAsync({
      isGlobal: true,
      imports: [ConfigModule],

      useFactory: async (configService: ConfigService) => {
        const host = configService.get("REDIS_HOST");
        const port = configService.get("REDIS_PORT");
        const username = configService.get("REDIS_USERNAME");
        const password = configService.get("REDIS_PASSWORD");
        const ttl = configService.get("REDIS_TTL", 5000);

        return {
          store: await redisStore({
            host: host,
            port: port,
            username: username,
            password: password,
            ttl: ttl,
          }),
        };
      },

      inject: [ConfigService],
    }),
  ],
  providers: [],
})
export class AppModule {}
