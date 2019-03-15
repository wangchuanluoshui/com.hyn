import React from 'react';
import {Card, Button, Icon, Switch, Radio} from 'antd';
import './Buttons.less';

const ButtonGroup = Button.Group;
const RadioGroup = Radio.Group;

function onChange(checked) {
    console.log(`switch to ${checked}`);
}

export default class Buttons extends React.Component {

    state = {
        loading: true,
        recover: '取消',
        loader: '加载',
        buttonSize: 'default',
        value: 2
    }

    handleClickRecver() {
        if (this.state.loading) {
            this.setState({
                loading: false,
                recover: this.state.loader
            });
        } else {
            this.setState({
                loading: true,
                recover: '取消'
            });
        }

    };

    onChange = (e) => {
        console.log('radio checked', e.target.value);
        let btnSize = 'default';
        if (e.target.value === 1) {
            btnSize = 'large';
        } else if (e.target.value === 2) {
            btnSize = 'default';
        } else {
            btnSize = 'small';
        }
        this.setState({
            value: e.target.value,
            buttonSize: btnSize
        });
    }

    render() {
        return (
            <div>
                <Card
                    title="基本按钮">
                    <Button type='primary'>确定</Button>
                    <Button>查看</Button>
                    <Button type='danger'>删除</Button>
                    <Button type='dashed'>注意</Button>
                    <Button disabled={true}>禁用</Button>
                </Card>
                <br/>
                <Card
                    title="图形按钮">
                    <Button icon="plus" type='primary'>创建</Button>
                    <Button icon="form">编辑</Button>
                    <Button icon="delete" type='danger'>删除</Button>
                    <Button shape="circle" icon="download" type='dashed'></Button>
                    <Button icon="search">搜索</Button>
                    <Button icon="download">下载</Button>
                </Card>
                <br/>
                <Card
                    title="Loading按钮">
                    <Button icon="plus" type='primary' loading={this.state.loading}>创建</Button>
                    <Button icon="form" loading={this.state.loading}>编辑</Button>
                    <Button icon="delete" type='danger' loading={this.state.loading}>删除</Button>
                    <Button shape="circle" icon="download" type='dashed' loading={this.state.loading}></Button>
                    <Button icon="search" loading={this.state.loading}>搜索</Button>
                    <Button icon="download" loading={this.state.loading}>下载</Button>
                    <Button type={"primary"} icon={"redo"}
                            onClick={this.handleClickRecver.bind(this)}>{this.state.recover}</Button>
                </Card>
                <br/>
                <Card
                    title="按钮组">
                    <ButtonGroup>
                        <Button type="primary" style={{marginRight: '0px'}}>
                            <Icon type="left"/>上一页
                        </Button>
                        <Button type="primary">
                            下一页<Icon type="right"/>
                        </Button>
                    </ButtonGroup>
                </Card>
                <br/>
                <Card
                    title="开关按钮">
                    <Switch defaultChecked onChange={onChange}/>
                </Card>
                <br/>
                <Card
                    title="按钮尺寸">
                    <RadioGroup onChange={this.onChange} value={this.state.value}>
                        <Radio value={1}>大</Radio>
                        <Radio value={2}>中</Radio>
                        <Radio value={3}>小</Radio>
                    </RadioGroup>
                    <Button icon="plus" type='primary' size={this.state.buttonSize}>创建</Button>
                    <Button icon="form" size={this.state.buttonSize}>编辑</Button>
                    <Button icon="delete" type='danger' size={this.state.buttonSize}>删除</Button>
                    <Button shape="circle" icon="download" type='dashed' size={this.state.buttonSize}></Button>
                    <Button icon="search" size={this.state.buttonSize}>搜索</Button>
                    <Button icon="download" size={this.state.buttonSize}>下载</Button>
                </Card>
            </div>
        )
    };
}

