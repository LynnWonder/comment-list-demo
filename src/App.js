import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from '@/Components/Home1'
import Index from '@/Components/Index'

import CmtList from '@/Components/CmtList1'
import AutoFocusInput from '@/Components/AutoFocusInput'
import Post from '@/Components/Post'
import Card from '@/Components/Card'
import BlackBorderContainer from '@/Components/BlackBorderContainer'
import Editor from '@/Components/Editor'
import Comment from '@/Components/Comment'
function App() {
  return (
    <div className="App">
      <Home />
      <Index/>
      <CmtList/>
      <AutoFocusInput/>
      <Post content="this is a test for ref"></Post>
        <Card>
            <div style={{color:'red',fontSize:'18px',width:'100%',height:'30px',borderRadius:'10px',border:'1px solid green'}}>这是一个卡片啊！</div>
            <p>this is second text</p>
        </Card>
        <BlackBorderContainer>
            <div>this is a</div>
            <div>this is b</div>
        </BlackBorderContainer>
        <Editor></Editor>
        <Comment comment={{}}></Comment>
    </div>
  );
}

export default App;
