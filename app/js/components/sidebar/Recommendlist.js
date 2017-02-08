import React from 'react';
import {
  List,
  ListItem,
} from 'amazeui-react';

class Recommendlist extends React.Component {
  render() {
    return (
    <div className="blog-sidebar-widget blog-bor">
        <h2 className="blog-title"><span>热文推荐</span></h2>
        <List>
        <ListItem href="#">
          走在风中 今天阳光 突然好温柔
        </ListItem>
        <ListItem href="#">
          天的温柔 地的温柔 像你抱着我 然后发现 你的改变 孤单的今后
        </ListItem>
        <ListItem href="#">
          天边风光 身边的我 都不在你眼中 你的眼中 藏着什么 我从来都不懂
        </ListItem>
        <ListItem href="http://www.amazeui.org">不打扰 是我的温柔</ListItem>
      </List>
    </div>
    );
  }
}
export default Recommendlist;
