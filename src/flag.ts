import { undoSFX, flagSFX } from "./consts";
import { renderBoard } from "./renderBoard";
import { State } from "./types";

export function flag(state: State,y: number, x: number /*, div*/) {
    if (state.papayaWhip[y][x] === 2) {
      undoSFX.play();
      state.papayaWhip[y][x] = 0;
      state.minesLeft += 1;
      state.minesLeftElement.innerText = state.minesLeft.toString()
    } else {
      flagSFX.play();
      state.papayaWhip[y][x] = 2;
      state.minesLeft -= 1;
      state.minesLeftElement.innerText = state.minesLeft.toString()
    }
    renderBoard(state);
  }

  //Falg

export function createFlagToggle(state: State) {
  const flagButton = document.createElement("div");
  flagButton.innerText = "🚩";
  flagButton.style.width = "50px";
  flagButton.style.height = "50px";
  flagButton.style.display = "flex";
  flagButton.style.alignItems = "center";
  flagButton.style.justifyContent = "center";
  flagButton.style.borderWidth = "3px";
  flagButton.style.borderColor = "grey";
  flagButton.style.borderStyle = "solid";

  flagButton.addEventListener("click", function () {
    if (state.onOff === false) {
      state.onOff = true;
      flagButton.style.background = "green";
    } else {
      state.onOff = false;
      flagButton.style.background = "white";
    }
    renderBoard(state);
  });

  return flagButton;
}