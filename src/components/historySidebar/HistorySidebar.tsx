import React, {FC} from 'react';
import './history.scss'
import {useSelector} from "react-redux";
import {RootState} from "../../store/store";

const HistorySidebar: FC = () => {
    const array: any[] = useSelector((store: RootState) => store.history.sessionHistory);

    return (
        <div className='history'>
            {array.map(item =>
                <div className='history-item' key={item.id}>
                    <span>{item.date}</span>
                    <span>{item.text}</span>
                </div>
            )}
        </div>
    );
};

export default HistorySidebar;