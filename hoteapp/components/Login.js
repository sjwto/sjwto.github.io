
import React from 'react';
require('../jsMd/jquery.min');
class  Login extends React.Component{
    constructor(props){
        super(props);
        this.login = this.login.bind(this);
        this.state = {
            username : '',
            password : '',
            arr : []
        }
    }
    login(){
        var username = document.getElementById('username').value
        var password = document.getElementById('password').value
        var _this = this;
        var arr = [];
        if(username&&password){
            var classUrl = "http://songjiawei.duapp.com/oAhotel/php/searchCustomer.php";
            fetch(classUrl).then(function (response) {
                return response.json();
                // console.log(response);
            }).then(function (data) {
                console.log(data);
                _this.setState({
                    username : username,
                    password : password,
                    arr : data
                })
            }).catch(function (e) {
                console.log('error')
            });
        }else{
            alert('用户名或密码不能为空！')

        }
        this.componentDidUpdate();
    }
    componentDidUpdate  (){
        var username = this.state.username;
        var password = this.state.password;
        var arr = this.state.arr;
        for(var item of arr){
            if((username==item.name)&&(password==item.passwd)){
                console.log("ok");
                localStorage.setItem('user',username);
                location.href = '#/user'
                break;
            }else{
                console.log("err")
            }
        }
    }
    render(){
        return (
            <div className="page">
                <header>登录</header>
                <div id="content">
                    <p className="toreg">还没有账号？<button type="button" className="btn btn-info">注册</button></p>
                    <form className="form-inline formlogin" action="javascript:;">
                        <div className="form-group">
                            <label htmlFor="exampleInputName2">用户名：</label>
                            <input type="text" className="form-control" id="username"  placeholder="用户名"/>
                        </div>
                        <div className="form-group">
                            <label>密码：</label>
                            <input type="password" className="form-control" id="password" placeholder="密码"/>
                        </div>
                        <button type="submit" className="btn btn-success" onClick={this.login}>登录</button>
                        <button type="reset" className="btn btn-success">重置</button>

                    </form>
                </div>
            </div>

        )
    }
}
export  default Login