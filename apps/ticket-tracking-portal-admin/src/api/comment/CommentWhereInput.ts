import { StringFilter } from "../../util/StringFilter";
import { TicketListRelationFilter } from "../ticket/TicketListRelationFilter";

export type CommentWhereInput = {
  id?: StringFilter;
  tickets?: TicketListRelationFilter;
};
