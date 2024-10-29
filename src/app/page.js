"use client"

import { useEffect, useState } from "react";

const Page = () => {
  const [time, setTime] = useState(0);

  const updateTime = () => {
    setTime((prev) => prev + 1);
  };

  useEffect(() => {
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const minutes = Math.floor(time / 60);
  const sec = time % 60;

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  return (
    <div>
      <div>
        Minute: {formatTime(minutes)} Sec: {formatTime(sec)}
      </div>
      <button onClick={() => setTime(0)}>Reset</button>
    </div>
  );
};

export default Page;