import { winSFX, music } from "./consts";
import { renderBoard } from "./renderBoard";
import { restart } from "./restart";
import { State } from "./types";

// winCon
export function endGame(state: State) {
    if (state.squares === 0) {
      state.won = true;
      winSFX.play();
      music.pause();
      renderBoard(state);
      restart(state);
    }
  }