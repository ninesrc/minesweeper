import { State } from "./types";

export function shake(state:State, count: number) {
    document.body.style.transform = "translate(" + (Math.random() * 1 - 0.5) + "%," + (Math.random() * 1 - 0.5) + "%)";
    if (count >= 0) {
      setTimeout(function () {
        shake(state, count - 1);
      }, 7);
    } else {
      document.body.style.transform = "";
    }
  }
