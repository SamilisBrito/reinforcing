import { useEffect, useState } from "react";

export function RealTimeClock() {
  const currentTime = new Date();
  const [time, setTime] = useState({
    hours: currentTime.getHours().toString().padStart(2, "0"),
    minutes: currentTime.getMinutes().toString().padStart(2, "0"),
    seconds: currentTime.getSeconds().toString().padStart(2, "0"),
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const newTime = new Date();
      setTime({
        hours: newTime.getHours().toString().padStart(2, "0"),
        minutes: newTime.getMinutes().toString().padStart(2, "0"),
        seconds: newTime.getSeconds().toString().padStart(2, "0"),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <li>
      <h1>Exercício 4: Relógio em Tempo Real</h1>
      <time className="color padding">
        {time.hours}:{time.minutes}:{time.seconds}
      </time>
    </li>
  );
}
