import React from 'react';

const List = (props) => {

    const data = props.data.map((ele,idx) => {
        return <li key={idx} onClick={()=>{props.click(idx)}}>{ele}</li>;
    });
    return(
        <ul>
            {data}
        </ul>
    );
}


export default List;