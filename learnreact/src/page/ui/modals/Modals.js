import React from "react";
import {Button, Card, Modal} from "antd";

export default class Modals extends React.Component {
    state = {baseVisible: false,
    value:85555}

    showModal = () => {
        this.setState({
            baseVisible: true,
        });
    }

    handleOk = (e) => {
        console.log(e);
        this.setState({
            baseVisible: false,
        });
    }

    handleCancel = (e) => {
        console.log(e);
        this.setState({
            baseVisible: false,
        });
    }

    render() {
        return (
            <div>
                    <Card
                        title="基本模态框">
                        <Button type='primary' onClick={()=>this.showModal()}>基础模态框</Button>
                        <Modal
                            title="Basic Modal"
                            visible={this.state.baseVisible}
                            onOk={this.handleOk}
                            onCancel={this.handleCancel}
                        >
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                        </Modal>
                    </Card>
                <br/>
                <Card
                    title="信息提示框">
                    <Button type='primary' onClick={()=>this.showConfirm('confirm')}>Confirm</Button>
                    <Button type='primary' onClick={()=>this.showConfirm('success')}>Success</Button>
                    <Button type='primary' onClick={()=>this.showConfirm('error')}>Error</Button>
                    <Button type='primary' onClick={()=>this.showConfirm('warning')}>Warning</Button>
                    <Button type='primary' onClick={()=>this.showConfirm('info')}>Info</Button>
                </Card>
            </div>
        );
    }

    showConfirm=(type)=> {
        Modal[type]({
            title: '确认删除本条记录？',
            content: '删除以后数据无法恢复！',
            onOk() {
                return new Promise((resolve, reject) => {
                    setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
                }).catch(() => console.log('Oops errors!'));
            },
            onCancel() {},
            okText:'确认',
            cancelText:'取消'
        });
    }
}