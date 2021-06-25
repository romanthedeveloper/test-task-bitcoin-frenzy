import React, {FC} from 'react';
import '../main.scss';
import Button from "../../button/Button";
import {incrementDeposit, decrementDeposit} from '../../../store/userСurrencySlice';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from "../../../store/store";
import {addHistory} from '../../../store/historySlice';


const Wallet: FC = () => {
    const dispatch = useDispatch();
    const deposit: number = useSelector((store: RootState) => store.userСurrency.dollars);
    const bitcoins: number = useSelector((store: RootState) => store.userСurrency.bitcoin);
    const depositPlus = () => {
        dispatch(incrementDeposit())
        dispatch(addHistory('100$ Deposit'))
    }
    const depositMinus = () => {
        if (deposit === 0) {
            return false;
        }
        dispatch(decrementDeposit())
        dispatch(addHistory('100$ Withdrawal'))
    }
    return (
        <div className='main-content'>
            <span className='span-wallet'>You Bitcoin wallet</span>
            <span className='span-wallet'>You now own {bitcoins} Bitcoins</span>
            <div className='wallet-btn'>
                <Button param1={'Deposit 100'} param2={''} toggleFunction={depositPlus}/>
                <Button param1={'Withdraw 100'} param2={''} toggleFunction={depositMinus}/>
            </div>
        </div>
    );
};

export default Wallet;