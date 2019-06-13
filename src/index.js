import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import CommentApp from './Components/comment/CommentApp'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import CommentApp from './containers/CommentApp'
import commentsReducer from './reducers/comments'
const store = createStore(commentsReducer)

ReactDOM.render(
        <Provider store={store}>
            <CommentApp />
        </Provider>,
    document.getElementById('root')
);