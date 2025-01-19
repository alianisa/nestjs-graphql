import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const LoyaltyProgramList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"LoyaltyPrograms"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
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
        <TextField label="Updated At" source="updatedAt" />{" "}
      </Datagrid>
    </List>
  );
};
