import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const LoyaltyProgramEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Description" source="description" />
        <NumberInput
          step={1}
          label="Min Points For Redemption"
          source="minPointsForRedemption"
        />
        <TextInput label="Name" source="name" />
        <NumberInput label="Points Per Currency" source="pointsPerCurrency" />
        <NumberInput label="Redemption Rate" source="redemptionRate" />
        <DateTimeInput label="Updated At" source="updatedAt" />
      </SimpleForm>
    </Edit>
  );
};
