import React from 'react';

const CustomButton = ({name,bg,color,click}) => {
    return (
        <div>
            <button className='btn' style={{backgroundColor:bg, color:color}} onClick={click} >{name}</button>
        </div>
    );
};

export default CustomButton; 