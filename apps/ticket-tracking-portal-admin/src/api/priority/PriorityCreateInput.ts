import { TicketCreateNestedManyWithoutPrioritiesInput } from "./TicketCreateNestedManyWithoutPrioritiesInput";

export type PriorityCreateInput = {
  tickets?: TicketCreateNestedManyWithoutPrioritiesInput;
};
