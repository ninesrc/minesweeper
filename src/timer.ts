import { State } from "./types";
const oldHigh: number = +(localStorage.getItem("Highscore") ?? 0);

export function createTimer(): [HTMLDivElement, (state: State) => void, HTMLDivElement] {
  const time = document.createElement("div");
  time.innerText = "0";
  const highscore = document.createElement("div");
  highscore.innerText = "nan";
  if (oldHigh < 100) {
    highscore.style.color = "rgb("+ (255-oldHigh*2.55) + "," + (oldHigh*2.55) + "," + 0+")"
  } else {
    highscore.style.color = "rgb(0,255,0)"
  }
  if (oldHigh) {
    highscore.innerText = oldHigh.toString();
  }
  function startTimer(state: State) {
    setInterval(function () {
      if (state.won === 0) {
        state.tick++;
      } else {
        if (state.won === true) {
          if (localStorage.getItem("Highscore")) {
            if (oldHigh > state.tick) {
              localStorage.setItem("Highscore", state.tick.toString());
            }
          } else {
            localStorage.setItem("Highscore", state.tick.toString());
          }
        }
      }
      time.innerText = state.tick.toString();
    }, 1e3);
  }

  return [time, startTimer, highscore];
}
