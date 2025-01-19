import { InputJsonValue } from "../../types";

export type TemplateUpdateInput = {
  isActive?: boolean;
  locale?: string;
  metadata?: InputJsonValue;
  name?: string;
  template?: string;
  type?: "sms" | "call";
  variables?: string;
};
