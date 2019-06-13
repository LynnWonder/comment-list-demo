import React, { Component } from 'react'
import '@/css/index.css'
class CommentInput extends Component {
    constructor () {
        super()
        this.state = {
            username: '',
            content: ''
        }
    }
    componentWillMount () {
        this._loadUsername() //使用私有方法获取上次登录的时候的用户名
        // localStorage.removeItem("comments")
        // localStorage.removeItem("username")

    }
    componentDidMount() {
        this.text.focus()
    }
    _loadUsername(){
        const username = localStorage.getItem('username')
        if (username) {
            this.setState({ username })
        }
    }
    _saveUsername(username){ //私有方法
        localStorage.setItem('username', username)
    }
    handleUsernameChange=(event)=>{
        this.setState({username: event.target.value})
    }
    handleContentChange=(e)=>{
        this.setState({content: e.target.value})
    }
    handleSubmit=()=>{
        if (this.props.onSubmit) {
            const { username, content } = this.state
            this.props.onSubmit({
                username,
                content,
                createdTime:+new Date()
            })
        }
        this.setState({ content: '' })
    }
    handleUsernameBlur (event) {
        this._saveUsername(event.target.value)
    }
    render () {
        return (
            <div className='comment-input'>
                <div className='comment-field'>
                    <span className='comment-field-name'>用户名：</span>
                    <div className='comment-field-input'>
                        <input value={this.state.username}  onChange={(e)=>this.handleUsernameChange(e)}onBlur={(e)=>this.handleUsernameBlur(e)}/>
                        {this.state.username}
                    </div>
                </div>
                <div className='comment-field'>
                    <span className='comment-field-name'>评论内容：</span>
                    <div className='comment-field-input'>
                        <textarea ref={(text)=>this.text=text} value={this.state.content}  onChange={(e)=>this.handleContentChange(e)}/>
                        {this.state.content}
                    </div>
                </div>
                <div className='comment-field-button'>
                    <button onClick={()=>this.handleSubmit()}>
                        发布
                    </button>
                </div>
            </div>
        )
    }
}

export default CommentInput