import React from 'react';
import {Link } from "react-router";
class  User extends React.Component{
    constructor(props){
        super(props);
        this.outlog = this.outlog.bind(this)
    }
    outlog(){
        localStorage.removeItem('user')
        location.reload()
    }
    componentDidMount(){
        try{
            var local = localStorage.getItem('user');
            if(local){
                // console.log(local)
                $('#logbtnto').html('已登录');
                $('#logbtnto').attr("disabled","disabled");
                // document.getElementById('logbtnto').style.disabled = 'true'
            }else{
                // document.getElementById('logbtnto').style.disabled = 'false'
            }
        }catch (e){

        }
    }
    render(){
        var username = localStorage.getItem('user');
        return (
            <div className="page">
                <header>我的账户</header>
                <div id="content">
                    <div id="mynews">
                        <img src="../images/aa2.jpg" alt=""/>
                        <div>
                            <p>姓名：{username}</p>
                            <button type="button" id="logbtnto" className="btn btn-success">
                                <Link to= "/login" >
                                    登录
                                </Link>
                            </button>
                            <button type="button" className="btn btn-success">
                                <Link to= "/register" >
                                    注册
                                </Link>
                            </button>
                        </div>
                    </div>
                    <ul id="mylist">
                        <li><a href="">我的订单</a></li>
                        <li><a href="">我的收藏</a></li>
                        <li><a href="">我的订单</a></li>
                        <li><a href="">我的订单</a></li>
                    </ul>
                    <button type="button" className="btn btn-danger" id="outlogin" onClick={this.outlog}>退出登录</button>
                </div>
            </div>

        )
    }
}
export  default User