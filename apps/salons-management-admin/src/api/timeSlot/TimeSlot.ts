import { Appointment } from "../appointment/Appointment";
import { Salon } from "../salon/Salon";
import { UserProfile } from "../userProfile/UserProfile";

export type TimeSlot = {
  appointments?: Array<Appointment>;
  createdAt: Date | null;
  endTime: Date | null;
  id: string;
  isAvailable: boolean | null;
  salons?: Salon | null;
  slotDate: Date | null;
  slotTime: Date;
  startTime: Date | null;
  updatedAt: Date | null;
  userProfiles?: UserProfile | null;
};
