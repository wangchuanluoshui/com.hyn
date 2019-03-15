import React from "react";
import {Card, Tabs, Icon} from "antd";

const TabPane = Tabs.TabPane;


export default class Notification extends React.Component {

    handleCallback = (key) => {
        console.log(key);
    }

    render() {
        return (
            <div>
                <Card
                    title="基本页签">
                    <Tabs defaultActiveKey="1" onChange={this.handleCallback}>
                        <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
                        <TabPane tab="Tab 2" key="2" disabled>Content of Tab Pane 2</TabPane>
                        <TabPane tab={<span><Icon type="android"/>Tab 2</span>} key="3">Content of Tab Pane 3</TabPane>
                        <TabPane tab="Tab 4" key="4">Content of Tab Pane 4</TabPane>
                    </Tabs>
                </Card>
                <br/>
                <Card
                    title="垂直页签">
                    <Tabs defaultActiveKey="1" onChange={this.handleCallback}>
                        <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
                        <TabPane tab="Tab 2" key="2" disabled>Content of Tab Pane 2</TabPane>
                        <TabPane tab={<span><Icon type="android"/>Tab 3</span>} key="3">Content of Tab Pane 3</TabPane>
                        <TabPane tab="Tab 4" key="4">Content of Tab Pane 4</TabPane>
                        <TabPane tab="Tab 5" key="5">Content of Tab Pane 5</TabPane>
                        <TabPane tab="Tab 6" key="6">Content of Tab Pane 6</TabPane>
                        <TabPane tab="Tab 7" key="7">Content of Tab Pane 7</TabPane>
                        <TabPane tab="Tab 8" key="8">Content of Tab Pane 8</TabPane>
                        <TabPane tab="Tab 9" key="9">Content of Tab Pane 9</TabPane>
                        <TabPane tab="Tab 10" key="10">Content of Tab Pane 10</TabPane>
                        <TabPane tab="Tab 11" key="11">Content of Tab Pane 11</TabPane>
                        <TabPane tab="Tab 12" key="12">Content of Tab Pane 12</TabPane>
                        <TabPane tab="Tab 13" key="13">Content of Tab Pane 13</TabPane>
                        <TabPane tab="Tab 14" key="14">Content of Tab Pane 14</TabPane>
                        <TabPane tab="Tab 15" key="15">Content of Tab Pane 15</TabPane>

                    </Tabs>
                </Card>
                <br/>
                <Card
                    title="大小页签">
                    <Tabs defaultActiveKey="1" onChange={this.handleCallback} size={'large'}>
                        <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
                        <TabPane tab="Tab 2" key="2" disabled>Content of Tab Pane 2</TabPane>
                        <TabPane tab={<span><Icon type="android"/>Tab 2</span>} key="3">Content of Tab Pane 3</TabPane>
                        <TabPane tab="Tab 4" key="4">Content of Tab Pane 4</TabPane>
                    </Tabs>
                </Card>
                <br/>
                <Card
                    title="卡片页签">
                    <Tabs defaultActiveKey="1" onChange={this.handleCallback} type="card">
                        <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
                        <TabPane tab="Tab 2" key="2" disabled>Content of Tab Pane 2</TabPane>
                        <TabPane tab={<span><Icon type="android"/>Tab 2</span>} key="3">Content of Tab Pane 3</TabPane>
                        <TabPane tab="Tab 4" key="4">Content of Tab Pane 4</TabPane>
                    </Tabs>
                </Card>
            </div>
        );
    }

}