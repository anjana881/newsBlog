const formatDate = (date) => {
  const val = new Date(date);
  const mon = val.toLocaleString("default", { month: "short" });
  return `${val.getDay()} ${mon} ${val.getFullYear()}`;
};

export default formatDate;
