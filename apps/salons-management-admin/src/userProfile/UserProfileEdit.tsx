import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  DateTimeInput,
  BooleanInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { AppointmentTitle } from "../appointment/AppointmentTitle";
import { AttendanceTitle } from "../attendance/AttendanceTitle";
import { ChatMessageTitle } from "../chatMessage/ChatMessageTitle";
import { ChatTitle } from "../chat/ChatTitle";
import { EmployeeDailyStatTitle } from "../employeeDailyStat/EmployeeDailyStatTitle";
import { EmployeeStatTitle } from "../employeeStat/EmployeeStatTitle";
import { EmployeeTaskTitle } from "../employeeTask/EmployeeTaskTitle";
import { EmployeeWorkScheduleTitle } from "../employeeWorkSchedule/EmployeeWorkScheduleTitle";
import { LoyaltyTransactionTitle } from "../loyaltyTransaction/LoyaltyTransactionTitle";
import { NotificationTitle } from "../notification/NotificationTitle";
import { OrderTitle } from "../order/OrderTitle";
import { PayrollTitle } from "../payroll/PayrollTitle";
import { QueueTitle } from "../queue/QueueTitle";
import { SalonAccountTitle } from "../salonAccount/SalonAccountTitle";
import { SalonRatingLikeTitle } from "../salonRatingLike/SalonRatingLikeTitle";
import { SalonRatingTitle } from "../salonRating/SalonRatingTitle";
import { SalonTitle } from "../salon/SalonTitle";
import { ScheduleTitle } from "../schedule/ScheduleTitle";
import { TimeSlotTitle } from "../timeSlot/TimeSlotTitle";
import { UserAccountTitle } from "../userAccount/UserAccountTitle";
import { UserAddressTitle } from "../userAddress/UserAddressTitle";
import { UserBankCardTitle } from "../userBankCard/UserBankCardTitle";
import { UserFavoriteMasterTitle } from "../userFavoriteMaster/UserFavoriteMasterTitle";
import { UserFavoriteSalonTitle } from "../userFavoriteSalon/UserFavoriteSalonTitle";
import { UserGenderTitle } from "../userGender/UserGenderTitle";
import { UserNotificationSettingTitle } from "../userNotificationSetting/UserNotificationSettingTitle";
import { UserRatingTitle } from "../userRating/UserRatingTitle";

