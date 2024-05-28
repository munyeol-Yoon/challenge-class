export const dateFormatter = (timestamp) => {
  const date = new Date(timestamp);

  const koreaTimeOffSet = 9 * 60 * 60 * 1000;
  const koreaDate = new Date(date.getTime() + koreaTimeOffSet);

  const year = koreaDate.getUTCFullYear();
  const month = koreaDate.getUTCMonth();
  const day = koreaDate.getUTCDate();
  let hours = koreaDate.getUTCHours();
  let min = koreaDate.getUTCMinutes();

  let period = "오전";
  if (hours >= 12) {
    period = "오후";
    if (hours > 12) hours -= 12;
  }
  if (hours === 0) hours = 12;

  if (min < 10) {
    min = "0" + min;
  }

  const formattedDate = `${year}년 ${month}월 ${day}일, `;
  const formattedTime = `${period} ${hours}:${min}`;
  return {
    koreaDate: formattedDate + formattedTime,
    koreaTime: formattedTime,
  };
};
