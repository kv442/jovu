import { Ticket } from "../ticket/Ticket";

export type Priority = {
  createdAt: Date;
  id: string;
  tickets?: Array<Ticket>;
  updatedAt: Date;
};
