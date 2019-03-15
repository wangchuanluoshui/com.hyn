import React from "react";
import {Button, Card, notification, Select} from 'antd'

const openNotificationWithIcon = (type, message,description,close) => {
    let durTime=4.5;
    if(!close)
    {
        durTime=null;
    }
    notification[type]({
        message: message,
        description: description,
        duration:durTime
    });
};
const {Option} = Select;
const options = ['bottomRight','bottomLeft', 'topLeft', 'topRight'];

export default class Notification extends React.Component {

    render() {
        return (
            <div>
                <Card
                    title="基本信息提示框">
                    <Select
                        defaultValue="bottomLeft"
                        style={{width: 120, marginRight: 10}}
                        onChange={(val) => {
                            notification.config({
                                placement: val,
                            });
                        }}
                    >
                        {options.map(val => <Option key={val} value={val}>{val}</Option>)}
                    </Select>
                    <Button type="primary"
                            onClick={() => openNotificationWithIcon('success', '成功','信息保存成功！',true)}>Success</Button>
                    <Button onClick={() => openNotificationWithIcon('info', '提示','这是一条信息！',true)}>Info</Button>
                    <Button type="dashed"
                            onClick={() => openNotificationWithIcon('warning', '警告','操作一条警告！你不点确认，我是不会消失的！',false)}>Warning</Button>
                    <Button type="danger"
                            onClick={() => openNotificationWithIcon('error', '失败','操作失败！你不点确认，我是不会消失的！',false)}>Error</Button>
                </Card>
            </div>
        );
    }

}