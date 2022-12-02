import React, { useEffect, useContext } from "react";
import Button from "./Button";
import { formatStopwatch } from "../utils";
import { FaPlay, FaPause, FaStop, FaUndo } from "react-icons/fa";
import { GlobalContext } from "../context";

function Stopwatch() {
  const { state, handleFunction } = useContext(GlobalContext);
  const { time, timerOn, timerStart, setTimes } = state;
  const { onReset, onPlay, onPausePlay, onStop } = handleFunction;

  useEffect(() => {
    if (timerOn) {
      const intervalId = setInterval(() => {
        setTimes((prevValue) => prevValue + 100);
      }, 100);

      return () => clearInterval(intervalId);
    }
  }, [timerOn]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-slate-400 gap-y-6">
      <p className="text-white text-7xl">{formatStopwatch(time)}</p>
      {timerStart ? (
        <div className="flex items-center gap-x-4">
          <Button onClick={() => onPausePlay()}>
            {timerOn ? <FaPause color="white" /> : <FaPlay color="white" />}
          </Button>
          <Button onClick={() => onStop()} primary>
            <FaStop color="white" size={20} />
          </Button>
          <Button onClick={() => onReset()}>
            <FaUndo color="white" />
          </Button>
        </div>
      ) : (
        <Button onClick={() => onPlay()} primary>
          <FaPlay color="white" size={20} />
        </Button>
      )}
    </div>
  );
}

export default Stopwatch;
