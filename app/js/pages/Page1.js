import React from 'react';
import {
  Grid,
  Col,
} from 'amazeui-react';
import ArticleList from '../components/ArticleList';
import Catalog from '../components/sidebar/Catalog';
import TagCloud from '../components/sidebar/TagCloud';
import Recommendlist from '../components/sidebar/Recommendlist';
import Fenye from '../components/Fenye';
import date from '../components/data/articlelistdata';
class list extends React.Component {
  constructor(props){
    super(props);
    this.next = this.next.bind(this);
    this.state={ articleDate:[]};
}
  componentDidMount(){
    this.setState({articleDate:date(1)});
  }
  next(num){
    console.log(num);
this.setState({articleDate:date(num)});
  }
  render() {
    return (
      <Grid className="am-g am-g-fixed blog-fixed">
        <Col sm={12} md={8}>
          <ArticleList articleDate={this.state.articleDate} ></ArticleList>
          <Fenye next={this.next} ></Fenye>
        </Col>
        <Col sm={12} md={4} className="blog-sidebar">
        <Catalog/>
        <TagCloud/>
        <Recommendlist/>
        </Col>
      </Grid>
    );
  }
}

export default list;
