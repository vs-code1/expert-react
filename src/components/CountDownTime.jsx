import React, { useEffect, useState } from "react";

export default function CountDowntime({ initialSeconds = 3600 }) {
  const [timeLeft, setTimeLeft] = useState(initialSeconds);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  const formatTime = (value) => String(value).padStart(2, "0");

  const hours = formatTime(Math.floor(timeLeft / 3600));
  const minutes = formatTime(Math.floor((timeLeft % 3600) / 60));
  const seconds = formatTime(timeLeft % 60);

  return (
    <div className="text-white bg-[#3b3b3b84] p-8 rounded-3xl">
      <p className="text-sm mb-4">{"Auction ends in:"}</p>
      <div className="flex gap-4 text-white text-2xl w-fit">
        <div className="flex flex-col items-center ">
          <span className="text-4xl font-extrabold">{hours}</span>
          <span className="text-[0.6rem] ">Hours</span>
        </div>
        <p className="font-extrabold text-4xl">:</p>
        <div className="flex flex-col items-center">
          <span className="text-4xl font-extrabold">{minutes}</span>
          <span className="text-[0.6rem] ">Minutes</span>
        </div>
        <p className="text-4xl font-extrabold">:</p>
        <div className="flex flex-col items-center">
          <span className="text-4xl font-extrabold">{seconds}</span>
          <span className="text-[0.6rem] ">Seconds</span>
        </div>
      </div>
    </div>
  );
}
