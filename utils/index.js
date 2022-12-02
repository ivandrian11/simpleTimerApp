function pad(number, size) {
  let s = String(number);
  while (s.length < (size || 2)) {
    s = `0${s}`;
  }
  return s;
}

function formatStopwatch(time) {
  const hours = pad(Math.floor(time / 3600000));
  const minutes = pad(Math.floor((time % 3600000) / 60000));
  const seconds = pad(Math.floor((time % 60000) / 1000));
  const milliseconds = pad(Math.floor(time % 1000));

  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}.${pad(
    milliseconds,
    3
  )}`.slice(0, -2);
}

function formatCountdown(time) {
  const hours = pad(Math.floor(time / 3600000));
  const minutes = pad(Math.floor((time % 3600000) / 60000));
  const seconds = pad(Math.floor((time % 60000) / 1000));

  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function adjustTimer(value, code) {
  if (code === "incHours" && value + 3600000 < 216000000) {
    return value + 3600000;
  } else if (code === "decHours" && value - 3600000 >= 0) {
    return value - 3600000;
  } else if (code === "incMinutes" && value + 60000 < 216000000) {
    return value + 60000;
  } else if (code === "decMinutes" && value - 60000 >= 0) {
    return value - 60000;
  } else if (code === "incSeconds" && value + 1000 < 216000000) {
    return value + 1000;
  } else if (code === "decSeconds" && value - 1000 >= 0) {
    return value - 1000;
  }
}

export { formatStopwatch, formatCountdown, adjustTimer };
