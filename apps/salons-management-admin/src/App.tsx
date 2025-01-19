import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { AuditLogEntryList } from "./auditLogEntry/AuditLogEntryList";
import { AuditLogEntryCreate } from "./auditLogEntry/AuditLogEntryCreate";
import { AuditLogEntryEdit } from "./auditLogEntry/AuditLogEntryEdit";
import { AuditLogEntryShow } from "./auditLogEntry/AuditLogEntryShow";
import { FlowStateList } from "./flowState/FlowStateList";
import { FlowStateCreate } from "./flowState/FlowStateCreate";
import { FlowStateEdit } from "./flowState/FlowStateEdit";
import { FlowStateShow } from "./flowState/FlowStateShow";
import { IdentityList } from "./identity/IdentityList";
import { IdentityCreate } from "./identity/IdentityCreate";
import { IdentityEdit } from "./identity/IdentityEdit";
import { IdentityShow } from "./identity/IdentityShow";
import { InstanceList } from "./instance/InstanceList";
import { InstanceCreate } from "./instance/InstanceCreate";
import { InstanceEdit } from "./instance/InstanceEdit";
import { InstanceShow } from "./instance/InstanceShow";
import { MfaAmrClaimList } from "./mfaAmrClaim/MfaAmrClaimList";
import { MfaAmrClaimCreate } from "./mfaAmrClaim/MfaAmrClaimCreate";
import { MfaAmrClaimEdit } from "./mfaAmrClaim/MfaAmrClaimEdit";
import { MfaAmrClaimShow } from "./mfaAmrClaim/MfaAmrClaimShow";
import { MfaChallengeList } from "./mfaChallenge/MfaChallengeList";
import { MfaChallengeCreate } from "./mfaChallenge/MfaChallengeCreate";
import { MfaChallengeEdit } from "./mfaChallenge/MfaChallengeEdit";
import { MfaChallengeShow } from "./mfaChallenge/MfaChallengeShow";
import { MfaFactorList } from "./mfaFactor/MfaFactorList";
import { MfaFactorCreate } from "./mfaFactor/MfaFactorCreate";
import { MfaFactorEdit } from "./mfaFactor/MfaFactorEdit";
import { MfaFactorShow } from "./mfaFactor/MfaFactorShow";
import { OneTimeTokenList } from "./oneTimeToken/OneTimeTokenList";
import { OneTimeTokenCreate } from "./oneTimeToken/OneTimeTokenCreate";
import { OneTimeTokenEdit } from "./oneTimeToken/OneTimeTokenEdit";
import { OneTimeTokenShow } from "./oneTimeToken/OneTimeTokenShow";
import { RefreshTokenList } from "./refreshToken/RefreshTokenList";
import { RefreshTokenCreate } from "./refreshToken/RefreshTokenCreate";
import { RefreshTokenEdit } from "./refreshToken/RefreshTokenEdit";
import { RefreshTokenShow } from "./refreshToken/RefreshTokenShow";
import { SamlProviderList } from "./samlProvider/SamlProviderList";
import { SamlProviderCreate } from "./samlProvider/SamlProviderCreate";
import { SamlProviderEdit } from "./samlProvider/SamlProviderEdit";
import { SamlProviderShow } from "./samlProvider/SamlProviderShow";
import { SamlRelayStateList } from "./samlRelayState/SamlRelayStateList";
import { SamlRelayStateCreate } from "./samlRelayState/SamlRelayStateCreate";
import { SamlRelayStateEdit } from "./samlRelayState/SamlRelayStateEdit";
import { SamlRelayStateShow } from "./samlRelayState/SamlRelayStateShow";
import { SchemaMigrationList } from "./schemaMigration/SchemaMigrationList";
import { SchemaMigrationCreate } from "./schemaMigration/SchemaMigrationCreate";
import { SchemaMigrationEdit } from "./schemaMigration/SchemaMigrationEdit";
import { SchemaMigrationShow } from "./schemaMigration/SchemaMigrationShow";
import { SessionList } from "./session/SessionList";
import { SessionCreate } from "./session/SessionCreate";
import { SessionEdit } from "./session/SessionEdit";
import { SessionShow } from "./session/SessionShow";
import { SsoDomainList } from "./ssoDomain/SsoDomainList";
import { SsoDomainCreate } from "./ssoDomain/SsoDomainCreate";
import { SsoDomainEdit } from "./ssoDomain/SsoDomainEdit";
import { SsoDomainShow } from "./ssoDomain/SsoDomainShow";
import { SsoProviderList } from "./ssoProvider/SsoProviderList";
import { SsoProviderCreate } from "./ssoProvider/SsoProviderCreate";
import { SsoProviderEdit } from "./ssoProvider/SsoProviderEdit";
import { SsoProviderShow } from "./ssoProvider/SsoProviderShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { ApiKeyList } from "./apiKey/ApiKeyList";
import { ApiKeyCreate } from "./apiKey/ApiKeyCreate";
import { ApiKeyEdit } from "./apiKey/ApiKeyEdit";
import { ApiKeyShow } from "./apiKey/ApiKeyShow";
import { AppointmentList } from "./appointment/AppointmentList";
import { AppointmentCreate } from "./appointment/AppointmentCreate";
import { AppointmentEdit } from "./appointment/AppointmentEdit";
import { AppointmentShow } from "./appointment/AppointmentShow";
import { AttendanceList } from "./attendance/AttendanceList";
import { AttendanceCreate } from "./attendance/AttendanceCreate";
import { AttendanceEdit } from "./attendance/AttendanceEdit";
import { AttendanceShow } from "./attendance/AttendanceShow";
import { ChatMessageList } from "./chatMessage/ChatMessageList";
import { ChatMessageCreate } from "./chatMessage/ChatMessageCreate";
import { ChatMessageEdit } from "./chatMessage/ChatMessageEdit";
import { ChatMessageShow } from "./chatMessage/ChatMessageShow";
import { ChatList } from "./chat/ChatList";
import { ChatCreate } from "./chat/ChatCreate";
import { ChatEdit } from "./chat/ChatEdit";
import { ChatShow } from "./chat/ChatShow";
import { ConversationList } from "./conversation/ConversationList";
import { ConversationCreate } from "./conversation/ConversationCreate";
import { ConversationEdit } from "./conversation/ConversationEdit";
import { ConversationShow } from "./conversation/ConversationShow";
import { DepositList } from "./deposit/DepositList";
import { DepositCreate } from "./deposit/DepositCreate";
import { DepositEdit } from "./deposit/DepositEdit";
import { DepositShow } from "./deposit/DepositShow";
import { DiscountList } from "./discount/DiscountList";
import { DiscountCreate } from "./discount/DiscountCreate";
import { DiscountEdit } from "./discount/DiscountEdit";
import { DiscountShow } from "./discount/DiscountShow";
import { EmployeeDailyStatList } from "./employeeDailyStat/EmployeeDailyStatList";
import { EmployeeDailyStatCreate } from "./employeeDailyStat/EmployeeDailyStatCreate";
import { EmployeeDailyStatEdit } from "./employeeDailyStat/EmployeeDailyStatEdit";
import { EmployeeDailyStatShow } from "./employeeDailyStat/EmployeeDailyStatShow";
import { EmployeeStatList } from "./employeeStat/EmployeeStatList";
import { EmployeeStatCreate } from "./employeeStat/EmployeeStatCreate";
import { EmployeeStatEdit } from "./employeeStat/EmployeeStatEdit";
import { EmployeeStatShow } from "./employeeStat/EmployeeStatShow";
import { EmployeeTaskList } from "./employeeTask/EmployeeTaskList";
import { EmployeeTaskCreate } from "./employeeTask/EmployeeTaskCreate";
import { EmployeeTaskEdit } from "./employeeTask/EmployeeTaskEdit";
import { EmployeeTaskShow } from "./employeeTask/EmployeeTaskShow";
import { EmployeeWorkScheduleList } from "./employeeWorkSchedule/EmployeeWorkScheduleList";
import { EmployeeWorkScheduleCreate } from "./employeeWorkSchedule/EmployeeWorkScheduleCreate";
import { EmployeeWorkScheduleEdit } from "./employeeWorkSchedule/EmployeeWorkScheduleEdit";
import { EmployeeWorkScheduleShow } from "./employeeWorkSchedule/EmployeeWorkScheduleShow";
import { ErrorLogList } from "./errorLog/ErrorLogList";
import { ErrorLogCreate } from "./errorLog/ErrorLogCreate";
import { ErrorLogEdit } from "./errorLog/ErrorLogEdit";
import { ErrorLogShow } from "./errorLog/ErrorLogShow";
import { LoyaltyProgramList } from "./loyaltyProgram/LoyaltyProgramList";
import { LoyaltyProgramCreate } from "./loyaltyProgram/LoyaltyProgramCreate";
import { LoyaltyProgramEdit } from "./loyaltyProgram/LoyaltyProgramEdit";
import { LoyaltyProgramShow } from "./loyaltyProgram/LoyaltyProgramShow";
import { LoyaltyTransactionList } from "./loyaltyTransaction/LoyaltyTransactionList";
import { LoyaltyTransactionCreate } from "./loyaltyTransaction/LoyaltyTransactionCreate";
import { LoyaltyTransactionEdit } from "./loyaltyTransaction/LoyaltyTransactionEdit";
import { LoyaltyTransactionShow } from "./loyaltyTransaction/LoyaltyTransactionShow";
import { MetricList } from "./metric/MetricList";
import { MetricCreate } from "./metric/MetricCreate";
import { MetricEdit } from "./metric/MetricEdit";
import { MetricShow } from "./metric/MetricShow";
import { MobilePaymentProviderList } from "./mobilePaymentProvider/MobilePaymentProviderList";
import { MobilePaymentProviderCreate } from "./mobilePaymentProvider/MobilePaymentProviderCreate";
import { MobilePaymentProviderEdit } from "./mobilePaymentProvider/MobilePaymentProviderEdit";
import { MobilePaymentProviderShow } from "./mobilePaymentProvider/MobilePaymentProviderShow";
import { NotificationList } from "./notification/NotificationList";
import { NotificationCreate } from "./notification/NotificationCreate";
import { NotificationEdit } from "./notification/NotificationEdit";
import { NotificationShow } from "./notification/NotificationShow";
import { OrderImageList } from "./orderImage/OrderImageList";
import { OrderImageCreate } from "./orderImage/OrderImageCreate";
import { OrderImageEdit } from "./orderImage/OrderImageEdit";
import { OrderImageShow } from "./orderImage/OrderImageShow";
import { OrderList } from "./order/OrderList";
import { OrderCreate } from "./order/OrderCreate";
import { OrderEdit } from "./order/OrderEdit";
import { OrderShow } from "./order/OrderShow";
import { PaymentList } from "./payment/PaymentList";
import { PaymentCreate } from "./payment/PaymentCreate";
import { PaymentEdit } from "./payment/PaymentEdit";
import { PaymentShow } from "./payment/PaymentShow";
import { PayrollList } from "./payroll/PayrollList";
import { PayrollCreate } from "./payroll/PayrollCreate";
import { PayrollEdit } from "./payroll/PayrollEdit";
import { PayrollShow } from "./payroll/PayrollShow";
import { PromocodeList } from "./promocode/PromocodeList";
import { PromocodeCreate } from "./promocode/PromocodeCreate";
import { PromocodeEdit } from "./promocode/PromocodeEdit";
import { PromocodeShow } from "./promocode/PromocodeShow";
import { QueueList } from "./queue/QueueList";
import { QueueCreate } from "./queue/QueueCreate";
import { QueueEdit } from "./queue/QueueEdit";
import { QueueShow } from "./queue/QueueShow";
import { SalonAccountList } from "./salonAccount/SalonAccountList";
import { SalonAccountCreate } from "./salonAccount/SalonAccountCreate";
import { SalonAccountEdit } from "./salonAccount/SalonAccountEdit";
import { SalonAccountShow } from "./salonAccount/SalonAccountShow";
import { SalonCategoryList } from "./salonCategory/SalonCategoryList";
import { SalonCategoryCreate } from "./salonCategory/SalonCategoryCreate";
import { SalonCategoryEdit } from "./salonCategory/SalonCategoryEdit";
import { SalonCategoryShow } from "./salonCategory/SalonCategoryShow";
import { SalonRatingLikeList } from "./salonRatingLike/SalonRatingLikeList";
import { SalonRatingLikeCreate } from "./salonRatingLike/SalonRatingLikeCreate";
import { SalonRatingLikeEdit } from "./salonRatingLike/SalonRatingLikeEdit";
import { SalonRatingLikeShow } from "./salonRatingLike/SalonRatingLikeShow";
import { SalonRatingList } from "./salonRating/SalonRatingList";
import { SalonRatingCreate } from "./salonRating/SalonRatingCreate";
import { SalonRatingEdit } from "./salonRating/SalonRatingEdit";
import { SalonRatingShow } from "./salonRating/SalonRatingShow";
import { SalonServiceCategoryList } from "./salonServiceCategory/SalonServiceCategoryList";
import { SalonServiceCategoryCreate } from "./salonServiceCategory/SalonServiceCategoryCreate";
import { SalonServiceCategoryEdit } from "./salonServiceCategory/SalonServiceCategoryEdit";
import { SalonServiceCategoryShow } from "./salonServiceCategory/SalonServiceCategoryShow";
import { SalonServiceList } from "./salonService/SalonServiceList";
import { SalonServiceCreate } from "./salonService/SalonServiceCreate";
import { SalonServiceEdit } from "./salonService/SalonServiceEdit";
import { SalonServiceShow } from "./salonService/SalonServiceShow";
import { SalonList } from "./salon/SalonList";
import { SalonCreate } from "./salon/SalonCreate";
import { SalonEdit } from "./salon/SalonEdit";
import { SalonShow } from "./salon/SalonShow";
import { SalonstestList } from "./salonstest/SalonstestList";
import { SalonstestCreate } from "./salonstest/SalonstestCreate";
import { SalonstestEdit } from "./salonstest/SalonstestEdit";
import { SalonstestShow } from "./salonstest/SalonstestShow";
import { ScheduleList } from "./schedule/ScheduleList";
import { ScheduleCreate } from "./schedule/ScheduleCreate";
import { ScheduleEdit } from "./schedule/ScheduleEdit";
import { ScheduleShow } from "./schedule/ScheduleShow";
import { TemplateList } from "./template/TemplateList";
import { TemplateCreate } from "./template/TemplateCreate";
import { TemplateEdit } from "./template/TemplateEdit";
import { TemplateShow } from "./template/TemplateShow";
import { TimeSlotList } from "./timeSlot/TimeSlotList";
import { TimeSlotCreate } from "./timeSlot/TimeSlotCreate";
import { TimeSlotEdit } from "./timeSlot/TimeSlotEdit";
import { TimeSlotShow } from "./timeSlot/TimeSlotShow";
import { TransactionList } from "./transaction/TransactionList";
import { TransactionCreate } from "./transaction/TransactionCreate";
import { TransactionEdit } from "./transaction/TransactionEdit";
import { TransactionShow } from "./transaction/TransactionShow";
import { UserAccountList } from "./userAccount/UserAccountList";
import { UserAccountCreate } from "./userAccount/UserAccountCreate";
import { UserAccountEdit } from "./userAccount/UserAccountEdit";
import { UserAccountShow } from "./userAccount/UserAccountShow";
import { UserActivityList } from "./userActivity/UserActivityList";
import { UserActivityCreate } from "./userActivity/UserActivityCreate";
import { UserActivityEdit } from "./userActivity/UserActivityEdit";
import { UserActivityShow } from "./userActivity/UserActivityShow";
import { UserAddressList } from "./userAddress/UserAddressList";
import { UserAddressCreate } from "./userAddress/UserAddressCreate";
import { UserAddressEdit } from "./userAddress/UserAddressEdit";
import { UserAddressShow } from "./userAddress/UserAddressShow";
import { UserBankCardList } from "./userBankCard/UserBankCardList";
import { UserBankCardCreate } from "./userBankCard/UserBankCardCreate";
import { UserBankCardEdit } from "./userBankCard/UserBankCardEdit";
import { UserBankCardShow } from "./userBankCard/UserBankCardShow";
import { UserFavoriteMasterList } from "./userFavoriteMaster/UserFavoriteMasterList";
import { UserFavoriteMasterCreate } from "./userFavoriteMaster/UserFavoriteMasterCreate";
import { UserFavoriteMasterEdit } from "./userFavoriteMaster/UserFavoriteMasterEdit";
import { UserFavoriteMasterShow } from "./userFavoriteMaster/UserFavoriteMasterShow";
import { UserFavoriteSalonList } from "./userFavoriteSalon/UserFavoriteSalonList";
import { UserFavoriteSalonCreate } from "./userFavoriteSalon/UserFavoriteSalonCreate";
import { UserFavoriteSalonEdit } from "./userFavoriteSalon/UserFavoriteSalonEdit";
import { UserFavoriteSalonShow } from "./userFavoriteSalon/UserFavoriteSalonShow";
import { UserGenderList } from "./userGender/UserGenderList";
import { UserGenderCreate } from "./userGender/UserGenderCreate";
import { UserGenderEdit } from "./userGender/UserGenderEdit";
import { UserGenderShow } from "./userGender/UserGenderShow";
import { UserNotificationSettingList } from "./userNotificationSetting/UserNotificationSettingList";
import { UserNotificationSettingCreate } from "./userNotificationSetting/UserNotificationSettingCreate";
import { UserNotificationSettingEdit } from "./userNotificationSetting/UserNotificationSettingEdit";
import { UserNotificationSettingShow } from "./userNotificationSetting/UserNotificationSettingShow";
import { UserProfileList } from "./userProfile/UserProfileList";
import { UserProfileCreate } from "./userProfile/UserProfileCreate";
import { UserProfileEdit } from "./userProfile/UserProfileEdit";
import { UserProfileShow } from "./userProfile/UserProfileShow";
import { UserRatingList } from "./userRating/UserRatingList";
import { UserRatingCreate } from "./userRating/UserRatingCreate";
import { UserRatingEdit } from "./userRating/UserRatingEdit";
import { UserRatingShow } from "./userRating/UserRatingShow";
import { VerificationCodeList } from "./verificationCode/VerificationCodeList";
import { VerificationCodeCreate } from "./verificationCode/VerificationCodeCreate";
import { VerificationCodeEdit } from "./verificationCode/VerificationCodeEdit";
import { VerificationCodeShow } from "./verificationCode/VerificationCodeShow";
import { WebhookList } from "./webhook/WebhookList";
import { WebhookCreate } from "./webhook/WebhookCreate";
import { WebhookEdit } from "./webhook/WebhookEdit";
import { WebhookShow } from "./webhook/WebhookShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"salons management"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="AuditLogEntry"
          list={AuditLogEntryList}
          edit={AuditLogEntryEdit}
          create={AuditLogEntryCreate}
          show={AuditLogEntryShow}
        />
        <Resource
          name="FlowState"
          list={FlowStateList}
          edit={FlowStateEdit}
          create={FlowStateCreate}
          show={FlowStateShow}
        />
        <Resource
          name="Identity"
          list={IdentityList}
          edit={IdentityEdit}
          create={IdentityCreate}
          show={IdentityShow}
        />
        <Resource
          name="Instance"
          list={InstanceList}
          edit={InstanceEdit}
          create={InstanceCreate}
          show={InstanceShow}
        />
        <Resource
          name="MfaAmrClaim"
          list={MfaAmrClaimList}
          edit={MfaAmrClaimEdit}
          create={MfaAmrClaimCreate}
          show={MfaAmrClaimShow}
        />
        <Resource
          name="MfaChallenge"
          list={MfaChallengeList}
          edit={MfaChallengeEdit}
          create={MfaChallengeCreate}
          show={MfaChallengeShow}
        />
        <Resource
          name="MfaFactor"
          list={MfaFactorList}
          edit={MfaFactorEdit}
          create={MfaFactorCreate}
          show={MfaFactorShow}
        />
        <Resource
          name="OneTimeToken"
          list={OneTimeTokenList}
          edit={OneTimeTokenEdit}
          create={OneTimeTokenCreate}
          show={OneTimeTokenShow}
        />
        <Resource
          name="RefreshToken"
          list={RefreshTokenList}
          edit={RefreshTokenEdit}
          create={RefreshTokenCreate}
          show={RefreshTokenShow}
        />
        <Resource
          name="SamlProvider"
          list={SamlProviderList}
          edit={SamlProviderEdit}
          create={SamlProviderCreate}
          show={SamlProviderShow}
        />
        <Resource
          name="SamlRelayState"
          list={SamlRelayStateList}
          edit={SamlRelayStateEdit}
          create={SamlRelayStateCreate}
          show={SamlRelayStateShow}
        />
        <Resource
          name="SchemaMigration"
          list={SchemaMigrationList}
          edit={SchemaMigrationEdit}
          create={SchemaMigrationCreate}
          show={SchemaMigrationShow}
        />
        <Resource
          name="Session"
          list={SessionList}
          edit={SessionEdit}
          create={SessionCreate}
          show={SessionShow}
        />
        <Resource
          name="SsoDomain"
          list={SsoDomainList}
          edit={SsoDomainEdit}
          create={SsoDomainCreate}
          show={SsoDomainShow}
        />
        <Resource
          name="SsoProvider"
          list={SsoProviderList}
          edit={SsoProviderEdit}
          create={SsoProviderCreate}
          show={SsoProviderShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="ApiKey"
          list={ApiKeyList}
          edit={ApiKeyEdit}
          create={ApiKeyCreate}
          show={ApiKeyShow}
        />
        <Resource
          name="Appointment"
          list={AppointmentList}
          edit={AppointmentEdit}
          create={AppointmentCreate}
          show={AppointmentShow}
        />
        <Resource
          name="Attendance"
          list={AttendanceList}
          edit={AttendanceEdit}
          create={AttendanceCreate}
          show={AttendanceShow}
        />
        <Resource
          name="ChatMessage"
          list={ChatMessageList}
          edit={ChatMessageEdit}
          create={ChatMessageCreate}
          show={ChatMessageShow}
        />
        <Resource
          name="Chat"
          list={ChatList}
          edit={ChatEdit}
          create={ChatCreate}
          show={ChatShow}
        />
        <Resource
          name="Conversation"
          list={ConversationList}
          edit={ConversationEdit}
          create={ConversationCreate}
          show={ConversationShow}
        />
        <Resource
          name="Deposit"
          list={DepositList}
          edit={DepositEdit}
          create={DepositCreate}
          show={DepositShow}
        />
        <Resource
          name="Discount"
          list={DiscountList}
          edit={DiscountEdit}
          create={DiscountCreate}
          show={DiscountShow}
        />
        <Resource
          name="EmployeeDailyStat"
          list={EmployeeDailyStatList}
          edit={EmployeeDailyStatEdit}
          create={EmployeeDailyStatCreate}
          show={EmployeeDailyStatShow}
        />
        <Resource
          name="EmployeeStat"
          list={EmployeeStatList}
          edit={EmployeeStatEdit}
          create={EmployeeStatCreate}
          show={EmployeeStatShow}
        />
        <Resource
          name="EmployeeTask"
          list={EmployeeTaskList}
          edit={EmployeeTaskEdit}
          create={EmployeeTaskCreate}
          show={EmployeeTaskShow}
        />
        <Resource
          name="EmployeeWorkSchedule"
          list={EmployeeWorkScheduleList}
          edit={EmployeeWorkScheduleEdit}
          create={EmployeeWorkScheduleCreate}
          show={EmployeeWorkScheduleShow}
        />
        <Resource
          name="ErrorLog"
          list={ErrorLogList}
          edit={ErrorLogEdit}
          create={ErrorLogCreate}
          show={ErrorLogShow}
        />
        <Resource
          name="LoyaltyProgram"
          list={LoyaltyProgramList}
          edit={LoyaltyProgramEdit}
          create={LoyaltyProgramCreate}
          show={LoyaltyProgramShow}
        />
        <Resource
          name="LoyaltyTransaction"
          list={LoyaltyTransactionList}
          edit={LoyaltyTransactionEdit}
          create={LoyaltyTransactionCreate}
          show={LoyaltyTransactionShow}
        />
        <Resource
          name="Metric"
          list={MetricList}
          edit={MetricEdit}
          create={MetricCreate}
          show={MetricShow}
        />
        <Resource
          name="MobilePaymentProvider"
          list={MobilePaymentProviderList}
          edit={MobilePaymentProviderEdit}
          create={MobilePaymentProviderCreate}
          show={MobilePaymentProviderShow}
        />
        <Resource
          name="Notification"
          list={NotificationList}
          edit={NotificationEdit}
          create={NotificationCreate}
          show={NotificationShow}
        />
        <Resource
          name="OrderImage"
          list={OrderImageList}
          edit={OrderImageEdit}
          create={OrderImageCreate}
          show={OrderImageShow}
        />
        <Resource
          name="Order"
          list={OrderList}
          edit={OrderEdit}
          create={OrderCreate}
          show={OrderShow}
        />
        <Resource
          name="Payment"
          list={PaymentList}
          edit={PaymentEdit}
          create={PaymentCreate}
          show={PaymentShow}
        />
        <Resource
          name="Payroll"
          list={PayrollList}
          edit={PayrollEdit}
          create={PayrollCreate}
          show={PayrollShow}
        />
        <Resource
          name="Promocode"
          list={PromocodeList}
          edit={PromocodeEdit}
          create={PromocodeCreate}
          show={PromocodeShow}
        />
        <Resource
          name="Queue"
          list={QueueList}
          edit={QueueEdit}
          create={QueueCreate}
          show={QueueShow}
        />
        <Resource
          name="SalonAccount"
          list={SalonAccountList}
          edit={SalonAccountEdit}
          create={SalonAccountCreate}
          show={SalonAccountShow}
        />
        <Resource
          name="SalonCategory"
          list={SalonCategoryList}
          edit={SalonCategoryEdit}
          create={SalonCategoryCreate}
          show={SalonCategoryShow}
        />
        <Resource
          name="SalonRatingLike"
          list={SalonRatingLikeList}
          edit={SalonRatingLikeEdit}
          create={SalonRatingLikeCreate}
          show={SalonRatingLikeShow}
        />
        <Resource
          name="SalonRating"
          list={SalonRatingList}
          edit={SalonRatingEdit}
          create={SalonRatingCreate}
          show={SalonRatingShow}
        />
        <Resource
          name="SalonServiceCategory"
          list={SalonServiceCategoryList}
          edit={SalonServiceCategoryEdit}
          create={SalonServiceCategoryCreate}
          show={SalonServiceCategoryShow}
        />
        <Resource
          name="SalonService"
          list={SalonServiceList}
          edit={SalonServiceEdit}
          create={SalonServiceCreate}
          show={SalonServiceShow}
        />
        <Resource
          name="Salon"
          list={SalonList}
          edit={SalonEdit}
          create={SalonCreate}
          show={SalonShow}
        />
        <Resource
          name="Salonstest"
          list={SalonstestList}
          edit={SalonstestEdit}
          create={SalonstestCreate}
          show={SalonstestShow}
        />
        <Resource
          name="Schedule"
          list={ScheduleList}
          edit={ScheduleEdit}
          create={ScheduleCreate}
          show={ScheduleShow}
        />
        <Resource
          name="Template"
          list={TemplateList}
          edit={TemplateEdit}
          create={TemplateCreate}
          show={TemplateShow}
        />
        <Resource
          name="TimeSlot"
          list={TimeSlotList}
          edit={TimeSlotEdit}
          create={TimeSlotCreate}
          show={TimeSlotShow}
        />
        <Resource
          name="Transaction"
          list={TransactionList}
          edit={TransactionEdit}
          create={TransactionCreate}
          show={TransactionShow}
        />
        <Resource
          name="UserAccount"
          list={UserAccountList}
          edit={UserAccountEdit}
          create={UserAccountCreate}
          show={UserAccountShow}
        />
        <Resource
          name="UserActivity"
          list={UserActivityList}
          edit={UserActivityEdit}
          create={UserActivityCreate}
          show={UserActivityShow}
        />
        <Resource
          name="UserAddress"
          list={UserAddressList}
          edit={UserAddressEdit}
          create={UserAddressCreate}
          show={UserAddressShow}
        />
        <Resource
          name="UserBankCard"
          list={UserBankCardList}
          edit={UserBankCardEdit}
          create={UserBankCardCreate}
          show={UserBankCardShow}
        />
        <Resource
          name="UserFavoriteMaster"
          list={UserFavoriteMasterList}
          edit={UserFavoriteMasterEdit}
          create={UserFavoriteMasterCreate}
          show={UserFavoriteMasterShow}
        />
        <Resource
          name="UserFavoriteSalon"
          list={UserFavoriteSalonList}
          edit={UserFavoriteSalonEdit}
          create={UserFavoriteSalonCreate}
          show={UserFavoriteSalonShow}
        />
        <Resource
          name="UserGender"
          list={UserGenderList}
          edit={UserGenderEdit}
          create={UserGenderCreate}
          show={UserGenderShow}
        />
        <Resource
          name="UserNotificationSetting"
          list={UserNotificationSettingList}
          edit={UserNotificationSettingEdit}
          create={UserNotificationSettingCreate}
          show={UserNotificationSettingShow}
        />
        <Resource
          name="UserProfile"
          list={UserProfileList}
          edit={UserProfileEdit}
          create={UserProfileCreate}
          show={UserProfileShow}
        />
        <Resource
          name="UserRating"
          list={UserRatingList}
          edit={UserRatingEdit}
          create={UserRatingCreate}
          show={UserRatingShow}
        />
        <Resource
          name="VerificationCode"
          list={VerificationCodeList}
          edit={VerificationCodeEdit}
          create={VerificationCodeCreate}
          show={VerificationCodeShow}
        />
        <Resource
          name="Webhook"
          list={WebhookList}
          edit={WebhookEdit}
          create={WebhookCreate}
          show={WebhookShow}
        />
      </Admin>
    </div>
  );
};

export default App;
