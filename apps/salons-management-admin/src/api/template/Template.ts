import { JsonValue } from "type-fest";

export type Template = {
  createdAt: Date;
  id: string;
  isActive: boolean;
  locale: string;
  metadata: JsonValue;
  name: string;
  template: string;
  type?: "sms" | "call";
  updatedAt: Date;
  variables: string;
};
