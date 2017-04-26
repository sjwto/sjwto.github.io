

import React from 'react';
import fetchJsonp from "fetch-jsonp"
require('../jsMd/jquery.min');
import {Link } from "react-router";
var colors = {
    color : '#fff'
}
var wid = {
    width: "184px"
}
class  Orderroom extends React.Component{
    constructor(props){
        super(props);
        this.register = this.register.bind(this);
        this.back = this.back.bind(this);
    }
    back(){
        window.location.href="../"
    }
    register(){
        var username = $('#username').val();
        var ssid = $('#ssid').val();
        var connect = $('#connect').val();
        var inTime = $('#intime').val();
        var inDays = $('#outtime').val();
        var roomStyle = $('#wid').val()
        var datas = "name="+username+"&identity="+ssid+"&contact="+connect+"&inTime="+inTime+"&inDays="+inDays+"&roomStyle="+roomStyle+"";
        console.log(datas);
        //name=username&password=password&identity=sid&sex=sex&contact=connect
        var _this = this;
        var arr = [];
        if(username&&ssid&&connect){
            var classUrl = "http://songjiawei.duapp.com/oAhotel/php/addOrder.php";
            $.ajax({
                type: "POST",
                url: classUrl,
                data: datas,
                success: function(msg){
                    console.log( "Data Saved: " + msg );
                    alert('预订成功')
                    location.href = '#/cart'

                }
            });
        }else{
            alert('不能为空')
        }
    }
    componentDidUpdate(){

    }
    render(){
        return (
            <div className="page">
                <header><img src="../images/back.png" alt="" onClick={this.back}/>房间预订</header>
                <div id="content">
                    <form className="form-inline formlogin" action="javascript:;">
                        <div className="form-group">
                            <label htmlFor="exampleInputName2">用户名：</label>
                            <input type="text" className="form-control" id="username"  placeholder="用户名"/>
                        </div>
                        <div className="form-group">
                            <label>身份证号：</label>
                            <input type="text" className="form-control" id="ssid" placeholder="身份证号"/>
                        </div>
                        <div className="form-group">
                            <label>联系电话：</label>
                            <input type="text" className="form-control" id="connect" placeholder="联系电话"/>
                        </div>
                        <div className="form-group">
                            <label>入住时间：</label>
                            <input type="date" className="form-control" id="intime" placeholder="入住时间"/>
                        </div>
                        <div className="form-group">
                            <label>退房时间：</label>
                            <input type="date" className="form-control" id="outtime" placeholder="退房时间"/>
                        </div>
                        <div className="form-group">
                            <label>房间样式：</label>
                            <select className="form-control orstyle" id="wid">
                                <option>单人房</option>
                                <option>双人房</option>
                                <option>标准房</option>
                                <option>豪华房</option>
                                <option>总统套房</option>
                                <option>情趣套房</option>
                            </select>
                        </div>
                        <button type="submit" className="btn btn-success" onClick={this.register}>预订</button>
                        <button type="reset" className="btn btn-success">重置</button>

                    </form>
                </div>
            </div>

        )
    }
}
export  default Orderroom
