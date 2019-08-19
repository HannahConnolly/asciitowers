(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){e.exports=a(24)},24:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(6),c=a.n(l),i=a(7),s=a(8),u=a(10),o=a(9),m=a(11),d=a(1),h=a.n(d),E=(a(3),function(e){if(!0===e.win)return r.a.createElement("h2",null,"You win! turns: ",e.turns);if(0!==e.num){for(var t="I",a=0;a<e.num-1;a++)t+="II";return r.a.createElement("h2",null," Hand: ",t)}return r.a.createElement("h2",null," Hand: ")}),f=function(e){return r.a.createElement("h2",null," Turns: ",e.turn)},b=function(e){return 0===e.alert?r.a.createElement("div",null,r.a.createElement("h3",null,".")):"EMPTY"===e.alert?r.a.createElement("h2",null,"Error! column empty"):"NUM_LARGER"===e.alert?r.a.createElement("h2",null,"Error! Number in hand is larger than stack"):"WIN"===e.alert?r.a.createElement("h2",null,"Winner Winner Chicken Dinner!"):r.a.createElement("div",null)},p=function(){return r.a.createElement("div",null,r.a.createElement("h3",null,"Instructions"),r.a.createElement("p",null,"In the Tower of Hanoi puzzle a player attempts to move a large pile of disks, known as the Tower, from the leftmost peg to the rightmost on the puzzle board. The rules of the puzzle state that the player can only move one disk per turn and can never place a larger disk onto a smaller one at any time."),r.a.createElement("a",{href:"http://www.chessandpoker.com/tower-of-hanoi.html"},"Rules and further reading"),r.a.createElement("br",null),r.a.createElement("a",{href:"https://semantic-ui.com/"},"Created with semantic UI"),r.a.createElement("br",null),r.a.createElement("p",null,"created by Hannah Connolly"))},v=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(l)))).state={board:[[1,2,3,4,5],[":",":",":",":",":"],[":",":",":",":",":"]],hand:0,turn:0},a.displayTower=function(e){return e.map(function(e){if(":"===e)return r.a.createElement("div",{key:Math.random()},":");for(var t="I",a=0;a<e-1;a++)t+="II";return r.a.createElement("div",{key:Math.random()},t)})},a.buttonClick=function(e){if(!0!==a.state.win){var t,n;if(a.setState({alert:0}),0===a.state.hand){if(":"===a.state.board[e][4]&&0===a.state.hand)return void a.setState({alert:"EMPTY"});for(n=0;":"===a.state.board[e][n]&&n<5;)n++;a.setState({hand:a.state.board[e][n]}),(t=a.state.board)[e][n]=":",a.setState({board:t})}else{for(n=0;":"===a.state.board[e][n]&&n<5;){if(4===++n&&":"===a.state.board[e][n])return(t=a.state.board)[e][4]=a.state.hand,a.setState({board:t}),a.setState({hand:0}),a.setState({turn:a.state.turn+1}),void a.checkWin();a.render()}if(a.state.hand<a.state.board[e][n]&&0!==n)return(t=a.state.board)[e][n-1]=a.state.hand,a.setState({board:t}),a.setState({hand:0}),a.setState({turn:a.state.turn+1}),void a.checkWin();a.setState({alert:"NUM_LARGER"}),a.render()}a.state.win,a.render()}},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{className:"ui segment"},r.a.createElement(h.a,{className:"hand"},r.a.createElement(E,{num:this.state.hand})),r.a.createElement("div",{className:"ui divider"}),r.a.createElement("div",{className:"ui equal width center aligned padded grid"},r.a.createElement("div",{className:"three wide column","text-align":"center","justify-content":"center"},this.displayTower(this.state.board[0]),r.a.createElement("br",null),r.a.createElement("button",{className:"ui button",onClick:function(t){return e.buttonClick(0,t)}},"Interact")),r.a.createElement("div",{className:"three wide column"},r.a.createElement("div",{"justify-content":"center","align-items":"center","text-align":"center"},this.displayTower(this.state.board[1])),r.a.createElement("br",null),r.a.createElement("button",{className:"ui button",onClick:function(t){return e.buttonClick(1,t)}},"Interact")),r.a.createElement("div",{className:"three wide column"},this.displayTower(this.state.board[2]),r.a.createElement("br",null),r.a.createElement("button",{className:"ui button",onClick:function(t){return e.buttonClick(2,t)}},"Interact"))),r.a.createElement("div",{className:"ui divider"}),r.a.createElement(h.a,{className:"hand"},r.a.createElement(f,{turn:this.state.turn}))),r.a.createElement(h.a,{className:"hand"},r.a.createElement(b,{alert:this.state.alert})),r.a.createElement("div",{className:"ui segment"},r.a.createElement(p,null)))}},{key:"checkWin",value:function(){1===this.state.board[2][0]&&this.setState({alert:"WIN"})}}]),t}(r.a.Component);var w=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("h1",null,"Towers of Hanoi")),r.a.createElement(v,null))};c.a.render(r.a.createElement(w,null),document.querySelector("#root"))},3:function(e,t,a){}},[[12,1,2]]]);
//# sourceMappingURL=main.acc5402a.chunk.js.map