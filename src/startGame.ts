import { chain } from "./chain";
import { disable } from "./click";
import { music, startSFX, directions } from "./consts";
import { createFlagToggle } from "./flag";
import { renderBoard } from "./renderBoard";
import { createTimer } from "./timer";
import { State } from "./types";

const [timeElement, startTimer, high] = createTimer();
document.body.append(timeElement)
document.body.append(high)
export function startGame(state: State, ay: number, ax: number) {
  music.loop = true;
  music.play();
  startSFX.play();
  state.gameStarted = true;
  for (let i = 0; i < state.mines; i++) {
    const x = Math.floor(Math.random() * state.width);
    const y = Math.floor(Math.random() * state.height);
    let noMinors = false;
    for (const [ox, oy] of directions) {
      if (y + oy < state.height && y + oy >= 0 && x + ox < state.width && x + ox >= 0) {
        if ((y + oy === ay && x + ox == ax) || (y === ay && x == ax)) {
          noMinors = true;
        }
      }
    }
    if (state.grid[y][x] === -1 || noMinors === true) {
      i--;
      console.log("Yesent");
    } else {
      state.grid[y][x] = -1;
      for (const [ox, oy] of directions) {
        if (y + oy < state.height && y + oy >= 0 && x + ox < state.width && x + ox >= 0) {
          if (state.grid[y + oy][x + ox] !== -1) {
            state.grid[y + oy][x + ox]++;
            console.log("yes");
          }
        }
      }
    }
  }

  disable(state, ay, ax);
  chain(state, ay, ax);
  startTimer(state);
  renderBoard(state);
  document.body.append(createFlagToggle(state))
}
