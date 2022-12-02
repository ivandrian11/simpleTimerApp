import React, { useContext, useEffect } from "react";
import { adjustTimer, formatCountdown } from "../utils";
import {
  FaLongArrowAltUp,
  FaLongArrowAltDown,
  FaPlay,
  FaPause,
  FaStop,
} from "react-icons/fa";
import Button from "./Button";
import { GlobalContext } from "../context";

export default function Countdown() {
  const { state, handleFunction } = useContext(GlobalContext);
  const { time, timerOn, timerStart, setTimes } = state;
  const { onPlay, onPausePlay, onStop } = handleFunction;

  useEffect(() => {
    if (timerOn) {
      const intervalId = setInterval(() => {
        setTimes((prev) => {
          if (prev >= 1000) {
            return prev - 100;
          }

          onStop();
        });
      }, 100);

      return () => clearInterval(intervalId);
    }
  }, [timerOn]);

  const onChange = (event) => {
    const code = event.currentTarget.value;
    setTimes((prev) => {
      return adjustTimer(prev, code);
    });
  };

  return (
    <div className="flex items-center justify-center h-screen bg-slate-400">
      <div className="flex flex-col gap-y-4">
        <div
          className={`${
            timerStart ? "invisible" : "visible"
          } flex justify-between mx-4`}
        >
          <Button onClick={onChange} value="incHours">
            <FaLongArrowAltUp color="white" size={30} />
          </Button>
          <Button onClick={onChange} value="incMinutes">
            <FaLongArrowAltUp color="white" size={30} />
          </Button>
          <Button onClick={onChange} value="incSeconds">
            <FaLongArrowAltUp color="white" size={30} />
          </Button>
        </div>

        <div>
          <p className="text-white text-7xl">{formatCountdown(time)}</p>
          <div className="flex justify-between mx-8">
            <p className="text-xl text-slate-100">H</p>
            <p className="text-xl text-slate-100">M</p>
            <p className="text-xl text-slate-100">S</p>
          </div>
        </div>

        <div
          className={`${
            timerStart ? "invisible" : "visible"
          } flex justify-between mx-4`}
        >
          <Button onClick={onChange} value="decHours">
            <FaLongArrowAltDown color="white" size={30} />
          </Button>
          <Button onClick={onChange} value="decMinutes">
            <FaLongArrowAltDown color="white" size={30} />
          </Button>
          <Button onClick={onChange} value="decSeconds">
            <FaLongArrowAltDown color="white" size={30} />
          </Button>
        </div>

        {timerStart ? (
          <div className="flex items-center justify-center gap-x-4">
            <Button onClick={() => onPausePlay()}>
              {timerOn ? <FaPause color="white" /> : <FaPlay color="white" />}
            </Button>
            <Button onClick={() => onStop()}>
              <FaStop color="white" size={20} />
            </Button>
          </div>
        ) : (
          <div className="flex justify-center">
            <Button
              onClick={
                time === 0
                  ? () => alert("Set your time first !")
                  : () => onPlay()
              }
              primary
            >
              <FaPlay color="white" size={20} />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
