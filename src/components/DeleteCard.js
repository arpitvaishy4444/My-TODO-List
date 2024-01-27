import React from 'react';
import "./DeleteCard.css"


const DeleteCard = (props) => {
    return (
        <div className='mains' style={{backgroundColor:props.complete===true && 'grey',color:props.complete===true && 'white'}} >
            <h3>{props.title}</h3>
            <p>{props.description}</p>

        </div>
    );
};

export default DeleteCard;