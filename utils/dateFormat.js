export default function dateFormat(date) {
  if (!(date instanceof Date)) return "Date Not Found";

  return new Date().toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}
