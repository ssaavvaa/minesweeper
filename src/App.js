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
      bombs:0,
      currentGame:true
    }

    this.Game = new Board(this.state.rows,this.state.columns,this.state.bombs);
    this.getTileIndexes = this.getTileIndexes.bind(this)
    this.startGame = this.startGame.bind(this)
    this.restart = this.restart.bind(this)
    this.newGame = this.newGame.bind(this)
  }


  getTileIndexes(e){

    if(this.state.currentGame === true){

    let column = $(e.currentTarget).index()
    let row = $(e.currentTarget).parent().index()
    if(!$(e.currentTarget).text()){
    this.Game.flipTile(row,column)
    if(this.Game.playerBoard[row][column] === 'B'){

       $(e.currentTarget).css({background:"red",color:"white"}).text("B")
       $(".status").show().text("BOOOM!!! YOU LOST!")
       return this.Game.finishGame()

    }else if(this.Game._numberOfTiles == this.Game._numberOfBombs){
      this.setState({currentGame:false})
       $(e.currentTarget).css({background:"white",border:"1px solid black"}).text(this.Game.getNumberOfNeighborBombs(row,column))
       $(".status").show().text("Congrats! You are Winner!!")
          $( ".tile" ).each(function() {
           if(!$(this).text()){
            $(this).css({background:"blue",color:"white"}).text("B")
           }
          });

    }else  $(e.currentTarget).css({background:"white",border:"1px solid black"}).text(this.Game.getNumberOfNeighborBombs(row,column))
    }else return false
    }
    }

    startGame(){
      this.setState({currentGame:true})
    let rows = $(".rowInput").val()
    let columns = $(".columnInput").val()
    let bombs =  $(".bombInput").val()

     if(rows === "" || columns === "" || bombs === ""){
      return $(".error").show().text("cannot leave empty fields!")
    }
    if(!Number(rows)|| !Number(columns) || !Number(bombs)){
      return $(".error").show().text("can input only numbers!")
    }

    else if(rows > 10){
      return $(".error").show().text("Rows cannot be more than 10")
    }
    else if(columns > 15){
      return $(".error").show().text("Columns cannot be more than 15")
    }

    else if((rows * columns) <= bombs){
      return $(".error").show().text(`Bombs cannot be more than ${(rows * columns)-1}`)
    }
    else this.setState({rows,columns,bombs})
 
    $(".tile").text(null).css({background:"black",color:"black"})
    this.Game = new Board(rows,columns,bombs);
    $(".intro, .error").hide()
    $(".restart, .newGame").show()
    $(".board").fadeIn(600)
    }

    restart(){
      this.setState({currentGame:true})
      this.Game = new Board(this.state.rows,this.state.columns,this.state.bombs);
      $(".tile").text(null).css({background:"black",color:"black",border:"1px solid white"})
      $(".status").hide()
      $(".board").hide().slideDown()
    }

    newGame(){
      this.setState({currentGame:true})
      this.setState({rows:0,columns:0,bombs:0})
      $(".tile").text(null)
      $(".intro").show()
      $(".status, .restart, .newGame, .board").hide()
    }

  printBoard(numberOfRows,numberOfColumns){
    let board = []
    let spanKey = 0;
    let divKey = 1000;
        for(let i = 0; i < numberOfRows; i +=1 ){
            let row = []
              for(let i = 0; i < numberOfColumns; i+=1 ){
                spanKey +=1
             let span = <li onClick={this.getTileIndexes}  key = {spanKey} className="tile"></li>
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


      return (
        <div className = "wrapper">
        <div className="intro">
          <h1>MINESWEEPER</h1>
          <img className="bomb" src = "./bomb.png"></img>
          <h2 className="start">Lets start The Game!</h2>
          <p>Create you board...</p>
          <p>Number of Rows <span className = "helper">(Max 10)</span></p>
          <input className="rowInput"></input>
          <p>Number of Columns <span className = "helper">(Max 15)</span></p>
          <input className="columnInput"></input>
          <p>Number of Bombs</p>
          <input className="bombInput"></input>
          <p className="error"></p>
          <button className="startButton" onClick = {this.startGame}>Start the Game</button>
        </div>
        <div className= "board">
        {print()}
        </div>
        <p className="status">You LOST!</p>
        <button className="restart" onClick = {this.restart}>Restart</button>
        <button className="newGame" onClick = {this.newGame}>NEW GAME</button>

        </div>
      );
    }
  }





export default App;
