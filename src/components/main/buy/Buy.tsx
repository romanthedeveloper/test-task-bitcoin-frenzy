import React, {FC, useEffect, useState} from 'react';
import '../main.scss';
import Button from "../../button/Button";
import {buyBitcoin} from '../../../store/userСurrencySlice';
import {addHistory} from '../../../store/historySlice';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from "../../../store/store";


const Buy: FC = () => {
    const [phrase, setPhrase] = useState<string>('')
    const dispatch = useDispatch();
    const price: number = useSelector((store: RootState) => store.history.bitcoinPrice);
    const dollars: number = useSelector((store: RootState) => store.userСurrency.dollars);
    useEffect(() => {
        if (price >= 10000) setPhrase("Prices are high, are you sure that you want to buy?")
        if (price < 10000) setPhrase("Prices are low, buy more!")

    }, [price])
    const buyHandler = () => {
        if (dollars < price) {
            alert("The amount of dollars is not enough to buy");
            return false;
        }
        dispatch(buyBitcoin(price))
        dispatch(addHistory('Purchased 1 Bitcoin'))
    }
    return (
        <div className='main-content'>
            <span
                className='span-buy'>Bitcoin price is {price.toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")}$</span>
            <span className='span-buy'>{phrase}</span>
            <div className='buy-btn'>
                <Button param1={'Buy 1 Bitcoin'} param2={''} toggleFunction={buyHandler}/>
            </div>
        </div>
    );
};

export default Buy;