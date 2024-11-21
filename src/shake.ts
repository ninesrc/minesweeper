import { State } from "./types";

export function shake(state:State, count: number) {
    document.body.style.transform = "translate(" + (Math.random() * 2 - 1) + "%," + (Math.random() * 2 - 1) + "%)";
    if (count >= 0) {
      setTimeout(function () {
        shake(state, count - 1);
      }, 7);
    } else {
      document.body.style.transform = "";
    }
  }
