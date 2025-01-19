import { Salon } from "../salon/Salon";
import { UserProfile } from "../userProfile/UserProfile";

export type Attendance = {
  action?:
    | "clock_in"
    | "clock_out"
    | "break_start"
    | "break_end"
    | "working"
    | null;
  actionTime: Date | null;
  clockin: Date | null;
  clockout: Date | null;
  completed: boolean | null;
  createdAt: Date | null;
  date: Date;
  id: string;
  salons?: Salon;
  updatedAt: Date | null;
  userProfiles?: UserProfile;
};
