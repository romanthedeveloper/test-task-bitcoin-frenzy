import React, {FC} from 'react';
import './header.scss';
import {useSelector} from 'react-redux';
import {RootState} from "../../store/store";

const Header:FC = () => {
    const price = useSelector((store: RootState) => store.history.bitcoinPrice)
    const dollarsCount = useSelector((store: RootState) => store.userСurrency.dollars)
    const bitcoinCount = useSelector((store: RootState) => store.userСurrency.bitcoin)


    return (
        <div className='header'>
            <div className='conversion'>1 BITCOIN = {price.toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")} $
            </div>
            <div className='user-owns'>
                <span>
                    {dollarsCount.toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")} $
                </span>
                <span>
                    {bitcoinCount} BITCOINS
                </span>
            </div>
        </div>
    );
};

export default Header;