import { State } from "./types";

export function shake(state:State, count: number) {
    document.body.style.transform = "translate(" + (Math.random() * 3 - 1.5) + "%," + (Math.random() * 3 - 1.5) + "%)";
    if (count >= 0) {
      setTimeout(function () {
        shake(state, count - 1);
      }, 10);
    } else {
      document.body.style.transform = "";
    }
  }