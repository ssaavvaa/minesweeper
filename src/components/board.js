


class Board {
  constructor(numberOfRows,numberOfColumns,numberOfBombs){
    this._numberOfRows = numberOfRows;
    this._numberOfColumns = numberOfColumns;
    this._numberOfBombs = numberOfBombs;
    this._numberOfTiles = numberOfRows * numberOfColumns;
    this._playerBoard = Board.generatePlayerBoard(numberOfRows, numberOfColumns);
    this._bombBoard = Board.generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs);
}


playMove(rowIndex,columnIndex,index){
   this.flipTile(rowIndex,columnIndex)
      if(this.playerBoard[rowIndex][columnIndex] === 'B'){
         return "B"

      }else if(this.hasSafeTiles()){
        return console.log("awf")
      }else  return "N"
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


hasSafeTiles(){
 return this._numberOfTiles === this._numberOfBombs;
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




