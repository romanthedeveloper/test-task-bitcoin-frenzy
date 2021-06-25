import React from 'react';
import './App.scss';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Sidebar from "./components/sidebar/Sidebar";
import Header from "./components/header/Header";
import HistorySidebar from "./components/historySidebar/HistorySidebar";
import Bitcoin from "./components/main/bitcoin/Bitcoin";
import Buy from "./components/main/buy/Buy";
import Sell from "./components/main/sell/Sell";
import Wallet from "./components/main/wallet/Wallet";
import Error from "./components/main/error/Error";


function App() {
    return (
        <div className='container'>
            <Router>
                <Sidebar/>
                <div className='wrapper'>
                    <Header/>
                    <div className='content'>
                        <Switch>
                            <Route exact path="/" component={Wallet}/>
                            <Route path="/bitcoin" component={Bitcoin}/>
                            <Route path="/buy" component={Buy}/>
                            <Route path="/sell" component={Sell}/>
                            <Route component={Error}/>
                        </Switch>
                        <HistorySidebar/>
                    </div>
                </div>
            </Router>
        </div>
    );
}

export default App;
