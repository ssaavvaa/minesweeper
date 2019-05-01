
import  Board  from './board';




class Game extends Board {
  constructor(numberOfRows, numberOfColumns,numberOfBombs){
     super(numberOfRows, numberOfColumns, numberOfBombs)
     this._board = new Board(numberOfRows, numberOfColumns, numberOfBombs);
  }





  }

  export default Game



