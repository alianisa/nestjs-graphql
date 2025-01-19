import { AppointmentUpdateManyWithoutTimeSlotsInput } from "./AppointmentUpdateManyWithoutTimeSlotsInput";
import { SalonWhereUniqueInput } from "../salon/SalonWhereUniqueInput";
import { UserProfileWhereUniqueInput } from "../userProfile/UserProfileWhereUniqueInput";

export type TimeSlotUpdateInput = {
  appointments?: AppointmentUpdateManyWithoutTimeSlotsInput;
  endTime?: Date | null;
  isAvailable?: boolean | null;
  salons?: SalonWhereUniqueInput | null;
  slotDate?: Date | null;
  slotTime?: Date;
  startTime?: Date | null;
  userProfiles?: UserProfileWhereUniqueInput | null;
};
