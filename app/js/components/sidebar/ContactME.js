import React from 'react';
/*import {
  Grid,
  Col,
} from 'amazeui-react';*/

class ContactMe extends React.Component {
  render() {
    return (
    <div className="blog-sidebar-widget blog-bor">
        <h2 className="blog-text-center blog-title"><span>联系我</span></h2>
        <p>
            <a href=""><span className="am-icon-qq am-icon-fw am-primary blog-icon"></span></a>
            <a href=""><span className="am-icon-github am-icon-fw blog-icon"></span></a>
            <a href=""><span className="am-icon-weibo am-icon-fw blog-icon"></span></a>
            <a href=""><span className="am-icon-reddit am-icon-fw blog-icon"></span></a>
            <a href=""><span className="am-icon-weixin am-icon-fw blog-icon"></span></a>
        </p>
    </div>
    );
  }
}
export default ContactMe;
