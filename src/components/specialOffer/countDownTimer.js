import { useEffect, useState } from "react";

function CountDownTimer() {
  const expiryTime = new Date("2023-09-05T12:00:00").getTime();
  const [countdownTime, setCountdownTime] = useState(calculateCountdownTime(expiryTime));
  
  function calculateCountdownTime(expiryTime) {
    const currentTime = new Date().getTime();
    const remainingTime = expiryTime - currentTime;
    
    if (remainingTime <= 0) {
      return null; // Deal has expired
    }
    
    const totalSeconds = Math.floor(remainingTime / 1000);
    const totalMinutes = Math.floor(totalSeconds / 60);
    const totalHours = Math.floor(totalMinutes / 60);
    const totalDays = Math.floor(totalHours / 24);
    
    const countdownTime = {
      countdownDays: totalDays,
      countdownHours: totalHours % 24,
      countdownMinutes: totalMinutes % 60,
      countdownSeconds: totalSeconds % 60
    };
    
    return countdownTime;
  }

  useEffect(() => {
    const timerInterval = setInterval(() => {
      const newCountdownTime = calculateCountdownTime(expiryTime);
      setCountdownTime(newCountdownTime);

      if (newCountdownTime === null) {
        clearInterval(timerInterval);
      }
    }, 1000);

    return () => {
      clearInterval(timerInterval);
    };
  }, [expiryTime]);
  
  return (
    <>
      {countdownTime !== null ? (
        <p>
          ends in {countdownTime.countdownDays}d : {countdownTime.countdownHours}h :{" "}
          {countdownTime.countdownMinutes}m : {countdownTime.countdownSeconds}s
        </p>
      ) : (
        <p>Deal has been Expired</p>
      )}
    </>
  );
}

export default CountDownTimer;