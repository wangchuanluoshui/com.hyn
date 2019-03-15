import React from 'react';
import {Row, Col} from 'antd';
import Header from './page/components/header/index';
import Footer from './page/components/footer/index';
import NavLeft from './page/components/navleft/index';
import './style/common.less';

export default class Main extends React.Component {

    render() {
        return (
            <div>
                <Row className="container">
                    <Col span={4} className="nav-left">
                        <NavLeft>navLeft</NavLeft>
                    </Col>
                    <Col span={20} className="main">
                        <Header/>
                            <Row className="content">
                                {/*<Home/>*/}
                                {this.props.children}
                            </Row>
                        <Footer/>
                    </Col>
                </Row>
            </div>
        );
    }
}