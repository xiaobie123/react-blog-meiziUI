import React from 'react';
import {
  Grid,
  Col,
} from 'amazeui-react';
import ArticleList from '../components/ArticleList';
import AboutMe from '../components/sidebar/AboutMe';
import ContactMe from '../components/sidebar/ContactMe';
import TagCloud from '../components/sidebar/TagCloud';
import Recommendlist from '../components/sidebar/Recommendlist';
import Fenye from '../components/Fenye';
import date from '../components/data/articlelistdata';
class Index extends React.Component {
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
        <AboutMe/>
        <ContactMe/>
        <TagCloud/>
        <Recommendlist/>
        </Col>
      </Grid>
    );
  }
}

export default Index;
