import React, {FC} from 'react';
import '../main.scss';
import Button from "../../button/Button";
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from "../../../store/store";
import {increaseBitcoin, decreaseBitcoin, addHistory} from '../../../store/historySlice';

const Bitcoin: FC = () => {
    const dispatch = useDispatch();
    const price: number = useSelector((store: RootState) => store.history.bitcoinPrice)
    const pricePlus = () => {
        dispatch(increaseBitcoin())
        dispatch(addHistory('Increased Bitcoin price by 1,000$'))
    }
    const priceMinus = () => {
        if (price === 1000) {
            alert('Bitcoin price cannot be below 1,000$');
            return false;
        }
        dispatch(decreaseBitcoin())
        dispatch(addHistory('Decreased Bitcoin price by 1,000$'))
    }
    return (
        <div className='main-content'>
            <span
                className='span-bitcoin'>Bitcoin price is {price.toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")}$</span>
            <div className='bitcoin-btn'>
                <Button param1={'Increase Bitcoin'} param2={'Price (+1,000)'} toggleFunction={pricePlus}/>
                <Button param1={'Decrease Bitcoin'} param2={'Price (-1,000)'} toggleFunction={priceMinus}/>
            </div>

        </div>
    );
};

export default Bitcoin;