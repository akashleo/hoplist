export const timestampToDate = (timestamp) => {
  // Create a new Date object. It can handle ISO strings and timestamps in milliseconds.
  const date = new Date(timestamp);

  // Get various date components
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Month is zero-based
  const day = date.getDate().toString().padStart(2, "0");
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");

  // Construct the date string in desired format
  const dateString = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

  return dateString;
};
