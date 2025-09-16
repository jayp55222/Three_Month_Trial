export function formatToIndianDate(utcDateString: string): string {
  // Convert input string into a Date object
  const utcDate = new Date(utcDateString);

  // Convert to IST (UTC + 5:30)
  const istOffset = 5.5 * 60 * 60 * 1000; // milliseconds
  const istDate = new Date(utcDate.getTime() + istOffset);

  // Extract parts
  const month = String(istDate.getMonth() + 1).padStart(2, "0");
  const day = String(istDate.getDate()).padStart(2, "0");
  const year = String(istDate.getFullYear());

  return `${month}/${day}/${year}`;
}

// // Example:
// console.log(formatToIndianDate("2025-09-15T10:30:00Z")); // 👉 "09/15/25"
