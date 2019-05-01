import React from 'react';
import Board from "./components/board"
import $ from "jquery";
import './App.css';


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      rows:0,
      columns:0,
      bombs:0
    }

    this.Game = new Board(this.state.rows,this.state.columns,this.state.bombs);
    this.getTileIndexes = this.getTileIndexes.bind(this)
    this.startGame = this.startGame.bind(this)
    this.restart = this.restart.bind(this)
    this.newGame = this.newGame.bind(this)
  }

  getTileIndexes(e){
    let column = $(e.currentTarget).index()
    let row = $(e.currentTarget).parent().index()
    console.log(row)
    console.log(column)
    this.Game.playMove(row,column)
    console.log(this.Game.playerBoard)
    if(this.Game.playerBoard[row][column] == 'B'){
      $(e.currentTarget).css({background:"red",color:"white"}).text("B")
      $(".status").show().text("NO!!! YOU LOST!")
  
    }else $(e.currentTarget).css({background:"white",border:"1px solid black"}).text(this.Game.getNumberOfNeighborBombs(row,column))
    }

    startGame(){
    let rows = $(".rowInput").val()
    let columns = $(".columnInput").val()
    let bombs =  $(".bombInput").val()
    this.setState({rows:rows})
    this.setState({columns:columns})
    this.setState({bombs:bombs})
    $(".tile").css({background:"black",color:"black"})
   
    this.Game = new Board(rows,columns,bombs);
    $(".intro").hide()
    rows = ""
    columns = ""
    bombs =  ""
    $(".restart").show()
    $(".newGame").show()

    }

    restart(){
      this.Game = new Board(this.state.rows,this.state.columns,this.state.bombs);
      $(".tile").css({background:"black",color:"black",border:"1px solid white"})
      $(".status").hide()

    }

    newGame(){
      this.setState({rows:0})
      this.setState({columns:0})
      this.setState({bombs:0})
      $(".intro").show()
      $(".status").hide()
      $(".restart").hide()
      $(".newGame").hide()
    }

  printBoard(numberOfRows,numberOfColumns){
    let board = []
    let spanKey = 0;
    let divKey = 1000;
        for(let i = 0; i < numberOfRows; i +=1 ){
            let row = []
              for(let i = 0; i < numberOfColumns; i+=1 ){
                spanKey +=1
             let span = <span onClick={this.getTileIndexes}  key = {spanKey} className="tile"></span>
                row.push(span)
           }
           divKey +=1
        board.push(<div className = "row" key= {divKey }>{row}</div>)
        }
        return board
    }



    render() {
const print = () => {
  if(this.state.rows === 0 || this.state.columns === 0 || this.state.bombs === 0){
    return false
  }else return this.printBoard(this.state.rows,this.state.columns)
}


      console.log(this.state.rows)
      return (
        <div className = "wrapper">
        <div className="intro">
          <h1>Lets start The Game!</h1>
          <p>Create you board...</p>
          <p>Number of Rows</p>
          <input className="rowInput"></input>
          <p>Number of Columns</p>
          <input className="columnInput"></input>
          <p>Number of Bombs</p>
          <input className="bombInput"></input>
          <button className="startButton" onClick = {this.startGame}>Start the Game</button>
        </div>
        <div className= "board">
        {print()}
        <p className="status">You LOST!</p>
        <button className="restart" onClick = {this.restart}>Restart</button>
        <button className="newGame" onClick = {this.newGame}>NEW GAME</button>

        </div>
        </div>
      );
    }
  }



export default App;
