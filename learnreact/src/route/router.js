import React from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom';
import App from '../App.js';
import Main from './../Main.js';
import Buttons from './../page/ui/buttons/Buttons.js';
import Exception404 from './../page/exception/404.js';
import Modals from '../page/ui/modals/Modals.js';
import Loading from '../page/ui/loading/Loading.js';
import Notification from '../page/ui/notification/Notification.js';
import Messages from '../page/ui/message/Message.js';
import Tabs from '../page/ui/tabs/Tabs.js';
import Gallery from '../page/ui/gallery/Gallery.js';
import Carousel from '../page/ui/carousel/ICarousel';
import Login from '../page/form/login/Login';
import FormRegister from '../page/form/register/FormRegister';

export default class IRouter extends React.Component {
    render() {

        return (
            <HashRouter>
                <App>
                    <Route path="/login" component={Login}/>
                    <Route path="/main" render={() =>
                        <Main>
                            <Switch>
                                <Route path="/main/ui/buttons" component={Buttons}/>
                                <Route path="/main/ui/modals" component={Modals}/>
                                <Route path="/main/ui/loadings" component={Loading}/>
                                <Route path="/main/ui/notification" component={Notification}/>
                                <Route path="/main/ui/messages" component={Messages}/>
                                <Route path="/main/ui/tabs" component={Tabs}/>
                                <Route path="/main/ui/gallery" component={Gallery}/>
                                <Route path="/main/ui/carousel" component={Carousel}/>
                                <Route path="/main/form/login" component={Login}/>
                                <Route path="/main/form/form-reg" component={FormRegister}/>
                                <Route component={Exception404}/>
                            </Switch>
                        </Main>}/>

                    <Route path="/order/detail" component={Login}/>
                </App>
            </HashRouter>
        );
    }

}