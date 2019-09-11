import React,{ Component } from 'react';
import Square from './Square';

class Board extends Component {

  constructor(props){
    super(props);
    this.state = {
      squares : ['X','','','','X','','','','0'],
      isValueX : true
    };
  }
  createSquare = (i) => {
    return <Square value={this.state.squares[i]}/>
  };

  

  clickHandler = () => {
    
  };

  render(){
    return (
      <div>
        <div>
          {this.createSquare(0)}
          {this.createSquare(1)}
          {this.createSquare(2)}
        </div>
        <div>
          {this.createSquare(3)}
          {this.createSquare(4)}
          {this.createSquare(5)}
        </div>
        <div>
          {this.createSquare(6)}
          {this.createSquare(7)}
          {this.createSquare(8)}
        </div>
      </div>
    );
  }
}
export default Board;
