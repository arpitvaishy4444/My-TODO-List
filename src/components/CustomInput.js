import React from 'react';

const CustomInput = (props)=>{
    return(
        <div className='inputWrapper'>
            <label>{props.task}</label>
            <input value={props.value} type="text" className='inputForm' placeholder={props.placeholder} onChange={props.change}/>
             </div>
    )
};

export default CustomInput;