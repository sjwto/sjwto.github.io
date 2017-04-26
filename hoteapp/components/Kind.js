import React from 'react';
require('../jsMd/bootstrap.min');
import {Link} from "react-router";
var bgimg = {
    background : "url('../images/bg2.jpg') -10px -10px"
}
class  Kind extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="page">
                <header>分类</header>
                <div id="content" className="cont">
                    <div id="listStyle" style={bgimg}>
                        <button type="button" className="btn btn-primary">
                            <Link to= "/singleroom" >
                                单人房
                            </Link>

                        </button>
                        <button type="button" className="btn btn-success">双人房</button>
                        <button type="button" className="btn btn-info">标准房</button>
                        <button type="button" className="btn btn-warning">豪华房</button>
                        <button type="button" className="btn btn-dange">总统套房</button>
                        <button type="button" className="btn btn-info">情侣套房</button>
                    </div>
                    <div id="dibu">
                        <img src="../images/reg.jpg" alt=""/>
                        <p>关于我们：<br/>地址上海市宝山区888号</p>
                        <p>热线电话：<br/>18360701297 宋先生</p>
                    </div>
                </div>
            </div>

        )
    }
}
export  default Kind