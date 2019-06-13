import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'//这里将BrowserRouter重命名为Router
import CmtList from '@/Components/CmtList'
import Hot from '@/Components/Hot'
import Home from '@/Components/Home'
import Sort from '@/Components/Sort'
import State from '@/Components/State'
export default class Home1 extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        var query = {
            pathname: '/sort',
            query: {name:'我是通过query传值 '}
        }
        var state = {
            pathname: '/state',
            state: {name:'我是通过state传值'}
        }
        return (
            <Router>
                <div>
                    <ul>
                        <li><Link to="/">主页</Link></li>
                        <li><Link to="/hot">热门</Link></li>
                        {/*<li> <Link  to={{ pathname: ' /sort',query:{name:'jack'} }}>SORT</Link></li>*/}
                        <li><Link to={query}>SORT</Link></li>
                        <li><Link to={state}>State</Link></li>


                    </ul>
                    <hr/>
                    <Route exact path="/" component={Home}></Route>
                    <Route  path="/hot:id?" component={Hot} ></Route>
                    {/*<Route path="/sort"component={Sort}></Route>*/}
                    <Route path='/sort' component={Sort}/>
                    <Route path='/state' component={State}/>

                </div>
            </Router>
        )
    }
}
