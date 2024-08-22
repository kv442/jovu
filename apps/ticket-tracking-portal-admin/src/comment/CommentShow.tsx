import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { COMMENT_TITLE_FIELD } from "./CommentTitle";
import { PRIORITY_TITLE_FIELD } from "../priority/PriorityTitle";

export const CommentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Ticket"
          target="commentId"
          label="Tickets"
        >
          <Datagrid rowClick="show">
            <TextField label="assigned" source="assigned" />
            <ReferenceField
              label="comment"
              source="comment.id"
              reference="Comment"
            >
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
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
