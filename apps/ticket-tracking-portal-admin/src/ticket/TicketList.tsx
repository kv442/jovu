import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { COMMENT_TITLE_FIELD } from "../comment/CommentTitle";
import { PRIORITY_TITLE_FIELD } from "../priority/PriorityTitle";

export const TicketList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Tickets"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="assigned" source="assigned" />
        <ReferenceField label="comment" source="comment.id" reference="Comment">
          <TextField source={COMMENT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="created_date" source="createdDate" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="priority"
          source="priority.id"
          reference="Priority"
        >
          <TextField source={PRIORITY_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="program" source="program" />
        <TextField label="resource" source="resource" />
        <TextField label="state" source="state" />
        <TextField label="subject" source="subject" />
        <TextField label="ticket_number" source="ticketNumber" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
