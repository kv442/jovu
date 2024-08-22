import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  DateField,
} from "react-admin";
import { COMMENT_TITLE_FIELD } from "../comment/CommentTitle";
import { PRIORITY_TITLE_FIELD } from "../priority/PriorityTitle";

export const TicketShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
