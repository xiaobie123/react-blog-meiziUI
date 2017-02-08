import React from 'react';
/*import {
  Grid,
  Col,
} from 'amazeui-react';*/

class AboutMe extends React.Component {
  render() {
    return (
    <div className="blog-sidebar-widget blog-bor">
        <h2 className="blog-text-center blog-title"><span>关于我</span></h2>
        <img src="../../i/f14.jpg" alt="about me" className="blog-entry-img"/>
        <p>妹纸</p>
        <p>我是妹子UI，中国首个开源 HTML5 跨屏前端框架</p>
        <p>我不想成为一个庸俗的人。十年百年后，当我们死去，质疑我们的人同样死去，
        后人看到的是裹足不前、原地打转的你，还是一直奔跑、走到远方的我？</p>
    </div>
    );
  }
}
export default AboutMe;
