import { PriorityWhereInput } from "./PriorityWhereInput";
import { PriorityOrderByInput } from "./PriorityOrderByInput";

export type PriorityFindManyArgs = {
  where?: PriorityWhereInput;
  orderBy?: Array<PriorityOrderByInput>;
  skip?: number;
  take?: number;
};
