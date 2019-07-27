import $ from "jquery";


class Board {
  constructor(numberOfRows,numberOfColumns,numberOfBombs){
    this._numberOfRows = numberOfRows;
    this._numberOfColumns = numberOfColumns;
    this._numberOfBombs = numberOfBombs;
    this._numberOfTiles = numberOfRows * numberOfColumns;
    this._playerBoard = Board.generatePlayerBoard(numberOfRows, numberOfColumns);
    this._bombBoard = Board.generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs);
}

finishGame(){



   for(let i = 0; i < this._playerBoard.length; i +=1){
      for(let z = 0; z < this._playerBoard[0].length; z +=1){
         if(this._bombBoard[i][z] == "B"){
         let span = $(".board").children()[i].children[z]
         span.textContent = "B"
         span.style.background = "red"
         span.style.color = "white"
      }else if(this._bombBoard[i][z] !== "B"){ 
      let span = $(".board").children()[i].children[z]
      let number = this.getNumberOfNeighborBombs(i,z)
         span.textContent = number
         span.style.background = "white"
         span.style.color = "black"
         span.style.border = "1px solid black"

   }

}
}
}





 flipTile(rowIndex,columnIndex){
   if(this._bombBoard[rowIndex][columnIndex] === 'B'){
      return this._playerBoard[rowIndex][columnIndex] = 'B'
  } else this._playerBoard[rowIndex][columnIndex] = this.getNumberOfNeighborBombs(rowIndex,columnIndex)
      return this._numberOfTiles--
  }


get playerBoard() {
  return this._playerBoard
}


getNumberOfNeighborBombs(rowIndex,columnIndex){
let neighborOffsets = [
[-1,-1], [-1,0], [-1,1], [0,-1], [0,1], [1,-1], [1,0], [1,1]]
   const numberOfRows = this._bombBoard.length
   const numberOfColumns = this._bombBoard[0].length
   let numberOfBombs = 0;
neighborOffsets.forEach(offset => {
   const neighborRowIndex = rowIndex + offset[0];
   const neighborColumnIndex = columnIndex + offset[1];
   if(neighborRowIndex >= 0 && neighborRowIndex < numberOfRows
      && neighborColumnIndex >= 0 && neighborColumnIndex < numberOfColumns ){
         if(this._bombBoard[neighborRowIndex][neighborColumnIndex] === "B") {
             numberOfBombs +=1
           }
}})
 return numberOfBombs;
}



static generatePlayerBoard(numberOfRows,numberOfColumns){
   const board = []
   for(let i = 0; i < numberOfRows; i++ ){
       const row = []
     for(let i = 0; i < numberOfColumns; i++ ){
         row.push(' ')
        }
       board.push(row)
   }
   return board
 }


static generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs){
let board = []
for(let i = 0; i < numberOfRows; i++ ){
   const row = []
   for(let i = 0; i < numberOfColumns; i++ ){
     row.push(' ')
   }
   board.push(row)
}

let numberOfBombsPlaced = 0;

while (numberOfBombsPlaced < numberOfBombs) {
   const randomRowIndex = Math.floor(Math.random() * numberOfRows);
   const randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
   if(board[randomRowIndex][randomColumnIndex] !== 'B'){
      board[randomRowIndex][randomColumnIndex] = 'B';
      numberOfBombsPlaced +=1
   }}
return board
}

  }

export default Board;




