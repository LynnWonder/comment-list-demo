import React, {Component} from 'react';

export default  class Clock extends Component {
    constructor () {
        super()
        this.state = {
            date: new Date()
        }
    }
    componentWillMount() {
        this.timer=setInterval(()=>{
            this.setState({date:new Date()})
        },1000)
    }
    componentWillUnmount() {
        this.timer.clear()
    }

    render () {
        return (
            <div>
                <h1>
                    <p>现在的时间是</p>
                    {this.state.date.toLocaleTimeString()}
                </h1>
            </div>
        )
    }
}
