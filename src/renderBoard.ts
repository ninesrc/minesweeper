import { checkMine } from "./checkMine";
import { colors } from "./consts";
import { flag } from "./flag";
import { startGame } from "./startGame";
import { State } from "./types";

//loadBoard
export function renderBoard(state: State) {
  for (let i = 0; i < state.height; i++) {
    state.board.firstChild?.remove();
  }
  for (let y = 0; y < state.height; y++) {
    const row = document.createElement("div");
    row.style.display = "flex";
    state.board.append(row);
    for (let x = 0; x < state.width; x++) {
      console.log("ye");
      const cell = document.createElement("div");
      row.append(cell);
      cell.addEventListener("click", function () {
        if (state.won === 0) {
          if (state.gameStarted === false) {
            startGame(state, y, x);
            state.minesLeftElement.innerText = state.minesLeft.toString();
          } else {
            if (state.onOff === false) {
              if (state.papayaWhip[y][x] == 0) {
                checkMine(state, y, x);
              }
            } else {
              if (state.papayaWhip[y][x] !== 1) {
                flag(state, y, x);
              }
            }
          }
        }
      });
      cell.addEventListener("contextmenu", function (e) {
        if (state.won === 0) {
          console.log("right");
          e.preventDefault();
          if (state.papayaWhip[y][x] !== 1) {
            flag(state, y, x);
          }
        }
      });
      cell.style.width = "30px";
      cell.style.height = "30px";
      cell.style.borderWidth = "2px";
      cell.style.borderColor = "grey";
      cell.style.borderStyle = "solid";
      cell.style.display = "flex";
      cell.style.justifyContent = "center";
      cell.style.alignItems = "center";
      if (state.onOff === true) {
        cell.innerText = ".";
      }
      if (state.papayaWhip[y][x] === 2) {
        if (state.won === 0) {
          cell.innerText = "🚩";
        }
        if (state.won === false) {
          if (state.grid[y][x] !== -1) {
            cell.style.color = "red";
            cell.innerText = "X";
          } else {
            cell.innerText = "🚩";
          }
        } else {
          if (state.grid[y][x] === -1 && state.won === true) {
            cell.innerText = "🚩";
            cell.style.background = "green";
          }
        }
      } else {
        if (state.papayaWhip[y][x] === 1) {
          if (state.grid[y][x] !== 0) {
            cell.innerText = state.grid[y][x].toString();
          }
          cell.style.background = "lightgrey";
          cell.style.color = colors[state.grid[y][x]];
        } else {
          if (state.won === false) {
            if (state.grid[y][x] === -1) {
              cell.innerText = "💣";
              cell.style.background = "red";
            }
          } else {
            if (state.grid[y][x] === -1 && state.won === true) {
              cell.innerText = "🚩";
              cell.style.background = "green";
            }
          }
        }
      }
    }
  }
}
