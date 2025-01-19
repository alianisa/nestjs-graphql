import { JsonValue } from "type-fest";

export type Salonstest = {
  address: string;
  categories: string;
  coordinates: JsonValue;
  createdAt: Date;
  description: string | null;
  district: string | null;
  email: string | null;
  features: string;
  googlePlaceId: string | null;
  id: string;
  importedFrom: string | null;
  metro: JsonValue;
  name: string;
  phones: string;
  photos: JsonValue;
  photosCount: number | null;
  priceCategory: string | null;
  rating: JsonValue;
  socialLinks: JsonValue;
  status: string | null;
  updatedAt: Date;
  website: string | null;
  workingHours: JsonValue;
};
