import React, { Component } from 'react'
import Comment from './Comment'
import PropsType from 'prop-types'
class CommentList extends Component {
    static propTypes={
        comments:PropsType.array,
        onDeleteComment:PropsType.func
    }
    handleDeleteComment(index){
        if (this.props.onDeleteComment) {
            this.props.onDeleteComment(index)
        }
    }
    render() {
        this.comments = [
            {username: 'Jerry', content: 'Hello'},
            {username: 'Tomy', content: 'World'},
            {username: 'Lucy', content: 'Good'}
        ]

        return (
            <div>
                {this.props.comments.map((comment, i) => {
                return (
                    <Comment comment={comment} key={i} index={i} onDeleteComment={(idx)=>this.handleDeleteComment(idx)}>
                    </Comment>
                )
            })}
            </div>
        )
    }
}

export default CommentList