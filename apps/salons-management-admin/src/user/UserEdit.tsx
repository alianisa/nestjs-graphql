import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
  BooleanInput,
  PasswordInput,
} from "react-admin";

import { IdentityTitle } from "../identity/IdentityTitle";
import { MfaFactorTitle } from "../mfaFactor/MfaFactorTitle";
import { OneTimeTokenTitle } from "../oneTimeToken/OneTimeTokenTitle";
import { SessionTitle } from "../session/SessionTitle";
import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Aud" source="aud" />
        <DateTimeInput label="Banned Until" source="bannedUntil" />
        <DateTimeInput
          label="Confirmation Sent At"
          source="confirmationSentAt"
        />
        <TextInput label="Confirmation Token" source="confirmationToken" />
        <DateTimeInput label="Confirmed At" source="confirmedAt" />
        <DateTimeInput label="Created At" source="createdAt" />
        <DateTimeInput label="Deleted At" source="deletedAt" />
        <TextInput label="Email" source="email" />
        <TextInput label="Email Change" source="emailChange" />
        <NumberInput
          step={1}
          label="Email Change Confirm Status"
          source="emailChangeConfirmStatus"
        />
        <DateTimeInput
          label="Email Change Sent At"
          source="emailChangeSentAt"
        />
        <TextInput
          label="Email Change Token Current"
          source="emailChangeTokenCurrent"
        />
        <TextInput
          label="Email Change Token New"
          source="emailChangeTokenNew"
        />
        <DateTimeInput label="Email Confirmed At" source="emailConfirmedAt" />
        <ReferenceArrayInput source="identities" reference="Identity">
          <SelectArrayInput
            optionText={IdentityTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="Instance Id" source="instanceId" />
        <DateTimeInput label="Invited At" source="invitedAt" />
        <BooleanInput label="Is Anonymous" source="isAnonymous" />
        <BooleanInput label="Is Sso User" source="isSsoUser" />
        <BooleanInput label="Is Super Admin" source="isSuperAdmin" />
        <DateTimeInput label="Last Sign In At" source="lastSignInAt" />
        <ReferenceArrayInput source="mfaFactors" reference="MfaFactor">
          <SelectArrayInput
            optionText={MfaFactorTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput source="oneTimeTokens" reference="OneTimeToken">
          <SelectArrayInput
            optionText={OneTimeTokenTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <PasswordInput label="Encrypted Password" source="password" />
        <TextInput label="Phone" source="phone" />
        <TextInput label="Phone Change" source="phoneChange" />
        <DateTimeInput
          label="Phone Change Sent At"
          source="phoneChangeSentAt"
        />
        <TextInput label="Phone Change Token" source="phoneChangeToken" />
        <DateTimeInput label="Phone Confirmed At" source="phoneConfirmedAt" />
        <div />
        <div />
        <DateTimeInput
          label="Reauthentication Sent At"
          source="reauthenticationSentAt"
        />
        <TextInput
          label="Reauthentication Token"
          source="reauthenticationToken"
        />
        <DateTimeInput label="Recovery Sent At" source="recoverySentAt" />
        <TextInput label="Recovery Token" source="recoveryToken" />
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <ReferenceArrayInput source="sessions" reference="Session">
          <SelectArrayInput
            optionText={SessionTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <DateTimeInput label="Updated At" source="updatedAt" />
        <TextInput label="username" source="username" />
      </SimpleForm>
    </Edit>
  );
};
