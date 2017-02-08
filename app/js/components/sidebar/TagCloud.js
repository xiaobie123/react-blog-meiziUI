import React from 'react';
class TagCloud extends React.Component {
  render() {
    return (
    <div className="blog-clear-margin blog-sidebar-widget blog-bor am-g ">
        <h2 className="blog-title"><span>标签云</span></h2>
        <div className="am-u-sm-12 blog-clear-padding">
        <a href="" className="blog-tag">amaze</a>
        <a href="" className="blog-tag">妹纸 UI</a>
        <a href="" className="blog-tag">HTML5</a>
        <a href="" className="blog-tag">这是标签</a>
        <a href="" className="blog-tag">Impossible</a>
        <a href="" className="blog-tag">开源前端框架</a>
        </div>
    </div>
    );
  }
}
export default TagCloud;
