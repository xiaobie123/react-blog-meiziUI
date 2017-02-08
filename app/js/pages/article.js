import React from 'react';
import {
  Container,
  Grid,
  Col,
} from 'amazeui-react';
import Catalog from '../components/sidebar/Catalog';
import ContactMe from '../components/sidebar/ContactMe';
import TagCloud from '../components/sidebar/TagCloud';
import Recommendlist from '../components/sidebar/Recommendlist';
import ArticleCommentBox from '../components/ArticleCommentBox';
class Article extends React.Component {
  render() {
    return (
      <Grid className="am-g am-g-fixed blog-fixed">
        <Col sm={12} md={8}> 
        <article className="am-article blog-article-p">
        <div className="am-article-hd">
          <h1 className="am-article-title blog-text-center">我的文章哎</h1>
          <p className="am-article-meta blog-text-center">
              <span><a href="#" className="blog-color">article &nbsp;</a></span>
              <span><a href="#">@amazeUI &nbsp;</a></span>
              <span><a href="#">2015/10/9</a></span>
          </p>
        </div>
        <p>我遇见了你，你一直觉得自己不够美好，充满惊慌与卑微，但是，你即使那样害怕，却守在我的身后，不曾后
        退。人们总是崇拜英雄，惊喜与他们随时随地的光芒，但是最真实的事情永远是我们都会恐惧都会失败，有时受尽打击，又是
        无能为力。你说我是英雄，其实我不敢告诉你，如果不是你，你傻傻地倔强地站在那里，我一回头就能看见你，那么，或许，我早
        就做了命运的逃兵。<br/><br/>
        红衣佳人白衣友，朝与同歌暮同酒，世人谓我恋长安，其实只恋长安某。 ——殊同 <br/>

水银泻地的时候，忧愁穿过墙壁，又和着嘶哑的音乐，使我羞惭、灰心。整个夏季，仿佛一场，没有主题的游戏。 ——赵野 <br/>

我感到自己仿佛变得蔚蓝，变得无边无际，眼睛和指尖上，栖息着无数的星辰。 ——马林·索雷斯库 <br/>

手中的书页犹如薄薄的剃刀片白亮亮闪着寒光。在凌晨四时寂寞的时刻里，我可以听到孤独之根正一点点伸长的声音。 ——村上春树 <br/>

你的明眸是映现我灵魂颤动的湖，我那成群结队的梦想，为寻求解脱，而纷纷投入你这秋波深处。 ——波德莱尔  <br/>

当我们只剩下虚无，唯有沉默的太阳够好，是你的静寂，是无声的声音。 ——佩索阿
         </p>     
      </article>
      	<div className="am-g blog-article-widget blog-article-margin">
	      <div className="am-u-lg-4 am-u-md-5 am-u-sm-7 am-u-sm-centered blog-text-center">
	        <span className="am-icon-tags"> &nbsp;</span><a href="#">标签</a> , <a href="#">TAG</a> , <a href="#">啦啦</a>
	        <hr/>
	        <a href=""><span className="am-icon-qq am-icon-fw am-primary blog-icon"></span></a>
	        <a href=""><span className="am-icon-wechat am-icon-fw blog-icon"></span></a>
	        <a href=""><span className="am-icon-weibo am-icon-fw blog-icon"></span></a>
	      </div>
	    </div>
	    <hr/>
	    <div className="am-g blog-author blog-article-margin">
          <div className="am-u-sm-3 am-u-md-3 am-u-lg-2">
            <img src="../../i/f15.jpg" alt="" className="blog-author-img am-circle"/>
          </div>
          <div className="am-u-sm-9 am-u-md-9 am-u-lg-10">
          <h3><span>作者 &nbsp;: &nbsp;</span><span className="blog-color">amazeui</span></h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt 
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>
        <hr/>
        <ul className="am-pagination blog-article-margin">
          <li className="am-pagination-prev"><a href="#" className="">&laquo; 一切的回顾</a></li>
          <li className="am-pagination-next"><a href="">不远的未来 &raquo;</a></li>
        </ul>
          <ArticleCommentBox/>
        <hr/>
        </Col>
        <Col sm={12} md={4} className="blog-sidebar">
        <Catalog/>
        <ContactMe/>
        <TagCloud/>
        <Recommendlist/>
        </Col>
      </Grid>
    );
  }
}

export default Article;
