import React, {Component} from 'react';

export default class Editor extends Component {
    constructor() {
        super()
        this.state = {
            content: '<h1>React.js 小书</h1>'
        }
    }

    render () {
        return (
            <div className='editor-wrapper'dangerouslySetInnerHTML={{__html: this.state.content}}>

            </div>
        )
    }
}
