import { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  const [time, setTimes] = useState(0);
  const [timerOn, setTimerOn] = useState(false);
  const [timerStart, setTimerStart] = useState(false);

  const onReset = () => {
    setTimes(0);
  };

  const onPlay = () => {
    setTimerStart(true);
    setTimerOn(true);
  };

  const onPausePlay = () => {
    setTimerOn((prev) => !prev);
  };

  const onStop = () => {
    setTimerStart(false);
    setTimerOn(false);
    onReset();
  };

  const state = { time, timerOn, timerStart, setTimes };

  const handleFunction = {
    onReset,
    onPlay,
    onPausePlay,
    onStop,
  };

  return (
    <GlobalContext.Provider value={{ state, handleFunction }}>
      {props.children}
    </GlobalContext.Provider>
  );
};
