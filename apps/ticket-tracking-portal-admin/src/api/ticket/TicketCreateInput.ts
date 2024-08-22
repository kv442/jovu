import { CommentWhereUniqueInput } from "../comment/CommentWhereUniqueInput";
import { PriorityWhereUniqueInput } from "../priority/PriorityWhereUniqueInput";

export type TicketCreateInput = {
  assigned?: string | null;
  comment?: CommentWhereUniqueInput | null;
  createdDate?: Date | null;
  priority?: PriorityWhereUniqueInput | null;
  program?: string | null;
  resource?: string | null;
  state?: string | null;
  subject?: string | null;
  ticketNumber?: string | null;
};
