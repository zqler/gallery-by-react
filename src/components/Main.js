require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Nav from '../components/nav';


let yeomanImage = require('../images/protrait.jpg');

class AppComponent extends React.Component {

    render() {
        return (
          <div className = "index" >
            <img src = { yeomanImage } alt = "Yeoman Generator" / >
            <div className = "notice" > 我们开始学习react {this.props.name}{this.props.hello}< /div>
            
              <div className="user"> <Label name='用户名' /><Input placeholder='用户名' /></div>
              <div className="password"><Label name='密码' /><Input placeholder='密码'/></div>
              <div className="btn"><Button value='登录'/><Button value='取消'/></div>
            </div >
        );
    }
}
class Label extends React.Component{
  render(){
    return(

        <label>{this.props.name}</label>

    );
  }
}
class Input extends React.Component{
  render(){
    return(

        <input type="text" placeholder={this.props.placeholder}/>

    );
  }
}
class  Button extends React.Component{
  render(){
    return(

        <button>{this.props.value}</button>

    );
  }
}
AppComponent.defaultProps = {
  name: '张权',
  hello: 'hello world'
};

export default AppComponent;
