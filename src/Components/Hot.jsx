import React, {Component} from 'react';

export default class Hot extends Component {
    constructor() {
        super();
        this.state = {};
        // console.log()
    }

    render() {
        return (
            < div >
                this is hot page!
                {this.props.match.params.id}
                {/*{this.props.location.query.name}*/}
            < /div>
        )
    }
}
