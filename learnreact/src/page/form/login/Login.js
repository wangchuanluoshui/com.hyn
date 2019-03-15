import React from 'react';
import {Card, Form, Icon, Input, Button, message} from 'antd';
import './Login.less';

const FormItem = Form.Item;

class Login extends React.Component {


    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                message.success('Received values of form: ' + values.username);
            }
        })
    }

    render() {
        const {
            form: {getFieldDecorator},
        } = this.props;
        return (
            <div>
                <Card title={"登录行内表单"}>
                    <Form layout="inline" onSubmit={this.handleSubmit}>
                        <FormItem>
                            <Input placeholder="请输入用户名..."/>
                        </FormItem>
                        <FormItem>
                            <Input placeholder={"请输入密码..."}></Input>
                        </FormItem>
                        <FormItem>
                            <Button type="primary" htmlType="submit"
                            >登录</Button>
                        </FormItem>
                    </Form>
                </Card>
                <br/>
                <Card title={"登录水平表单"}>
                    <Form onSubmit={this.handleSubmit} layout="horizontal" style={{width: 300}}>
                        <FormItem>
                            {getFieldDecorator('username', {
                                rules: [
                                    {
                                        required: true,
                                        message: "用户名不能为空！",
                                    }, {
                                        min: 5, max: 10,
                                        message: "用户名长度在5到10范围之前",
                                    }
                                ],
                            })(<Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                      placeholder="请输入用户名..."/>)}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('password', {
                                rules: [
                                    {
                                        required: true,
                                        message: "密码不能为空！",
                                    }
                                ],
                            })(<Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                      placeholder={"请输入密码..."} type="password"></Input>)}
                        </FormItem>
                        <FormItem>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                登录
                            </Button>
                            <div className="goto-register"><a href="" className="login-form-forgot">忘记密码？</a><a
                                href="">立即注册!</a></div>
                        </FormItem>
                    </Form>
                </Card>
            </div>
        );
    };
}

export default Form.create()(Login);


