import React, {FC, useEffect, useState} from 'react';
import '../main.scss';
import Button from "../../button/Button";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../store/store";
import {sellBitcoin} from "../../../store/userСurrencySlice";
import {addHistory} from '../../../store/historySlice';

const Sell: FC = () => {
    const [phrase, setPhrase] = useState<string>('')
    const dispatch = useDispatch();
    const price: number = useSelector((store: RootState) => store.history.bitcoinPrice);
    const bitcoins: number = useSelector((store: RootState) => store.userСurrency.bitcoin);
    useEffect(() => {
        if (price >= 10000) setPhrase("Prices are high, sell now!")
        if (price < 10000) setPhrase("Prices are low, are you sure you want to sell?")

    }, [price])
    const sellHandler = () => {
        if (bitcoins === 0) {
            alert("You not have bitcoins");
            return false;
        }
        dispatch(sellBitcoin(price))
        dispatch(addHistory('Sold 1 Bitcoin'))
    }
    return (
        <div className='main-content'>
            <span
                className='span-buy'>Bitcoin price is {price.toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")}$</span>
            <span className='span-buy'>{phrase}</span>
            <div className='buy-btn'>
                <Button param1={'Sell 1 Bitcoin'} param2={''} toggleFunction={sellHandler}/>
            </div>
        </div>
    );
};

export default Sell;