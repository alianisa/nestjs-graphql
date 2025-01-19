import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  BooleanField,
  ReferenceField,
} from "react-admin";

import { USERPROFILE_TITLE_FIELD } from "../userProfile/UserProfileTitle";

export const UserBankCardShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Cvv" source="cvv" />
        <TextField label="Exp Date" source="expDate" />
        <BooleanField label="Favorite" source="favorite" />
        <TextField label="ID" source="id" />
        <BooleanField label="Main" source="main" />
        <TextField label="Name" source="name" />
        <TextField label="Number Field" source="numberField" />
        <TextField label="Token" source="token" />
        <TextField label="Updated At" source="updatedAt" />
        <ReferenceField
          label="User Profiles"
          source="userprofile.id"
          reference="UserProfile"
        >
          <TextField source={USERPROFILE_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
