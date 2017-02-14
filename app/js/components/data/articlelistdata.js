

let date=function(num){

var articledate=[];

for(let i=1;i<100;i++){
	let article={
      articleId:i,
      /*articleImg:"../../i/f"+Math.floor(Math.random()*10+1)+".jpg",*/
     articleImg:"../../i/0"+Math.floor(Math.random()*9+1)+".jpg",
      articleName:"小名",
      articledate:"2015/10/9",
      articleTitle:"总在思考一句积极的话",
      artitleAbstract:"那时候刚好下着雨，柏油路面湿冷冷的，还闪烁着青、黄、红颜色的灯火。"
    };
    articledate.push(article);
}
return articledate.slice(5*(num-1),5*(num));
}
export default date;