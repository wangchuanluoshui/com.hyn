import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import Main from '../route1/Main.js';
import About from '../route1/About.js';
import Topic from '../route1/Topic.js';
import Home from './Home.js';

export default class IRouter extends React.Component {
    render() {
        return (<HashRouter>
            <div>
                this is router2!
                <Home>
                    <Route exact={true} path="/" component={Main}></Route>
                    <Route path="/about" component={About}></Route>
                    <Route path="/topics" component={Topic}></Route>
                </Home>
            </div>
        </HashRouter>);
    };
}