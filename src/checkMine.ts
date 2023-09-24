import { chain } from "./chain";
import { disable } from "./click";
import { music, dedSFX, revealSFX } from "./consts";
import { renderBoard } from "./renderBoard";
import { restart } from "./restart";
import { State } from "./types";

// noMines
export function checkMine(state: State, y: number, x: number ) {
    if (state.grid[y][x] === -1) {
        state.won = false;
      music.pause();
      dedSFX.play();
      renderBoard(state);
      restart(state);
    } else {
      revealSFX.play();
      disable(state, y, x );
      if (state.grid[y][x] === 0) {
        chain(state, y, x);
      }
      renderBoard(state);
    }
  }
  
  