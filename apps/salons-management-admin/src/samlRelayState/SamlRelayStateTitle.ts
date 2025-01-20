import { SamlRelayState as TSamlRelayState } from "../api/samlRelayState/SamlRelayState";

export const SAMLRELAYSTATE_TITLE_FIELD = "forEmail";

export const SamlRelayStateTitle = (record: TSamlRelayState): string => {
  return record.forEmail?.toString() || String(record.id);
};
