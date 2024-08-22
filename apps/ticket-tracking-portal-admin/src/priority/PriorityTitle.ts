import { Priority as TPriority } from "../api/priority/Priority";

export const PRIORITY_TITLE_FIELD = "id";

export const PriorityTitle = (record: TPriority): string => {
  return record.id?.toString() || String(record.id);
};
