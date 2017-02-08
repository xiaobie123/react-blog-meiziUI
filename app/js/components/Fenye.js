import React from 'react';
import {
  Pagination,
  ModalTrigger,
  Modal
} from 'amazeui-react';

class Fenye extends React.Component {
  constructor(props) {
    super(props);
    this.state={showModal: false};
    this.prevPage = this.prevPage.bind(this);
    this.nextPage = this.nextPage.bind(this);
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
    console.log(this.props.articleDate);
    this.current=1;
    this.modal = <Modal type="alert" title="Amaze UI">亲！这已经是第一页了不能在往前了。。</Modal>;
}
  prevPage(e){
    e.preventDefault();
    if(this.current<=1){
      this.open();
      return;
    }
    this.current-=1;
    this.props.next(this.current);
    console.log('你点击了prev'); 
  }
  nextPage(e){
    e.preventDefault();
    console.log('你点击了next');
    this.current+=1;
    this.props.next(this.current);
  }
  close(){
    this.setState({showModal: false});
  }
  open(){
    this.setState({showModal: true});
  }
  render() {
    return (
      <Pagination>
        <ModalTrigger modal={this.modal} show={this.state.showModal} onClose={this.close}>
        </ModalTrigger>
        <Pagination.Item  prev href="#" onClick={this.prevPage}>&laquo; 一切的回顾</Pagination.Item>
        <Pagination.Item next href="#" onClick={this.nextPage}>不远的未来 &raquo;</Pagination.Item>
      </Pagination>
    );
  }
}
export default Fenye;
