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

export const SamlProviderList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"SamlProviders"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="Attribute Mapping" source="attributeMapping" />
        <TextField label="Created At" source="createdAt" />
        <TextField label="Entity Id" source="entityId" />
        <TextField label="ID" source="id" />
        <TextField label="Metadata Url" source="metadataUrl" />
        <TextField label="Metadata Xml" source="metadataXml" />
        <TextField label="Name Id Format" source="nameIdFormat" />
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
