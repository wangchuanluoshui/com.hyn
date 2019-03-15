import React from 'react';
import MenuConfig from './../../../config/menuConfig';
import {Menu, Icon} from 'antd';
import './index.less';
import {NavLink} from 'react-router-dom';

const SubMenu = Menu.SubMenu;

export default class NavLeft extends React.Component {
    componentWillMount() {
        const menuTreeNode = this.renderMenu(MenuConfig);
        this.setState({menuTreeNode})
    }

    //菜单渲染
    renderMenu = (data) => {
        return data.map((item) => {
            if (item.children) {
                return (<SubMenu title={<span><Icon type="setting"/><span>{item.title}</span></span>}
                                 key={item.key}>{this.renderMenu(item.children)}</SubMenu>);
            }
            return <Menu.Item title={item.title}
                              key={item.key}>
                <NavLink to={item.key}>{item.title}</NavLink></Menu.Item>
        })
    }
    // submenu keys of first level
    rootSubmenuKeys = [];

    state = {
        openKeys: [],
    };

    onOpenChange = (openKeys) => {
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({openKeys});
        } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : [],
            });
        }
    }

    render() {

        return (
            <div className="logo">
                <img src="/assets/logo-ant.svg" alt=""/>
                <h1>Learn React</h1>
                <Menu
                    theme="dark"
                    mode="inline"
                    openKeys={this.state.openKeys}
                    onOpenChange={this.onOpenChange}
                    span={4}
                >
                    {this.state.menuTreeNode}
                </Menu>
            </div>
        );
    }
}