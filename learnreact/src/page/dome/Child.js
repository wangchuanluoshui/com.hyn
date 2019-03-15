import React from 'react';

export default class Child extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }

    }

    componentWillMount() {
        console.log('服务器端和客户端都只调用一次，在初始化渲染执行之前立刻调用。如果在这个方法内调用 setState，render() 将会感知到更新后的 ' +
            'state，将会执行仅一次，尽管 state 改变了');

    }

    componentDidMount() {
        console.log('在初始化渲染执行之后立刻调用一次，仅客户端有效（服务器端不会调用）。在生命周期中的这个时间点，组件拥有一个 DOM 展现，你可以通过 this.getDOMNode() 来获取相应 DOM 节点。');
    }

    componentWillReceiveProps(props){
        console.log('在组件接收到新的 props 的时候调用。在初始化渲染的时候，该方法不会调用。');
        console.log(props.name);
    }

    shouldComponentUpdate()
    {
        console.log('在接收到新的 props 或者 state，将要渲染之前调用。该方法在初始化渲染的时候不会调用，在使用 forceUpdate 方法的时候也不会。');
        return true;
    }
    componentWillUpdate()
    {
        console.log('在接收到新的 props 或者 state 之前立刻调用。在初始化渲染的时候该方法不会被调用。');
    }

    componentDidUpdate()
    {
        console.log('在组件的更新已经同步到 DOM 中之后立刻被调用。该方法不会在初始化渲染的时候调用。');
    }

    render() {
        return <div><p>this is child</p><p>{this.props.name}</p></div>
    }
}