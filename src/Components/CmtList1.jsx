import React from 'react'
import CmtItem from '@/Components/CmtItem'
import CmtItem1 from '@/Components/CmtItem1'
import cssobj from '@/css/first.scss'
import bootcss from 'bootstrap/dist/css/bootstrap.css'
console.log(cssobj)//空对象
console.log("bootstrap")
console.log(bootcss)
export default class CmtList1 extends React.Component {
    constructor(){
        super()
        this.state={
            CommentList: [
                { id: 1, user: '张三', content: '哈哈，沙发' },
                { id: 2, user: '李四', content: '哈哈，板凳' },
                { id: 3, user: '王五', content: '哈哈，凉席' },
                { id: 4, user: '赵六', content: '哈哈，砖头' },
                { id: 5, user: '田七', content: '哈哈，楼下山炮' }
            ],
            msg:'haha'
        }
    }
    render() {
        return (
            <div>
                {/* <h1 style={{color:'red',fontSize:'20px',fontWeight:200,textAlign:'center'}}>评论列表组件</h1> */}
                {/* <h1 className="title">评论列表组件</h1> */}
                <h1 className={cssobj.title}>评论列表组件</h1>
                <button className='btn btn-danger' onClick={()=>this.myClickHandler()}>submit</button>
                <h3>{this.state.msg}</h3>
                <br/>
                <br/>
                <input type="text" style={{width:'100%'}} value={this.state.msg} onChange={(e)=>this.txtChange(e)} ref="name" />
                {this.state.CommentList.map((item,index)=>{
                    return <CmtItem1 {...item} key={item.id} />
                })}
            </div>
        )
    }

    myClickHandler=(()=>{
        let flag;
        return ()=>{
            if (flag) {
                this.setState({msg:'haha'},()=>{console.log(this.state.msg)})
                flag=false;
            }else{
                this.setState({msg:'nmsl'},()=>{console.log(this.state.msg)})
                flag=true;
            }
        }
    })()
    txtChange=(e)=>{
        // console.log(e.target.value)
        // this.setState({msg:e.target.value})
        console.log(this.refs.name.value)
        this.setState({msg:this.refs.name.value})
    }
}