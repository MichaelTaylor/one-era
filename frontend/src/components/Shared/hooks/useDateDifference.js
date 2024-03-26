import moment from "moment";

const dateMessage = (number, message) => {
  if (number === 0) return "";

  const plural = number > 1 ? "s" : "";
  return `${number} ${message}${plural}`;
};

const isDateNegative = (year, month, day) => {
  if (year < 0) return true;
  if (month < 0) return true;
  if (day < 0) return true;
  return false;
};

const useDateDifference = (startDate, endDate) => {
  const earliestDate = new Date(startDate);
  const latestDate = new Date(endDate);

  const end = moment(earliestDate);
  const start = moment(latestDate);

  const monthMark =
    latestDate.getDate() > earliestDate.getDate()
      ? new Date(
          latestDate.getFullYear(),
          latestDate.getMonth(),
          earliestDate.getDate()
        )
      : new Date(
          latestDate.getFullYear(),
          latestDate.getMonth() - 1,
          earliestDate.getDate()
        );

  const dayMark = new Date(
    latestDate.getFullYear(),
    latestDate.getMonth(),
    latestDate.getDate()
  );

  const month = moment(monthMark);
  const day = moment(dayMark);

  const yearsPassed = start.diff(end, "years");
  const monthsPassed = start.diff(end, "months") % 12;
  const daysPassed = month.diff(day, "days");

  const message =
    dateMessage(yearsPassed, "year") +
    " " +
    dateMessage(monthsPassed, "month") +
    " " +
    dateMessage(-daysPassed, "day");

  const negativeDate = isDateNegative(yearsPassed, monthsPassed, -daysPassed);

  const dateDifference = negativeDate ? "Time Paradox" : message;
  return dateDifference;
};

export default useDateDifference;
