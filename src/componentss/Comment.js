import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '@/css/index.css'
class Comment extends Component {
    static propTypes = {
        comment: PropTypes.object.isRequired,
        onDeleteComment: PropTypes.func,
        index: PropTypes.number
    }
    constructor () {
        super()
        this.state = { timeString: '' }
    }
    componentWillMount() {
        this._timer=setInterval(()=>{
            this._updateTimeString()
        },5000)
        this._updateTimeString()
    }
    componentWillUnmount() {
        clearInterval(this._timer)
    }

    _updateTimeString(){
        const comment=this.props.comment
        const duration=(+Date.now()-comment.createdTime)/1000
        this.setState({
            timeSting:duration>60
                ?`${Math.round(duration/60)}分钟前`
                :`${Math.round(Math.max(duration,1))}秒前`
        })

    }
    handleDeleteComment(){
        if (this.props.onDeleteComment) {
            this.props.onDeleteComment(this.props.index)
        }
    }
    render () {
        return (
            <div className='comment'>
                <div className='comment-user comment-username'>
                    <span>{this.props.comment.username}</span>：
                </div>
                <p>{this.props.comment.content}</p>
                <span className="comment-createdtime">
                    {this.state.timeSting}
                </span>
                <span className='comment-delete' onClick={()=>{this.handleDeleteComment()}}>
                  删除
                </span>
            </div>
        )
    }
}

export default Comment