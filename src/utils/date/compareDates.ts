import { DateComparisonLevel } from "../types";

/**
   * @description will check if the passed dates are equal, you can pass a comparisonLevel to determine the level of granularity for the date comparison
   * 
   * @example 
   * const firstDate = new Date("2023-12-12T12:30:00");
  const secondDate = new Date("2023-12-12T15:45:00");
  
  compareDates(firstDate, secondDate); // Output: false
  compareDates(firstDate, secondDate, "year"); // Output: true
  compareDates(firstDate, secondDate, "hour"); // Output: false
  
   */
export default function compareDates(
  firstDate: string | Date,
  secondDate: string | Date,
  comparisonLevel: DateComparisonLevel = "full"
): boolean {
  const date1 = new Date(firstDate);
  const date2 = new Date(secondDate);

  if (comparisonLevel === "full") {
    return date1.getTime() === date2.getTime();
  }

  const compare = (a: number, b: number): boolean => {
    return a === b;
  };

  switch (comparisonLevel) {
    case "year":
      return compare(date1.getFullYear(), date2.getFullYear());
    case "month":
      return compare(date1.getMonth(), date2.getMonth());
    case "day":
      return compare(date1.getDate(), date2.getDate());
    case "year-month":
      return (
        compare(date1.getFullYear(), date2.getFullYear()) &&
        compare(date1.getMonth(), date2.getMonth())
      );
    case "hour":
      return compare(date1.getHours(), date2.getHours());
    case "year-month-day":
      return (
        compare(date1.getFullYear(), date2.getFullYear()) &&
        compare(date1.getMonth(), date2.getMonth()) &&
        compare(date1.getDate(), date2.getDate())
      );
    case "year-month-day-hour":
      return (
        compare(date1.getFullYear(), date2.getFullYear()) &&
        compare(date1.getMonth(), date2.getMonth()) &&
        compare(date1.getDate(), date2.getDate()) &&
        compare(date1.getHours(), date2.getHours())
      );
    default:
      throw new Error("Invalid date comparisonLevel parameter");
  }
}
