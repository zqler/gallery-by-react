import React from 'React';

class NavTag extends React.Component {

    render() {
        return (
          <ul className="nav">
          <li><link to="movies">电影</link></li> //设置跳转
          <li><link to="books">图书</link></li>
          <li><link to="photo">照片</link></li>
          <li><link to="home">主页</link></li>
          </ul>
        );
    }
}
export default NavTag;//提供接口
