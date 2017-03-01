require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

let yeomanImage = require('../images/protrait.jpg');

class AppComponent extends React.Component {
    render() {
        return ( <
            div className = "index" >
            <
            img src = { yeomanImage }
            alt = "Yeoman Generator" / >
            <
            div className = "notice" > 我们开始学习react < /div> < /
            div >
        );
    }
}

AppComponent.defaultProps = {};

export default AppComponent;