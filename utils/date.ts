import { formatDistanceToNow } from "date-fns";

export const formatDate = (date?: string | Date): string => {
  const validDate = date ? new Date(date) : null;

  if (!validDate || isNaN(validDate.getTime())) {
    return "unknown date";
  }

  return formatDistanceToNow(validDate, { addSuffix: true });
};
