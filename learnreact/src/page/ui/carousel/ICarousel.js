import React from "react";
import {Carousel, Card} from 'antd';
import './Carousel.less';
import png1 from './carousel-img/1.png'
import png2 from './carousel-img/2.png'
import png3 from './carousel-img/3.png'

function onChange(a, b, c) {
    console.log(a, b, c);
}

export default class ICarousel extends React.Component {

    render() {
        return (
            <div>
                <Card title={"文字轮播"}>
                    <Carousel afterChange={onChange}>
                        <div><h3>这是一首简单的小情歌</h3></div>
                        <div><h3>唱着人们心肠的曲折</h3></div>
                        <div><h3>我想我很快乐</h3></div>
                        <div><h3>当有你的温热</h3></div>
                        <div><h3>脚边的空气转了</h3></div>
                        <div><h3>这是一首简单的小情歌</h3></div>
                        <div><h3>唱着我们心头的白鸽</h3></div>
                        <div><h3>我想我很适合</h3></div>
                        <div><h3>当一个歌颂者</h3></div>
                        <div><h3>青春在风中飘着</h3></div>
                        <div><h3>你知道就算大雨让这座城市颠倒</h3></div>
                        <div><h3>我会给你怀抱</h3></div>
                        <div><h3>受不了看见你背影来到</h3></div>
                        <div><h3>写下我度秒如年难捱的离骚</h3></div>
                        <div><h3>就算整个世界被寂寞绑票</h3></div>
                        <div><h3>我也不会奔跑</h3></div>
                        <div><h3>逃不了最后谁也都苍老</h3></div>
                        <div><h3>写下我时间和琴声交错的城堡</h3></div>
                        <div><h3>这是一首简单的小情歌</h3></div>
                        <div><h3>唱着我们心头的白鸽</h3></div>
                        <div><h3>我想我很适合</h3></div>
                        <div><h3>当一个歌颂者</h3></div>
                        <div><h3>青春在风中飘着</h3></div>
                        <div><h3>你知道就算大雨让这座城市颠倒</h3></div>
                        <div><h3>我会给你怀抱</h3></div>
                        <div><h3>受不了看见你背影来到</h3></div>
                        <div><h3>写下我度秒如年难捱的离骚</h3></div>
                        <div><h3>就算整个世界被寂寞绑票</h3></div>
                        <div><h3>我也不会奔跑</h3></div>
                        <div><h3>逃不了最后谁也都苍老</h3></div>
                        <div><h3>写下我时间和琴声交错的城堡</h3></div>
                        <div><h3>你知道就算大雨让这座城市颠倒</h3></div>
                        <div><h3>我会给你怀抱</h3></div>
                        <div><h3>受不了看见你背影来到</h3></div>
                        <div><h3>写下我度秒如年难捱的离骚</h3></div>
                        <div><h3>就算整个世界被寂寞绑票</h3></div>
                        <div><h3>我也不会奔跑</h3></div>
                        <div><h3>最后谁也都苍老</h3></div>
                        <div><h3>写下我时间和琴声交错的城堡</h3></div>
                    </Carousel>
                </Card>
                <br/>
                    <Card title={"图片轮播"} className="slider-wrap">
                        <Carousel afterChange={onChange} autoplay={true} className={"carousel-img"}>
                            <div><img src={png1} alt={""} ></img></div>
                            <div><img src={png2} alt={""}></img></div>
                            <div><img src={png3} alt={""}></img></div>
                        </Carousel>
                    </Card>
            </div>
    );
    }

    }