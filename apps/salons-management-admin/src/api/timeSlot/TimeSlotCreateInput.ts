import { AppointmentCreateNestedManyWithoutTimeSlotsInput } from "./AppointmentCreateNestedManyWithoutTimeSlotsInput";
import { SalonWhereUniqueInput } from "../salon/SalonWhereUniqueInput";
import { UserProfileWhereUniqueInput } from "../userProfile/UserProfileWhereUniqueInput";

export type TimeSlotCreateInput = {
  appointments?: AppointmentCreateNestedManyWithoutTimeSlotsInput;
  endTime?: Date | null;
  isAvailable?: boolean | null;
  salons?: SalonWhereUniqueInput | null;
  slotDate?: Date | null;
  slotTime: Date;
  startTime?: Date | null;
  userProfiles?: UserProfileWhereUniqueInput | null;
};
