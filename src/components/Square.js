import React,{ Component } from 'react';

class Square extends Component {

    render(){
        const style = {
            height : '100px',
            width : '100px',
            backgroundColor : 'white' 
        };
        return (
            <button  style={style}>{this.props.value}</button>
        );
    }
}

export default Square;

