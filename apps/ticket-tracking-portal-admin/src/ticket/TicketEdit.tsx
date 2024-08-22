import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { CommentTitle } from "../comment/CommentTitle";
import { PriorityTitle } from "../priority/PriorityTitle";

export const TicketEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="assigned" source="assigned" />
        <ReferenceInput source="comment.id" reference="Comment" label="comment">
          <SelectInput optionText={CommentTitle} />
        </ReferenceInput>
        <DateTimeInput label="created_date" source="createdDate" />
        <ReferenceInput
          source="priority.id"
          reference="Priority"
          label="priority"
        >
          <SelectInput optionText={PriorityTitle} />
        </ReferenceInput>
        <TextInput label="program" source="program" />
        <TextInput label="resource" source="resource" />
        <TextInput label="state" source="state" />
        <TextInput label="subject" source="subject" />
        <TextInput label="ticket_number" source="ticketNumber" />
      </SimpleForm>
    </Edit>
  );
};
