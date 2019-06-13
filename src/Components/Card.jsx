import React, {Component} from 'react';

export default class Card extends Component {
    render () {
        return (
            <div className='card'>
                <div className='card-content'>
                    {this.props.children}
                    {/*{console.log(this.props.children instanceof Array)}*/}
                </div>
            </div>
        )
    }
}
