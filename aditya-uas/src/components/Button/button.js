import React from 'react';

const Button = ({onClick, title , loading}) => {
    if(loading){
        return <button className="btn disable">loading...</button>
    }
    return (
        <button className="btn" onClick={onClick}>{title}</button>
    )
}

export default Button;