import React, {Component} from 'react';

export default class Sort extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: this.props.location.query
        }
    }


    render() {
        return (
            < div >
                sort page!
                {console.log(this.state.query.name)}
                {/*{this.state.query}*/}
            < /div>
        )
    }
}
