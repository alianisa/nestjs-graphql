import { SamlProvider as TSamlProvider } from "../api/samlProvider/SamlProvider";

export const SAMLPROVIDER_TITLE_FIELD = "nameIdFormat";

export const SamlProviderTitle = (record: TSamlProvider): string => {
  return record.nameIdFormat?.toString() || String(record.id);
};
