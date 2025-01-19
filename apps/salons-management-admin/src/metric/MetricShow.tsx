import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  BooleanField,
  DateField,
} from "react-admin";

export const MetricShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Duration" source="duration" />
        <TextField label="ID" source="id" />
        <TextField label="Metadata" source="metadata" />
        <BooleanField label="Success" source="success" />
        <DateField source="timestamp" label="Timestamp" />
        <TextField label="Type Field" source="typeField" />
      </SimpleShowLayout>
    </Show>
  );
};
