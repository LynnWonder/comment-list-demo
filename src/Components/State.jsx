import React, {Component} from 'react';

export default class State extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            < div >
            state page!!
                {console.log(this.props.location.state.name)}
            < /div>
        )
    }
}
