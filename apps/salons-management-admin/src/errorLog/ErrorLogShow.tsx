import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const ErrorLogShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Error Context" source="errorContext" />
        <TextField label="Error Detail" source="errorDetail" />
        <TextField label="Error Hint" source="errorHint" />
        <TextField label="Error Message" source="errorMessage" />
        <TextField label="Function Name" source="functionName" />
        <TextField label="ID" source="id" />
      </SimpleShowLayout>
    </Show>
  );
};
