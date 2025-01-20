import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const ApiKeyShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Api Key" source="apiKey" />
        <TextField label="ID" source="id" />
      </SimpleShowLayout>
    </Show>
  );
};
