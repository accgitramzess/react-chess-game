import {ChessCell} from "./ChessCell"
import {ChessCellColor} from "./ChessCellColor"

export class ChessBoard {

    cells: ChessCell [] [] = []

    public initCells() {
        for (let i = 0; i < 8; i++) {
              const row: ChessCell [] = []
              for (let j = 0; j < 8; j++) {
                    if ((i + j) % 2 !== 0) {
                      row.push(new ChessCell(j, i, ChessCellColor.BLACK)) // Черные ячейки
                    } else {
                      row.push(new ChessCell(j, i, ChessCellColor.WHITE)) // белые
                    }
              }
              this.cells.push(row);
        }
    }
}