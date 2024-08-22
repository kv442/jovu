import { TicketCreateNestedManyWithoutCommentsInput } from "./TicketCreateNestedManyWithoutCommentsInput";

export type CommentCreateInput = {
  tickets?: TicketCreateNestedManyWithoutCommentsInput;
};
