import React, {Component} from 'react';
export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentWillUnmount() {
        console.log('component will unmount')
    }
    componentDidMount() {
        console.log("component Did Mount ")
    }

    render() {
        return (
            < div >
                this is a header component!

            < /div>
        )
    }
}
