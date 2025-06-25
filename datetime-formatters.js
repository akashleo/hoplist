export const formatEpochTime = (epochTime) => {
  // Convert epoch_time to minutes
  var minutes = Math.floor(epochTime / 60);

  if (minutes < 60) {
    return `${minutes} min`;
  } else if (minutes === 60) {
    return "1h 0min";
  } else if (minutes === 2880) {
    return "2d";
  } else if (minutes > 60 && minutes < 60 * 48) {
    var hours = Math.floor(minutes / 60);
    var remainingMinutes = minutes % 60;
    return `${hours}h ${remainingMinutes}min`;
  } else {
    var days = Math.floor(minutes / (60 * 24));
    var remainingHours = Math.floor((minutes % (60 * 24)) / 60);
    return `${days}d ${remainingHours}hrs`;
  }
};

export const extractDate = (dateString) => {
  const dateObj = new Date(dateString);
  const day = dateObj.getDate().toString().padStart(2, "0");
  const month = (dateObj.getMonth() + 1).toString().padStart(2, "0");
  const year = dateObj.getFullYear();
  return `${day}:${month}:${year}`;
};

export const formatDate = (dateString) => {
  const date = new Date(dateString);

  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear().toString();
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");

  const formattedDate =
    day +
    ":" +
    month +
    ":" +
    year +
    " " +
    hours +
    ":" +
    minutes +
    ":" +
    seconds;

  return formattedDate;
};

export const setToEndOfDay = (dateString, includeCurrentTime) => {
  const [datePart, timePart] = dateString.split(" ");
  const dateComponents = datePart.split(":");
  let [hours, minutes, seconds] = timePart.split(":");
  if (includeCurrentTime === false) {
    hours = "23";
    minutes = "59";
    seconds = "59";
  }
  const updatedDateString = `${dateComponents.join(
    ":"
  )} ${hours}:${minutes}:${seconds}`;

  return updatedDateString;
};

export const timeToEpochMilliseconds = (timeStr) => {
  var parts = timeStr.split(" ");
  var datePart = parts[0].split(":");
  var timePart = parts[1].split(":");
  var dateObj = new Date(
    parseInt(datePart[2]), // Year
    parseInt(datePart[1]) - 1, // Month (0-indexed)
    parseInt(datePart[0]), // Day
    parseInt(timePart[0]), // Hours
    parseInt(timePart[1]), // Minutes
    parseInt(timePart[2]) // Seconds
  );
  var epochMilliseconds = dateObj.getTime();

  return epochMilliseconds;
};

export const durationCalculator = (time) => {
  const currentTime = (parseFloat(Date.now()) / 1000).toFixed(6);
  const difference = currentTime - time;

  return formatEpochTime(difference);
};

export const getMinutesFromEpoch = (time) => {
  const currentTime = (parseFloat(Date.now()) / 1000).toFixed(6);
  const difference = currentTime - time;

  const minutes = Math.floor(difference / 60);

  return minutes;
};

export const formatMinutes = (minutes) => {
  // Convert epoch_time to minutes
  if (minutes < 60) {
    return `${minutes} min`;
  } else if (minutes === 60) {
    return "1h 0min";
  } else if (minutes === 2880) {
    return "2d";
  } else if (minutes > 60 && minutes < 60 * 48) {
    var hours = Math.floor(minutes / 60);
    var remainingMinutes = minutes % 60;
    return `${hours}h ${remainingMinutes}min`;
  } else {
    var days = Math.floor(minutes / (60 * 24));
    var remainingHours = Math.floor((minutes % (60 * 24)) / 60);
    return `${days}d ${remainingHours}hrs`;
  }
};

export const formatDateFromEpoch = (epochTime) => {
  // Create a new Date object with the epoch time
  const date = new Date(epochTime); // Convert from seconds to milliseconds

  // Extract day, month, and year
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Month is 0-indexed
  const year = date.getFullYear();

  // Format the date in dd/mm/yyyy format
  const formattedDate = `${day}/${month}/${year}`;

  return formattedDate;
};

export const timestampToDate = (timestamp) => {
  // Convert Unix timestamp to milliseconds
  let milliseconds = timestamp * 1000;

  // Create a new Date object
  let date = new Date(milliseconds);

  // Get various date components
  let year = date.getFullYear();
  let month = (date.getMonth() + 1).toString().padStart(2, "0"); // Month is zero-based
  let day = date.getDate().toString().padStart(2, "0");
  let hours = date.getHours().toString().padStart(2, "0");
  let minutes = date.getMinutes().toString().padStart(2, "0");
  let seconds = date.getSeconds().toString().padStart(2, "0");

  // Construct the date string in desired format
  let dateString = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

  return dateString;
};
