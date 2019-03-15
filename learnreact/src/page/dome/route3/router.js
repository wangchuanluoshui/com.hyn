import React from 'react'
import { HashRouter as Router, Route, Switch} from 'react-router-dom'
import Main from './Main'
import Info from './info'
import About from './../route1/About'
import Topic from './../route1/Topic'
import Home from './Home'
import NoMatch from './NoMatch'
export default class IRouter extends React.Component{

    render(){
        return (
            <Router>
                <Home>
                    <Switch>
                        <Route path="/main" render={() =>
                            <Main>
                                <Route path="/main/:value" component={Info}></Route>
                            </Main>
                        }></Route>
                        <Route path="/about" component={About}></Route>
                        <Route exact={true} path="/about/abc" component={About}></Route>
                        <Route path="/topics" component={Topic}></Route>
                        //匹配不到的默认页面
                        <Route component={NoMatch}></Route>
                    </Switch>
                </Home>
            </Router>
        );
    }
}