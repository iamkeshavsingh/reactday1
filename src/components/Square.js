import React,{ Component } from 'react';

class Square extends Component {

    render(){
        const style = {
            height : '100px',
            width : '100px',
            backgroundColor : 'white' 
        };
        return (
            <button onClick={()=>{this.props.click(this.props.nkey)}}  style={style}>{this.props.value}</button>
        );
    }
}

export default Square;

