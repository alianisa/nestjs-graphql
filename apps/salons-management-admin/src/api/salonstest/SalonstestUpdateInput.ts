import { InputJsonValue } from "../../types";

export type SalonstestUpdateInput = {
  address?: string;
  categories?: string;
  coordinates?: InputJsonValue;
  createdAt?: Date;
  description?: string | null;
  district?: string | null;
  email?: string | null;
  features?: string;
  googlePlaceId?: string | null;
  importedFrom?: string | null;
  metro?: InputJsonValue;
  name?: string;
  phones?: string;
  photos?: InputJsonValue;
  photosCount?: number | null;
  priceCategory?: string | null;
  rating?: InputJsonValue;
  socialLinks?: InputJsonValue;
  status?: string | null;
  updatedAt?: Date;
  website?: string | null;
  workingHours?: InputJsonValue;
};
