import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { MFAFACTOR_TITLE_FIELD } from "../mfaFactor/MfaFactorTitle";

export const MfaChallengeList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"MfaChallenges"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="Created At" source="createdAt" />
        <TextField label="ID" source="id" />
        <TextField label="Ip Address" source="ipAddress" />
        <ReferenceField
          label="Mfa Factors"
          source="mfafactor.id"
          reference="MfaFactor"
        >
          <TextField source={MFAFACTOR_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Otp Code" source="otpCode" />
        <TextField label="Verified At" source="verifiedAt" />
        <TextField
          label="Web Authn Session Data"
          source="webAuthnSessionData"
        />{" "}
      </Datagrid>
    </List>
  );
};
