import React from 'react';
import {Row, Col} from 'antd';
import './index.less';
import Utils from '../../../utils/utils.js'
import axios from '../../../axios/index.js';
import {TimePicker, Tag} from 'antd';
import moment from 'moment';

export default class Header extends React.Component {
    state = {};

    componentWillMount() {
        this.setState({userName: '何亚楠先生'});
        setInterval(() => {
            let sysTime = Utils.formateDate(new Date().getTime());
            this.setState({sysTime});
        }, 1000);
        this.getWeatherAPIData();
    }

    //jsonp跨域
    getWeatherAPIData() {
        let city = '西安';
        axios.jsonp({
            url: 'http://api.map.baidu.com/telematics/v3/weather?location=' + encodeURIComponent(city) + '&output=json&ak=3p49MVra6urFRGOT9s8UBWr2'
        }).then((res) => {
            if (res.status === 'success') {
                let data = res.results[0].weather_data[0];
                let currentCity = res.results[0].currentCity;
                this.setState({
                    dayPictureUrl: data.dayPictureUrl,
                    weather: data.weather,
                    currentCity: currentCity
                })
            }
        })
    }

    render() {
        return (
            <div className="header">
                <Row className="header-top">
                    <Col span={24}>
                        <span>你好！{this.state.userName}</span>
                        <a href="www.baidu.com">退出</a>
                    </Col>
                </Row>
                <Row className="breadcrumb">
                    <Col span={4} className="breadcrumb-top">首页</Col>
                    <Col span={20} className="weather">
                        <TimePicker value={moment(this.state.sysTime, 'HH:mm:ss').utcOffset(660)} disabled/>
                        <Tag color="blue" className="city">
                            <span>{this.state.currentCity}</span>
                        </Tag>
                        <span className="weather-img">
                                    <img src={this.state.dayPictureUrl} alt=""/>
                                </span>
                        <span className="weather-detail">
                                    {this.state.weather}
                                </span>
                    </Col>
                </Row>
            </div>
        );
    }
}