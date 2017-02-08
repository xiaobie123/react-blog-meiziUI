import React from 'react';
import {
  Grid,
  Col,
} from 'amazeui-react';

class Article extends React.Component {
  render() {
    return (
      <Grid className="am-g blog-entry-article">
        <Col sm={12} md={12} lg={6} className="blog-entry-img">
          <img src={this.props.articleDate.articleImg} alt="" className="am-u-sm-12"/>
        </Col>
        <Col sm={12} md={12} lg={6} className="blog-entry-text">
            <span><a href="" className="blog-color">作者 &nbsp;</a></span>
            <span> {this.props.articleDate.articleName} &nbsp;</span>
            <span>{this.props.articleDate.articledate}</span>
            <h1><a href={"#/Article"}>{this.props.articleDate.articleTitle}</a></h1>
            <p>{this.props.articleDate.artitleAbstract}
            </p>
            <p><a href="" className="blog-continue">continue reading</a></p>
        </Col>
      </Grid>
    );
  }
}
class ArticleList extends React.Component {
  render() {
    console.log(this.props.articleDate);
    let articleDateList= this.props.articleDate.map(function(article){
      return (
        <Article articleDate={article} key={article.articleId} ></Article>
      );
    });
    return (
    <div >
        {articleDateList}
    </div>
    );
  }
}
export default ArticleList;