export const UserProfileEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput source="appointments" reference="Appointment">
          <SelectArrayInput
            optionText={AppointmentTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput source="attendances" reference="Attendance">
          <SelectArrayInput
            optionText={AttendanceTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="Avatar Url" source="avatarUrl" />
        <TextInput label="Bio" source="bio" />
        <ReferenceArrayInput source="chatMessages" reference="ChatMessage">
          <SelectArrayInput
            optionText={ChatMessageTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="chatsChatsUserATouserProfiles"
          reference="Chat"
        >
          <SelectArrayInput
            optionText={ChatTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="chatsChatsUserBTouserProfiles"
          reference="Chat"
        >
          <SelectArrayInput
            optionText={ChatTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="chatsChatsUsersTouserProfiles"
          reference="Chat"
        >
          <SelectArrayInput
            optionText={ChatTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <DateTimeInput label="Created At" source="createdAt" />
        <DateTimeInput label="Date Of Birth" source="dateOfBirth" />
        <DateTimeInput label="Deleted At" source="deletedAt" />
        <TextInput label="Email" source="email" />
        <ReferenceArrayInput
          source="employeeDailyStats"
          reference="EmployeeDailyStat"
        >
          <SelectArrayInput
            optionText={EmployeeDailyStatTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <DateTimeInput
          label="Employee Dismissal At"
          source="employeeDismissalAt"
        />
        <DateTimeInput
          label="Employee Employment At"
          source="employeeEmploymentAt"
        />
        <ReferenceArrayInput source="employeeStats" reference="EmployeeStat">
          <SelectArrayInput
            optionText={EmployeeStatTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput source="employeeTasks" reference="EmployeeTask">
          <SelectArrayInput
            optionText={EmployeeTaskTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="employeeWorkSchedules"
          reference="EmployeeWorkSchedule"
        >
          <SelectArrayInput
            optionText={EmployeeWorkScheduleTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="First Name" source="firstName" />
        <TextInput label="Full Name" source="fullName" />
        <BooleanInput label="Full Registered" source="fullRegistered" />
        <DateTimeInput label="Hired Date" source="hiredDate" />
        <BooleanInput label="Is Admin" source="isAdmin" />
        <BooleanInput label="Is Barber" source="isBarber" />
        <BooleanInput label="Is Employee" source="isEmployee" />
        <TextInput label="Job Title" source="jobTitle" />
        <TextInput label="Last Name" source="lastName" />
        <div />
        <NumberInput step={1} label="Loyalty Points" source="loyaltyPoints" />
        <ReferenceArrayInput
          source="loyaltyTransactions"
          reference="LoyaltyTransaction"
        >
          <SelectArrayInput
            optionText={LoyaltyTransactionTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput source="notifications" reference="Notification">
          <SelectArrayInput
            optionText={NotificationTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="ordersOrdersEmployeeIdTouserProfiles"
          reference="Order"
        >
          <SelectArrayInput
            optionText={OrderTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="ordersOrdersUserIdTouserProfiles"
          reference="Order"
        >
          <SelectArrayInput
            optionText={OrderTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput source="payroll" reference="Payroll">
          <SelectArrayInput
            optionText={PayrollTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="Phone" source="phone" />
        <ReferenceArrayInput
          source="queuesQueuesEmployeeIdTouserProfiles"
          reference="Queue"
        >
          <SelectArrayInput
            optionText={QueueTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="queuesQueuesUserIdTouserProfiles"
          reference="Queue"
        >
          <SelectArrayInput
            optionText={QueueTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="Roles" source="roles" />
        <ReferenceArrayInput source="salonAccounts" reference="SalonAccount">
          <SelectArrayInput
            optionText={SalonAccountTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="salonRatingLikesSalonRatingLikesUserIdTouserProfiles"
          reference="SalonRatingLike"
        >
          <SelectArrayInput
            optionText={SalonRatingLikeTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="salonRatingLikesSalonRatingLikesVoterIdTouserProfiles"
          reference="SalonRatingLike"
        >
          <SelectArrayInput
            optionText={SalonRatingLikeTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="salonRatingsSalonRatingsUserIdTouserProfiles"
          reference="SalonRating"
        >
          <SelectArrayInput
            optionText={SalonRatingTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="salonRatingsSalonRatingsVoterIdTouserProfiles"
          reference="SalonRating"
        >
          <SelectArrayInput
            optionText={SalonRatingTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="salonsSalonsSalonAdminIdTouserProfiles"
          reference="Salon"
        >
          <SelectArrayInput
            optionText={SalonTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceInput
          source="salonsUserProfilesSalonIdTosalons.id"
          reference="Salon"
          label="Salons User Profiles Salon Id Tosalons"
        >
          <SelectInput optionText={SalonTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="scheduleScheduleBarberIdTouserProfiles"
          reference="Schedule"
        >
          <SelectArrayInput
            optionText={ScheduleTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="scheduleScheduleUserIdTouserProfiles"
          reference="Schedule"
        >
          <SelectArrayInput
            optionText={ScheduleTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput source="timeSlots" reference="TimeSlot">
          <SelectArrayInput
            optionText={TimeSlotTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <DateTimeInput label="Updated At" source="updatedAt" />
        <ReferenceArrayInput source="userAccounts" reference="UserAccount">
          <SelectArrayInput
            optionText={UserAccountTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput source="userAddresses" reference="UserAddress">
          <SelectArrayInput
            optionText={UserAddressTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput source="userBankCards" reference="UserBankCard">
          <SelectArrayInput
            optionText={UserBankCardTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="userFavoriteMastersUserFavoriteMastersMasterIdTouserProfiles"
          reference="UserFavoriteMaster"
        >
          <SelectArrayInput
            optionText={UserFavoriteMasterTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="userFavoriteMastersUserFavoriteMastersUserIdTouserProfiles"
          reference="UserFavoriteMaster"
        >
          <SelectArrayInput
            optionText={UserFavoriteMasterTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="userFavoriteSalons"
          reference="UserFavoriteSalon"
        >
          <SelectArrayInput
            optionText={UserFavoriteSalonTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceInput
          source="userGenders.id"
          reference="UserGender"
          label="User Genders"
        >
          <SelectInput optionText={UserGenderTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="userNotificationSettings.id"
          reference="UserNotificationSetting"
          label="User Notification Settings"
        >
          <SelectInput optionText={UserNotificationSettingTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="userRatingsUserRatingsOwnerTouserProfiles"
          reference="UserRating"
        >
          <SelectArrayInput
            optionText={UserRatingTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="userRatingsUserRatingsUserIdTouserProfiles"
          reference="UserRating"
        >
          <SelectArrayInput
            optionText={UserRatingTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="Username" source="username" />
        <TextInput label="Website" source="website" />
      </SimpleForm>
    </Edit>
  );
};
