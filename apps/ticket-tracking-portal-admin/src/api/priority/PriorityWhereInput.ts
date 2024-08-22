import { StringFilter } from "../../util/StringFilter";
import { TicketListRelationFilter } from "../ticket/TicketListRelationFilter";

export type PriorityWhereInput = {
  id?: StringFilter;
  tickets?: TicketListRelationFilter;
};
