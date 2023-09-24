import { State } from "./types";
import { endGame } from "./win";

export function disable(state:State,y: number, x: number /*, div*/) {
    state.squares--;
    state.papayaWhip[y][x] = 1;
    endGame(state);
}