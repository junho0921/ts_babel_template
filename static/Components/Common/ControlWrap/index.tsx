import React, { Component } from 'react';
import SplitLine from '../SplitLine/index';
let less = require('./main.less');

interface Props {
    children: any;
}

class ControlWrap extends Component<Props, any> {
    render() {
        return (
            <div className={less.controlWrap}>
                <SplitLine>
                    <h2>模板名称</h2>
                    <h2>操作</h2>
                </SplitLine>
                {this.props.children}
            </div>
        )
    }
}

export default ControlWrap;
