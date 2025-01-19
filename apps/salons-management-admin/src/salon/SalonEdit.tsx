import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  BooleanInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { AttendanceTitle } from "../attendance/AttendanceTitle";
import { EmployeeDailyStatTitle } from "../employeeDailyStat/EmployeeDailyStatTitle";
import { EmployeeStatTitle } from "../employeeStat/EmployeeStatTitle";
import { EmployeeTaskTitle } from "../employeeTask/EmployeeTaskTitle";
import { EmployeeWorkScheduleTitle } from "../employeeWorkSchedule/EmployeeWorkScheduleTitle";
import { OrderTitle } from "../order/OrderTitle";
import { QueueTitle } from "../queue/QueueTitle";
import { SalonAccountTitle } from "../salonAccount/SalonAccountTitle";
import { SalonRatingLikeTitle } from "../salonRatingLike/SalonRatingLikeTitle";
import { SalonRatingTitle } from "../salonRating/SalonRatingTitle";
import { SalonServiceTitle } from "../salonService/SalonServiceTitle";
import { TimeSlotTitle } from "../timeSlot/TimeSlotTitle";
import { UserAccountTitle } from "../userAccount/UserAccountTitle";
import { UserFavoriteSalonTitle } from "../userFavoriteSalon/UserFavoriteSalonTitle";
import { UserProfileTitle } from "../userProfile/UserProfileTitle";

export const SalonEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <BooleanInput label="Active" source="active" />
        <TextInput label="Address" source="address" />
        <ReferenceArrayInput source="attendances" reference="Attendance">
          <SelectArrayInput
            optionText={AttendanceTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="Barbers" source="barbers" />
        <div />
        <DateTimeInput label="Close Time" source="closeTime" />
        <TextInput label="Description" source="description" />
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
        <TextInput label="Images" source="images" />
        <TextInput label="Img" source="img" />
        <div />
        <div />
        <TextInput label="Logo" source="logo" />
        <TextInput label="Name" source="name" />
        <BooleanInput label="Open" source="open" />
        <DateTimeInput label="Open Time" source="openTime" />
        <ReferenceArrayInput source="orders" reference="Order">
          <SelectArrayInput
            optionText={OrderTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="Phone" source="phone" />
        <ReferenceArrayInput source="queues" reference="Queue">
          <SelectArrayInput
            optionText={QueueTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput source="salonAccounts" reference="SalonAccount">
          <SelectArrayInput
            optionText={SalonAccountTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="salonRatingLikes"
          reference="SalonRatingLike"
        >
          <SelectArrayInput
            optionText={SalonRatingLikeTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput source="salonRatings" reference="SalonRating">
          <SelectArrayInput
            optionText={SalonRatingTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput source="salonServices" reference="SalonService">
          <SelectArrayInput
            optionText={SalonServiceTitle}
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
        <TextInput label="Timezone" source="timezone" />
        <DateTimeInput label="Updated At" source="updatedAt" />
        <ReferenceArrayInput source="userAccounts" reference="UserAccount">
          <SelectArrayInput
            optionText={UserAccountTitle}
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
          source="userProfilesSalonsSalonAdminIdTouserProfiles.id"
          reference="UserProfile"
          label="User Profiles Salons Salon Admin Id Touser Profiles"
        >
          <SelectInput optionText={UserProfileTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="userProfilesUserProfilesSalonIdTosalons"
          reference="UserProfile"
        >
          <SelectArrayInput
            optionText={UserProfileTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="Website" source="website" />
      </SimpleForm>
    </Edit>
  );
};
