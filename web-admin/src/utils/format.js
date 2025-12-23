export const convertDate = (isoDate) => {
  const date = new Date(isoDate);
  const formattedDate = date.toLocaleDateString("vi-VN");
  return formattedDate;
};
