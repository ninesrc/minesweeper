import { State } from "./types";

export function restart(state: State) {
    if (state.won === true) {
      state.events.innerText = "Congrats, you get notong. Click to start over";
      state.events.style.color = "green";
    } else {
      state.events.innerText = "Congrats, you suck. Click to retry";
      state.events.style.color = "red";
    }
  }