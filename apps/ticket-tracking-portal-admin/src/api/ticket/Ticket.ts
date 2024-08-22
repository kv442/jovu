import { Comment } from "../comment/Comment";
import { Priority } from "../priority/Priority";

export type Ticket = {
  assigned: string | null;
  comment?: Comment | null;
  createdAt: Date;
  createdDate: Date | null;
  id: string;
  priority?: Priority | null;
  program: string | null;
  resource: string | null;
  state: string | null;
  subject: string | null;
  ticketNumber: string | null;
  updatedAt: Date;
};
