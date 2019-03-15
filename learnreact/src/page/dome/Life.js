import React from 'react';
import Child from './Child';
import './Life.less';
import {Button} from 'antd';

export default class Life extends React.Component {
    handleClick(){

        this.setState({
            count:this.state.count+1
        })
    };

    constructor(props)
    {
        super(props);
        this.state={
            count:0
        }

    }

    render() {
        return <div className="content">
            <p>React生命周期管理</p>
            <button onClick={this.handleClick.bind(this)}>点击我两哈</button>
            <Button onClick={this.handleClick.bind(this)}>antd design Button</Button>
            <p>{this.state.count}</p>
            <Child name={this.state.count}></Child>
        </div>

    }
}
