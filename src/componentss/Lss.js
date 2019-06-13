/**
 * this is a demo which i used to test less file
 * */
import React, {Component} from 'react';
import '@/css/lss.less'
export default class Lss extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <header className="nav">
                    <span>我是logo</span>
                    {/*<ul>*/}
                    {/*    <li><a href="#">梼杌</a></li>*/}
                    {/*    <li><a href="#">饕餮</a></li>*/}
                    {/*    <li><a href="#">穷奇</a></li>*/}
                    {/*    <li><a href="#">浑沌</a></li>*/}
                    {/*</ul>*/}
                </header>
            </div>
        )
    }
}
