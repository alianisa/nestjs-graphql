import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const ErrorLogCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Error Context" source="errorContext" />
        <TextInput label="Error Detail" source="errorDetail" />
        <TextInput label="Error Hint" source="errorHint" />
        <TextInput label="Error Message" source="errorMessage" />
        <TextInput label="Function Name" source="functionName" />
      </SimpleForm>
    </Create>
  );
};
