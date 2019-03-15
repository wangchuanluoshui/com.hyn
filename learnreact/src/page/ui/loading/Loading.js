import React from "react";
import {Spin, Alert, Card, Switch, Icon,} from 'antd';

export default class Loading extends React.Component {
    state = {loading: false}

    toggle = (value) => {
        this.setState({loading: value});
    }

    render() {
        const icon = <Icon type={'loading'} style={{fontSize: 24}}/>

        return (<div>

            <Card
                title="Spin基本用法" class={"card-warp"}>
                <Spin size={"small"}/>
                <span style={{marginRight: '20px'}}/>
                <Spin/>
                <span style={{marginRight: '20px'}}/>
                <Spin size={"large"}/>
                <span style={{marginRight: 20}}/>
                <Spin indicator={icon} spinning={true}/>
                <span style={{marginRight: 20}}/>
                <Spin indicator={icon} spinning={true}/>
                <span style={{marginRight: 20}}/>
                <Spin indicator={icon} spinning={true}/>
            </Card>
            <Card
                title="Spin遮掩用法" class={"card-warp"}>
                <Spin spinning={this.state.loading}>
                    <Alert
                        message="爱的魔力转圈圈"
                        description="爱的魔力转圈圈，啦啦啦啦啦啦......"
                        type="info"
                    />
                </Spin>
                <div style={{marginTop: 16}}>
                    加载开关：<Switch checked={this.state.loading} onChange={this.toggle}/>
                </div>
            </Card>
            <Card
                title="SpinTip修改" class={"card-warp"}>
                <Spin spinning={this.state.loading} tip={'加载中'}>
                    <Alert
                        message="爱的魔力转圈圈"
                        description="爱的魔力转圈圈，啦啦啦啦啦啦......"
                        type="info"
                    />
                </Spin>
                <div style={{marginTop: 16}}>
                    加载开关：<Switch checked={this.state.loading} onChange={this.toggle}/>
                </div>
            </Card>
        </div>);
    }
}