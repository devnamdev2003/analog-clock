import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      axios
        .get("http://127.0.0.1:8000/")
        .then((response) => {
          const serverTime = new Date(response.data.current_time);
          setTime(serverTime);
        })
        .catch((error) => {
          console.error("Error fetching current time:", error);
        });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const getSecondsAngle = () => {
    return 6 * time.getSeconds();
  };

  const getMinutesAngle = () => {
    return 6 * time.getMinutes();
  };

  const getHoursAngle = () => {
    return 30 * time.getHours() + time.getMinutes() / 2;
  };

  return (
    <div className="clock">
      <div
        className="hand hour-hand"
        style={{ transform: `rotate(${getHoursAngle()}deg)` }}
      ></div>
      <div
        className="hand minute-hand"
        style={{ transform: `rotate(${getMinutesAngle()}deg)` }}
      ></div>
      <div
        className="hand second-hand"
        style={{ transform: `rotate(${getSecondsAngle()}deg)` }}
      ></div>
    </div>
  );
};

export default App;
