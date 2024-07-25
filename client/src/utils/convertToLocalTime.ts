const convertToLocalTime = (dbLocalTime: string) => {
    var date = new Date(dbLocalTime);
    return date.toLocaleString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };
  export default convertToLocalTime