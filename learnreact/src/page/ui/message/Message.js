import React from "react";
import {Card, message, Button} from 'antd';


export default class Message extends React.Component {
    showMessage = (type, msg) => {
        message[type](msg);
    }
    state = {
        info: '这是一条提示信息！',
        success: '这是一条成功信息！',
        error: '这是一条错误信息！',
        warning: '这是一条告警信息！'
    }

    render() {
        return (
            <div>
                <Card
                    title="全局信息提示">
                    <Button type="primary" onClick={() => this.showMessage('info', this.state.info)}>Info</Button>
                    <Button type="primary"
                            onClick={() => this.showMessage('success', this.state.success)}>Success</Button>
                    <Button type="primary" onClick={() => this.showMessage('error', this.state.error)}>Error</Button>
                    <Button type="primary"
                            onClick={() => this.showMessage('warn ', this.state.warning)}>Warning</Button>
                </Card>
            </div>
        );
    }

}
