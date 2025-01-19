import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const InstanceShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Created At" source="createdAt" />
        <TextField label="ID" source="id" />
        <TextField label="Raw Base Config" source="rawBaseConfig" />
        <TextField label="Updated At" source="updatedAt" />
        <TextField label="Uuid" source="uuid" />
      </SimpleShowLayout>
    </Show>
  );
};
