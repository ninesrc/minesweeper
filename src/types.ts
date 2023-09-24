export type Grid = Array<Array<number>>

export type State = {
    gameStarted: boolean
    grid: Grid
    papayaWhip: Grid
    board: HTMLDivElement
    won: boolean | number
    minesLeft: number
    tick: number
    width: number
    height: number
    onOff: boolean
    squares: number
    thing: number
    minesLeftElement: HTMLDivElement
    mines: number
    events: HTMLDivElement
}