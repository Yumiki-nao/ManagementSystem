export const getTime = () => {
  const hours = new Date().getHours();
  if (hours < 11) return "Hi,早上好";
  if (hours >= 11 && hours < 14) return "Hi,中午好";
  if (hours >= 14 && hours < 18) return "Hi,下午好";
  if (hours >= 18 && hours < 24) return "Hi,晚上好";
};
