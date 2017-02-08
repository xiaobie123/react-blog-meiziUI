import React, { Component } from 'react';
import {
  render,
} from 'react-dom';
import {
  Router,
  Route,
  IndexRoute,
  hashHistory,
} from 'react-router';

import {
  Topbar,
  Nav,
  CollapsibleNav,
  Input,
  Form
} from 'amazeui-react';

import RouteLink from './components/RouteLink';
import SiteFooter from './components/SiteFooter';
import WHeader from './components/WHeader';
class App extends Component {
  constructor(props){
    super(props);
    this.search = this.search.bind(this);
}
  search(e){/*关键字搜索*/
    if(e.keyCode!=13){
      return;
    }
    const value = e.target.value;
    const path = `/ArticleSerch/${value}`;
    hashHistory.push(path);
  }
  render() {
    return (

      <div id="blog">
      <WHeader/>
      <hr/>
        <Topbar
          className="blog-nav"
          brandLink="/"
        >
          <CollapsibleNav eventKey="nav" className="b">
            <Nav topbar >
              <RouteLink to="/index">首页</RouteLink>
              <RouteLink to="/Articles">文章</RouteLink>
              <RouteLink to="/page2">关于我</RouteLink>
              <Form horizontal className="am-fr"><Input placeholder="搜索" onKeyDown={this.search}/></Form>
            </Nav>
          </CollapsibleNav>
        </Topbar>
        <hr/>
        <main className="ask-main">
          {this.props.children}
        </main>
        <SiteFooter />
      </div>
    );
  }
}

// Pages
import Index from './pages/Index';
import Articles from './pages/Page1';
import Page2 from './pages/Page2';
import Article from './pages/article';
import articleSerch from './pages/articleSerch';
const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Index} />
      <Route path="index" component={Index} />
      <Route path="Articles" component={Articles} />
      <Route path="page2" component={Page2} />
      <Route path="Article" component={Article} />
      <Route path="/ArticleSerch/:value" component={articleSerch}/>
    </Route>
  </Router>
);

document.addEventListener('DOMContentLoaded', () => {
  render(routes, document.getElementById('root'));
});
