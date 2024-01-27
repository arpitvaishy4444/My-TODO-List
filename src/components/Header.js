import React from 'react';
import CustomButton from './CustomButton';

const Header = ({click}) => {
    
    return (
        <div className='header'>
            <h1>Task manager</h1>
            <div className="btnWrapper">
                <CustomButton name = 'Add' color='white' bg='#1877F2' click={click} />
                
            </div>
            
        </div>
    );
};

export default Header;