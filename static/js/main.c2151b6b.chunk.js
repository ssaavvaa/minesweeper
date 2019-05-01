(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(18)},16:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),s=a(6),o=a.n(s),i=(a(16),a(3)),c=a(4),l=a(8),u=a(7),m=a(2),h=a(9),b=a(0),d=a.n(b),f=function(){function e(t,a,r){Object(i.a)(this,e),this._numberOfRows=t,this._numberOfColumns=a,this._numberOfBombs=r,this._numberOfTiles=t*a,this._playerBoard=e.generatePlayerBoard(t,a),this._bombBoard=e.generateBombBoard(t,a,r)}return Object(c.a)(e,[{key:"flipTile",value:function(e,t){return"B"===this._bombBoard[e][t]?this._playerBoard[e][t]="B":(this._playerBoard[e][t]=this.getNumberOfNeighborBombs(e,t),this._numberOfTiles--)}},{key:"getNumberOfNeighborBombs",value:function(e,t){var a=this,r=this._bombBoard.length,n=this._bombBoard[0].length,s=0;return[[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]].forEach(function(o){var i=e+o[0],c=t+o[1];i>=0&&i<r&&c>=0&&c<n&&"B"===a._bombBoard[i][c]&&(s+=1)}),s}},{key:"playerBoard",get:function(){return this._playerBoard}}],[{key:"generatePlayerBoard",value:function(e,t){for(var a=[],r=0;r<e;r++){for(var n=[],s=0;s<t;s++)n.push(" ");a.push(n)}return a}},{key:"generateBombBoard",value:function(e,t,a){for(var r=[],n=0;n<e;n++){for(var s=[],o=0;o<t;o++)s.push(" ");r.push(s)}for(var i=0;i<a;){var c=Math.floor(Math.random()*e),l=Math.floor(Math.random()*t);"B"!==r[c][l]&&(r[c][l]="B",i+=1)}return r}}]),e}(),p=(a(17),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={rows:0,columns:0,bombs:0,currentGame:!0},a.Game=new f(a.state.rows,a.state.columns,a.state.bombs),a.getTileIndexes=a.getTileIndexes.bind(Object(m.a)(a)),a.startGame=a.startGame.bind(Object(m.a)(a)),a.restart=a.restart.bind(Object(m.a)(a)),a.newGame=a.newGame.bind(Object(m.a)(a)),a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"getTileIndexes",value:function(e){if(!0===this.state.currentGame){var t=d()(e.currentTarget).index(),a=d()(e.currentTarget).parent().index();if(d()(e.currentTarget).text())return!1;this.Game.flipTile(a,t),"B"===this.Game.playerBoard[a][t]?(d()(e.currentTarget).css({background:"red",color:"white"}).text("B"),d()(".status").show().text("BOOOM!!! YOU LOST!")):this.Game._numberOfTiles==this.Game._numberOfBombs?(this.setState({currentGame:!1}),d()(e.currentTarget).css({background:"white",border:"1px solid black"}).text(this.Game.getNumberOfNeighborBombs(a,t)),d()(".status").show().text("Congrats! You are Winner!!")):d()(e.currentTarget).css({background:"white",border:"1px solid black"}).text(this.Game.getNumberOfNeighborBombs(a,t))}}},{key:"startGame",value:function(){this.setState({currentGame:!0});var e=d()(".rowInput").val(),t=d()(".columnInput").val(),a=d()(".bombInput").val();return""===e||""===t||""===a?d()(".error").show().text("cannot leave empty fields!"):Number(e)&&Number(t)&&Number(a)?e>10?d()(".error").show().text("Rows cannot be more than 10"):t>15?d()(".error").show().text("Columns cannot be more than 15"):e*t<=a?d()(".error").show().text("Bombs cannot be more than ".concat(e*t-1)):(this.setState({rows:e}),this.setState({columns:t}),this.setState({bombs:a}),d()(".tile").css({background:"black",color:"black"}),this.Game=new f(e,t,a),d()(".board").show(),d()(".intro").hide(),d()(".error").hide(),d()(".restart").show(),d()(".newGame").show(),void d()(".tile").on("click",function(){return!0})):d()(".error").show().text("can input only numbers!")}},{key:"restart",value:function(){this.setState({currentGame:!0}),this.Game=new f(this.state.rows,this.state.columns,this.state.bombs),d()(".tile").css({background:"black",color:"black",border:"1px solid white"}),d()(".status").hide()}},{key:"newGame",value:function(){this.setState({currentGame:!0}),this.setState({rows:0}),this.setState({columns:0}),this.setState({bombs:0}),d()(".intro").show(),d()(".status").hide(),d()(".restart").hide(),d()(".newGame").hide(),d()(".board").hide(),d()(".tile").on("click",function(){return!0})}},{key:"printBoard",value:function(e,t){for(var a=[],r=0,s=1e3,o=0;o<e;o+=1){for(var i=[],c=0;c<t;c+=1){r+=1;var l=n.a.createElement("span",{onClick:this.getTileIndexes,key:r,className:"tile"});i.push(l)}s+=1,a.push(n.a.createElement("div",{className:"row",key:s},i))}return a}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"wrapper"},n.a.createElement("div",{className:"intro"},n.a.createElement("h1",null,"MINESWEEPER"),n.a.createElement("h2",null,"Lets start The Game!"),n.a.createElement("p",null,"Create you board..."),n.a.createElement("p",null,"Number of Rows ",n.a.createElement("span",{className:"helper"},"(Max 10)")),n.a.createElement("input",{className:"rowInput"}),n.a.createElement("p",null,"Number of Columns ",n.a.createElement("span",{className:"helper"},"(Max 15)")),n.a.createElement("input",{className:"columnInput"}),n.a.createElement("p",null,"Number of Bombs"),n.a.createElement("input",{className:"bombInput"}),n.a.createElement("p",{className:"error"}),n.a.createElement("button",{className:"startButton",onClick:this.startGame},"Start the Game")),n.a.createElement("div",{className:"board"},0!==e.state.rows&&0!==e.state.columns&&0!==e.state.bombs&&e.printBoard(e.state.rows,e.state.columns),n.a.createElement("p",{className:"status"},"You LOST!"),n.a.createElement("button",{className:"restart",onClick:this.restart},"Restart"),n.a.createElement("button",{className:"newGame",onClick:this.newGame},"NEW GAME")))}}]),t}(n.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,1,2]]]);
//# sourceMappingURL=main.c2151b6b.chunk.js.map