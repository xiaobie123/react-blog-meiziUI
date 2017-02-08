import React from 'react';
import {
Modal,
ModalTrigger
} from 'amazeui-react';
var data = [
  {id: 1, author: "李宁", text: "这是 我的 评论"},
  {id: 2, author: "李二", text: "呵呵 这也是 *我的* 评论"}
];
class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.quote=this.quote.bind(this);
}

quote(e){
e.preventDefault();
this.props.quote(this.props)
}
  render() {
      return(
            <div id="" className="comment">
              <div className="inner">
                <div className="comment-header">
                  <div className="asset-meta">
                    <p>
                      <span className="byline">
                                <span className="vcard author">{this.props.author}</span> 说：
                      </span>
                    </p>
                  </div>
                </div>
                <div className="comment-content" id="">
                  <p dangerouslySetInnerHTML={{__html:this.props.text.toString()}}></p>
                </div>
                <div className="comment-footer">
                  <div className="comment-footer-inner">
                    <p>
                      <abbr className="published" title="November 15, 2016  9:30 AM">2016年11月15日 09:30</abbr> |
                      <a href="#" title={"引用"+this.props.author+"的这条评论"} onClick={this.quote}>引用</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
        );
  }
}
class CommentList extends React.Component {
  constructor(props) {
    super(props);
}
  render() {
    const quote=this.props.quote;
    const commentNodes = this.props.data.map(function(comment) {
      return (
        <Comment {...comment} key={comment.id} quote={quote}>
        </Comment>
      );
    });
    return (
      <div>
        {commentNodes}
      </div>
    );
  }
}
class CommentForm extends React.Component{
    constructor(props) {
    super(props);
    this.handleAuthorChange=this.handleAuthorChange.bind(this);
    this.handleTextChange=this.handleTextChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
    this.close=this.close.bind(this);
    this.open=this.open.bind(this);
    this.state={author: '', text: '',showModal:false};
    this.modal = <Modal type="alert" title="警告"></Modal>;
}
  handleAuthorChange(e) {
    this.setState({author: e.target.value});
  }
  handleTextChange(e) {
    this.setState({text: e.target.value});
  }
  handleSubmit(e) {
    e.preventDefault();
    var author = this.state.author.trim();
    var text = this.state.text.trim();
    if (!author) {
      this.modal = <Modal type="alert" title="警告">用户名必须填写，否则不知道您是谁啊！</Modal>;
      this.open();
      return;
    }
    if (!text) {
      this.modal = <Modal type="alert" title="警告">评论内容必须填写，否则不知道您想说啥啊！</Modal>;
      this.open();
      return;
    }
    this.props.onCommentSubmit({author: author, text: text});
    // TODO: send request to the server
    this.setState({author: '', text: ''});
  }
  close(){
    this.setState({showModal: false});
  }

  open(){
    this.setState({showModal: true});
  }
  componentWillReceiveProps(newProps){
    console.log(newProps);
    var a=newProps.quoteDate.author;
    var b=newProps.quoteDate.text;
    if(a&&b){
    var blockquote =`<blockquote><div>${a}发言：</div>${b}</blockquote>`;
    this.setState({text: blockquote});
    }
  }
  render() {
    return (
      <form className="am-form am-g" onSubmit={this.handleSubmit}>
              <fieldset>
                <div className="am-form-group am-u-sm-4 blog-clear-left">
                  <input type="text" className="" placeholder="名字" value={this.state.author}
                    onChange={this.handleAuthorChange}/>
                </div>
                <div className="am-form-group am-u-sm-4">
                  <input type="email" className="" placeholder="邮箱"/>
                </div>
                <div className="am-form-group am-u-sm-4 blog-clear-right">
                  <input type="password" className="" placeholder="网站"/>
                </div>
                <div className="am-form-group">
                  <textarea className="" rows="5" placeholder="一字千金" value={this.state.text}
                      onChange={this.handleTextChange}></textarea>
                </div>
                <p><button type="submit" className="am-btn am-btn-default">发表评论</button></p>
              </fieldset>
              <ModalTrigger
                modal={this.modal}
                show={this.state.showModal}
                onClose={this.close} />    
            </form>
    );
  }
};

class ArticleCommentBox extends React.Component {
  constructor(props) {
    super(props);
    this.handleCommentSubmit=this.handleCommentSubmit.bind(this);
    this.quote=this.quote.bind(this);
    this.state={
      data:[],
      quoteDate:{}
    };
}
componentDidMount(){
    this.setState({data:data});
}
handleCommentSubmit(comment) {
    data.push(comment);
    this.setState({data:data});
  }
quote(data){/*点击引用事件*/
  console.log(data);
  this.setState({quoteDate:data});
  console.log(this.state);
}
  render() {

    return (
          <div className="article-comment">
            <h3 className="blog-comment">评论({this.state.data.length}条)</h3>
            <CommentList quote={this.quote} data={this.state.data} />
            <CommentForm quoteDate={this.state.quoteDate} onCommentSubmit={this.handleCommentSubmit} />
          </div>
    );
  }
}
export default ArticleCommentBox;
