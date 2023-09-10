export function formatDate(dataStr) {
  var dateParts = dataStr.split("-");
  if (dateParts.length === 3) {
    return dateParts[2] + "-" + dateParts[1] + "-" + dateParts[0];
  }
  return null;
}
