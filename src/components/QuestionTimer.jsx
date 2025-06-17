import { useState, useEffect } from "react";

export default function QuestionTimer({ timeout, onTimeout }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  // Reset timer when `timeout` changes
  useEffect(() => {
    setRemainingTime(timeout);
  }, [timeout]);

  useEffect(() => {
    const timeoutId = setTimeout(onTimeout, timeout);

    return () => {
      clearTimeout(timeoutId); // Clean up on unmount or when dependencies change
    };
  }, [timeout, onTimeout]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRemainingTime((prevRemainingTime) => {
        return prevRemainingTime - 100;
      });
    }, 100);

    return () => {
      clearInterval(intervalId); // Clean up on unmount
    };
  }, []);

  return (
    <progress id="question-time" max={timeout} value={remainingTime} />
  );
}
