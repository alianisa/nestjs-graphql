import { Appointment as TAppointment } from "../api/appointment/Appointment";

export const APPOINTMENT_TITLE_FIELD = "employeeId";

export const AppointmentTitle = (record: TAppointment): string => {
  return record.employeeId?.toString() || String(record.id);
};
