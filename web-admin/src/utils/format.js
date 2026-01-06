export const convertDate = (isoDate) => {
  const date = new Date(isoDate);
  const formattedDate = date.toLocaleDateString("vi-VN");
  return formattedDate;
};

export const convertToUTC00 = (dateStr) => {
  const dateValue = dateStr.format("YYYY-MM-DD");
  return `${dateValue}T00:00:00.000Z`;
};
