import { SortOrder } from "../../util/SortOrder";

export type TicketOrderByInput = {
  assigned?: SortOrder;
  commentId?: SortOrder;
  createdAt?: SortOrder;
  createdDate?: SortOrder;
  id?: SortOrder;
  priorityId?: SortOrder;
  program?: SortOrder;
  resource?: SortOrder;
  state?: SortOrder;
  subject?: SortOrder;
  ticketNumber?: SortOrder;
  updatedAt?: SortOrder;
};
