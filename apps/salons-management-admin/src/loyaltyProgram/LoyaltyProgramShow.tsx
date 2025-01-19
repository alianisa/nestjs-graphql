import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const LoyaltyProgramShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
        <TextField
          label="Min Points For Redemption"
          source="minPointsForRedemption"
        />
        <TextField label="Name" source="name" />
        <TextField label="Points Per Currency" source="pointsPerCurrency" />
        <TextField label="Redemption Rate" source="redemptionRate" />
        <TextField label="Updated At" source="updatedAt" />
      </SimpleShowLayout>
    </Show>
  );
};
