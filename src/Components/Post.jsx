import React, {Component} from 'react';

export default class Post extends Component {
    constructor(){
        super()
    }
    clickHandle(){
        console.log(this.p.clientWidth)
    }
    render () {
        return (<p onClick={()=>{this.clickHandle()}} ref={(pp)=>this.p=pp}>
            {this.props.content}
        </p>)
    }
}
