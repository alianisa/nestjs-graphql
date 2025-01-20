import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  BooleanInput,
  TextInput,
  SelectInput,
} from "react-admin";

export const TemplateEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
