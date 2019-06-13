import React from 'react'
import cssobj from '@/css/second.scss'
// console.log(cssobj)
export default class CmtItem1 extends React.Component{
     constructor(){
         super()
     }
    render(){
        return <div className={cssobj.item}>
        <h2 className={cssobj.user}>评论人：{this.props.user}</h2>
        <p id={cssobj.content}>评论内容：{this.props.content}</p>
        </div>
    } 
}