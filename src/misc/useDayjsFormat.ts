import { useEffect, useState } from "react";
import dayjs from 'dayjs';
import dayjsUtc from 'dayjs/plugin/utc';
import dayjsTz from 'dayjs/plugin/timezone';

// Apply timezone and UTC plugins
dayjs.extend(dayjsTz)
dayjs.extend(dayjsUtc)

/**
 * Get the current time in a specific format and timezone
 * @param formatString DayJS format string
 * @returns 
 */
export function useDayjsCurrentTime(formatString?: string | undefined) {
  const [initialized, setInitialized] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const fetchTime = () => {
      const timestring = dayjs().tz('Europe/London').format(formatString);
      setTime(timestring);
    }

    if(!initialized) {
      setInterval(fetchTime, 1000);
      setInitialized(true);
      fetchTime();
    }

  }, [initialized, formatString])

  return time;
}