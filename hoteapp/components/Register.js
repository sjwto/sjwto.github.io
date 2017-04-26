
import React from 'react';
import fetchJsonp from "fetch-jsonp"
require('../jsMd/jquery.min');
import {Link } from "react-router";
var colors = {
    color : '#fff'
}
class  Register extends React.Component{
    constructor(props){
        super(props);
        this.register = this.register.bind(this);
    }
    register(){
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
        var repassword = document.getElementById('repassword').value;
        var sex = document.getElementById('sex').value;
        var sid = document.getElementById('sid').value;
        var connect = document.getElementById('connect').value;
        console.log(username,password,repassword,sex,sid,connect)
        var datas = "name="+username+"&password="+password+"&identity="+sid+"&sex="+sex+"&contact="+connect+"";
        console.log(datas);
        //name=username&password=password&identity=sid&sex=sex&contact=connect
        var _this = this;
        var arr = [];
        if(username&&password&&sid){
            var classUrl = "http://songjiawei.duapp.com/oAhotel/php/addCustomer.php";
            $.ajax({
                type: "POST",
                url: classUrl,
                data: datas,
                success: function(msg){
                    console.log( "Data Saved: " + msg );
                    location.href = '#/user'
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
                <header>注册</header>
                <div id="content">
                    <p className="toreg">有账号了？
                        <button type="button" className="btn btn-info" >
                            <Link to= "/login" activeStyle={colors}>
                                登录
                            </Link>
                    </button></p>
                    <form className="form-inline formlogin" action="javascript:;">
                        <div className="form-group">
                            <label htmlFor="exampleInputName2">用户名：</label>
                            <input type="text" className="form-control" id="username"  placeholder="用户名"/>
                        </div>
                        <div className="form-group">
                            <label>密码：</label>
                            <input type="password" className="form-control" id="password" placeholder="密码"/>
                        </div>
                        <div className="form-group">
                            <label>确认密码：</label>
                            <input type="password" className="form-control" id="repassword" placeholder="确认密码"/>
                        </div>
                        <div className="form-group">
                            <label>性别：</label>
                            <input type="text" className="form-control" id="sex" placeholder="性别"/>
                        </div>
                        <div className="form-group">
                            <label>身份证：</label>
                            <input type="text" className="form-control" id="sid" placeholder="身份证"/>
                        </div>
                        <div className="form-group">
                            <label>联系电话：</label>
                            <input type="text" className="form-control" id="connect" placeholder="联系电话"/>
                        </div>
                        <button type="submit" className="btn btn-success" onClick={this.register}>注册</button>
                        <button type="reset" className="btn btn-success">重置</button>

                    </form>
                </div>
            </div>

        )
    }
}
export  default Register
