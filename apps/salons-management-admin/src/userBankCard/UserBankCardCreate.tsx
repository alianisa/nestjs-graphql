import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  DateTimeInput,
  BooleanInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { UserProfileTitle } from "../userProfile/UserProfileTitle";

export const UserBankCardCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="Cvv" source="cvv" />
        <DateTimeInput label="Exp Date" source="expDate" />
        <BooleanInput label="Favorite" source="favorite" />
        <BooleanInput label="Main" source="main" />
        <TextInput label="Name" source="name" />
        <TextInput label="Number Field" source="numberField" />
        <TextInput label="Token" source="token" />
        <DateTimeInput label="Updated At" source="updatedAt" />
        <ReferenceInput
          source="userProfiles.id"
          reference="UserProfile"
          label="User Profiles"
        >
          <SelectInput optionText={UserProfileTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
