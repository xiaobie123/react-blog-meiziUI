import React from 'react';
import {
  List,
  ListItem,
  Badge,
} from 'amazeui-react';

class Catalog extends React.Component {
  render() {
    return (
    <div className="blog-sidebar-widget blog-bor">
        <h2 className="blog-title"><span>文章目录</span></h2>
        <List>
        <ListItem href="#">
          javascript<Badge>34</Badge>
        </ListItem>
        <ListItem href="#">
          html5<Badge>76</Badge>
        </ListItem>
        <ListItem href="#">
          css3<Badge>32</Badge>
        </ListItem>
        <ListItem href="http://www.amazeui.org">react<Badge>45</Badge></ListItem>
      </List>
    </div>
    );
  }
}
export default Catalog;
