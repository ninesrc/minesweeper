import { disable } from "./click";
import { directions, chainSFX } from "./consts";
import { shake } from "./shake";
import { State } from "./types";

export function chain(state: State , y: number, x: number) {
    shake(state, 40);
    for (const [ox, oy] of directions) {
      if (y + oy < state.height && y + oy >= 0 && x + ox < state.width && x + ox >= 0) {
        if (state.papayaWhip[y + oy][x + ox] === 0) {
          disable(state, y + oy, x + ox);
          if (state.grid[y + oy][x + ox] === 0) {
            chain(state, y + oy, x + ox);
          }
        }
      }
    }
    chainSFX.play();
  }