import { renderBoard } from "./renderBoard";
import { State } from "./types";

let beheight: number = +prompt("Height?-min 4-max 30")!;
beheight = Math.floor(beheight)
console.log(beheight)
if (beheight > 30) {
  beheight = 30
} else {
  if (beheight < 4 || Number.isNaN(beheight) === true) {
    beheight = 4
  }
}

let bewidth: number = +prompt("Width?-min 4-max 30")!;
bewidth = Math.floor(bewidth)
console.log(bewidth)
if (bewidth > 30) {
  bewidth = 30
} else {
  if (bewidth < 4 || Number.isNaN(bewidth) === true) {
    bewidth = 4
  }
}

let bemines: number = +prompt("Mines?")!;
bemines = Math.floor(bemines)
console.log(bemines)
if (bemines > bewidth*beheight-9) {
  bemines = bewidth*beheight-9
} else {
  if (bemines < 0 || Number.isNaN(bemines) === true) {
    bemines = Math.floor((bewidth*beheight-9)/6.9)
  }
}

function createState(width: number, height: number, mines: number): State {
  return {
    board: document.createElement("div"),
    gameStarted: false,
    grid: Array(height)
    .fill(0)
    .map(() => Array(width).fill(0)),
    height,
    width,
    papayaWhip: Array(height)
    .fill(0)
    .map(() => Array(width).fill(0)),
    mines,
    minesLeft: mines,
    minesLeftElement: document.createElement("div"),
    onOff: false,
    squares: height * width - mines,
    thing: 0,
    tick: 0,
    won: 0,
    events: document.createElement("div"),
  }
}

const state = createState(bewidth,beheight,bemines)
document.body.append(state.events)
state.events.innerText = "E"
document.body.append(state.minesLeftElement)
state.minesLeftElement.innerText = "Press to start"
document.body.append(state.board)
renderBoard(state)

window.addEventListener("click", function () {
  if (state.won !== 0) {
    if (state.thing > 0) {
      window.location.reload();
    } else {
      state.thing++;
    }
  }
});
