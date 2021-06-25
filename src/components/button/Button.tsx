import React, {FC} from 'react';
import './button.scss'

interface MyProps {
    toggleFunction: () => void,
    param1: string,
    param2: string
}

const Button: FC<MyProps> = ({param1, param2, toggleFunction}) => {

    const handlerClick = (): void => {
        toggleFunction()
    }
    return (
        <button className='general-btn' onClick={handlerClick}>
            <p>
                {param1}
            </p>
            <p>
                {param2}
            </p>
        </button>
    );
};

export default Button;