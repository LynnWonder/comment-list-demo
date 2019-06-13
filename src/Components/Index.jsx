import React, {Component} from 'react';
import Header from '@/Components/Header'
import Clock from '@/Components/Clock'
export default class Index extends Component {
    constructor() {
        super()
        this.state = {
            isShowHeader: true
        }
    }

    handleShowOrHide () {
        this.setState({
            isShowHeader: !this.state.isShowHeader
        })
    }
componentDidMount() {
        console.log(this.clock.state)
}

    render () {
        return (
            <div>
                {/*toggle显示header组件*/}
                {this.state.isShowHeader ? <Header /> : null}
                <button onClick={this.handleShowOrHide.bind(this)}>
                    显示或者隐藏标题
                </button>
                <Clock ref={(clock)=>this.clock=clock}/>
            </div>
        )
    }
}

