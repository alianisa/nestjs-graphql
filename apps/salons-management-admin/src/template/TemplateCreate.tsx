import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  TextInput,
  SelectInput,
} from "react-admin";

export const TemplateCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput label="Is Active" source="isActive" />
        <TextInput label="Locale" source="locale" />
        <div />
        <TextInput label="Name" source="name" />
        <TextInput label="Template" source="template" />
        <SelectInput
          source="type"
          label="Type"
          choices={[
            { label: "sms", value: "sms" },
            { label: "call", value: "call" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="Variables" source="variables" />
      </SimpleForm>
    </Create>
  );
};
