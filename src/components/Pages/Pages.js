import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './Pages.css';
import Home from './../Home/Home.js';
import Battle from './../Battle/Battle.js';
import Popular from './../Popular/Popular.js';

const Pages = (props) => {
    return (
        <div className="pages">
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/battle" component={Battle}/>
                <Route path="/popular" component={Popular}/>
                <Route render={() => {
                    return (
                        <div style={{
                            textAlign: 'center',
                            marginTop: "calc(80VH/2)"
                        }}>
                            <h3 style={{
                                color: 'red',
                                textAlign: 'center',
                            }}> Oops! </h3>
                            <p> Something went wrong... <a href="/" style={{color: 'blue', }}> go back</a>! </p>
                        </div>
                    )
                }}/>
            </Switch>
        </div>
    )
}

export default Pages;