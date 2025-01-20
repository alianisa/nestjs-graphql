import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { SSOPROVIDER_TITLE_FIELD } from "../ssoProvider/SsoProviderTitle";

export const SsoDomainList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"SsoDomains"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="Created At" source="createdAt" />
        <TextField label="Domain" source="domain" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Sso Providers"
          source="ssoprovider.id"
          reference="SsoProvider"
        >
          <TextField source={SSOPROVIDER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Updated At" source="updatedAt" />{" "}
      </Datagrid>
    </List>
  );
};
