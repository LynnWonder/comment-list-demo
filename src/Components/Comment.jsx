import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Comment extends Component {
    static propTypes = { //静态属性
        comment: PropTypes.object.isRequired
    }
    constructor () {
        super()
        this.state = { timeString: '' }
    }
    componentWillMount () {
        this._updateTimeString()
    }

    _updateTimeString () {
        const comment = this.props.comment
        const duration = (+Date.now() - comment.createdTime) / 1000
        this.setState({
            timeString: duration > 60
                ? `${Math.round(duration / 60)} 分钟前`
                : `${Math.round(Math.max(duration, 1))} 秒前`
        })
    }
    render () {
        const { comment } = this.props
        return (
            <div className='comment'>
                <div className='comment-user'>
                    <span>{comment.username} </span>：
                </div>
                <p>{comment.content}</p>
                <p>{comment.content}</p>
                <span className='comment-createdtime'>
                  {this.state.timeString}
                </span>
            </div>
        )
    }
}