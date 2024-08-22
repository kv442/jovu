import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CommentWhereUniqueInput } from "../comment/CommentWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PriorityWhereUniqueInput } from "../priority/PriorityWhereUniqueInput";

export type TicketWhereInput = {
  assigned?: StringNullableFilter;
  comment?: CommentWhereUniqueInput;
  createdDate?: DateTimeNullableFilter;
  id?: StringFilter;
  priority?: PriorityWhereUniqueInput;
  program?: StringNullableFilter;
  resource?: StringNullableFilter;
  state?: StringNullableFilter;
  subject?: StringNullableFilter;
  ticketNumber?: StringNullableFilter;
};
