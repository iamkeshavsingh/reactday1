import React,{ Component } from 'react';
import Square from './Square';

class Board extends Component {

  
  createSquare = (i) => {
    return <Square value={this.props.squares[i]} nkey={i} click={this.props.click}/>
  };

  render(){
    const style = {
      display : 'flex',
      height : '100px',
      width : '300px'
    };
    return (
      <div>
        <div style={style}>
          {this.createSquare(0)}
          {this.createSquare(1)}
          {this.createSquare(2)}
        </div>
        <div style={style}>
          {this.createSquare(3)}
          {this.createSquare(4)}
          {this.createSquare(5)}
        </div>
        <div style={style}>
          {this.createSquare(6)}
          {this.createSquare(7)}
          {this.createSquare(8)}
        </div>
      </div>
    );
  }
}
export default Board;