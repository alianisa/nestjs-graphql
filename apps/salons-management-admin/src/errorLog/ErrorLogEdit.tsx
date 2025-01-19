import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const ErrorLogEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Error Context" source="errorContext" />
        <TextInput label="Error Detail" source="errorDetail" />
        <TextInput label="Error Hint" source="errorHint" />
        <TextInput label="Error Message" source="errorMessage" />
        <TextInput label="Function Name" source="functionName" />
      </SimpleForm>
    </Edit>
  );
};
