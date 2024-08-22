import { Ticket } from "../ticket/Ticket";

export type Comment = {
  createdAt: Date;
  id: string;
  tickets?: Array<Ticket>;
  updatedAt: Date;
};
