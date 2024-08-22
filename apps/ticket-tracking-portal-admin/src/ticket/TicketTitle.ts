import { Ticket as TTicket } from "../api/ticket/Ticket";

export const TICKET_TITLE_FIELD = "assigned";

export const TicketTitle = (record: TTicket): string => {
  return record.assigned?.toString() || String(record.id);
};
