export function getDisplayDate(date: Date) {
  const d = date.getDate();
  const m = date.getMonth();
  const y = date.getFullYear();

  return `${d}/${m+1}/${y}`;
}
