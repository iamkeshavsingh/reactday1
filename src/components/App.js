import React,{ Component } from 'react';
import Board from './Board';
import List from './List';

class Game extends Component {
    constructor(props){
        super(props);
        this.state = {
          squares : Array(9).fill(null),
          isValueX : true,
          moves : [],
          history : [Array(9).fill(null)],
          posTrack : [true]
        };
    }

    clickHandler = (idx) => {
        const dummySqu = this.state.squares.slice();
        const chance = this.state.isValueX ? 'X' : '0';
        dummySqu[idx] = chance;
        const dummyMoves = this.state.moves.slice();
        const msg = `${chance} takes chance to idx to ${idx}`;
        dummyMoves.push(msg);
        const his = this.state.history.slice();
        his.push(dummySqu);
        const dummyPos = this.state.posTrack.slice();
        dummyPos.push(!this.state.isValueX);
        const winner = this.winnerChecker(dummySqu);
        console.log(winner);
        if(winner != null){
            alert(winner);
        }
        this.setState({
          squares : dummySqu,
          isValueX : !this.state.isValueX,
          moves : dummyMoves,
          history : his,
          posTrack : dummyPos
        });
    };

    winnerChecker = (curr) => {
        const help = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ];

        for(let i=0;i<help.length;i++){
            const [a,b,c] = help[i];
            if(curr[a]===curr[b] && curr[a]===curr[c] && curr[a]){
                return curr[a];
            }
        }

        return null;
    };

    listHandler = (idx) => {

        console.log(this.state.posTrack.slice(-1));

        const dummyMov = this.state.moves.slice(0,idx);
        const dummyHis = this.state.history.slice(0,idx+1);
        const posTrack = this.state.posTrack.slice(0,idx+1);


        this.setState({
            moves : dummyMov,
            history : dummyHis,
            squares : dummyHis.slice(-1)[0],
            isValueX : posTrack.slice(-1)[0],
            posTrack : posTrack
        });
    };

    render(){
        return ( 
            <div>
                <div>
                    <Board squares={this.state.squares} click={this.clickHandler}/>
                </div>
                <div>
                    <List data={this.state.moves} click={this.listHandler}/>
                </div>
            </div>
        );
    };
}
 
export default Game;