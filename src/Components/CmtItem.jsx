import React from 'react'
const style={
    item:{border:'1px solid #ccc',margin:'10px',padding:'10px',boxShadow:'0 0 10px #ccc'},
    user:{fontSize:'18px'},
    content:{fontSize:'15px'}
}
 class CmtItem extends React.Component{
     constructor(){
         super()
     }
    render(){
        return <div style={style.item}>
        <h2 style={style.user}>评论人：{this.props.user}</h2>
        <p style={style.content}>评论内容：{this.props.content}</p>
        </div>
    } 
}
export default CmtItem