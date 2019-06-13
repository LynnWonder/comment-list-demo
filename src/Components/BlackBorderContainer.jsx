import React, {Component} from 'react';

export default class BlackBorderContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            < div>
                {this.props.children.map((item,index)=>{
                return  <div style={{border:'1px solid #000000'}} key={index}>{item}</div>

                })}
            < /div>
        )
    }
}
