export function secondToTime(second: number): string {
  const hour = Math.floor(second / 3600);
  const minute = Math.floor(second / 60);
  const sec = Math.floor(second % 60);

  const hourStr = hour > 0 ? `${hour}:` : "";
  const minuteStr = minute > 0 ? `${minute}:` : "0:";
  const secStr = sec > 0 ? `${sec}` : "00";

  return `${hourStr}${minuteStr}${secStr}`;
}
