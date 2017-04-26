import React from 'react';

var imgs = ['1.jpg','2.jpg','3.jpg','4.jpg']
class  Cart extends React.Component{
    constructor(props){
        super(props);
        this.delorder = this.delorder.bind(this);
        this.state = {
            arr : []
        }
    }
    delorder(ev){
        //获取点击事件 带过来的id值
        // console.log(ev.target.getAttribute('data-id'))
        var sid =ev.target.getAttribute('data-id');
       var  datas = 'id='+sid
        // console.log(datas)
    //    http://songjiawei.duapp.com/oAhotel/php/deleteOrder.php
        var classUrl = "http://songjiawei.duapp.com/oAhotel/php/deleteOrder.php";
        $.ajax({
            type: "POST",
            url: classUrl,
            data: datas,
            success: function(msg){
                console.log('php返回'+msg)
                location.href = '#/user'
            }
        });
    }
    componentWillMount(){
        var user = localStorage.getItem('user');
        // console.log(user);
        var _this = this;
        var arrs = [];
        var classUrl = "http://songjiawei.duapp.com/oAhotel/php/searchOrder.php";
        fetch(classUrl).then(function (response) {
            return response.json();
        }).then(function (data) {
            // console.log(data);
            for(var item of data){
                // console.log(item.name)
                if(user==item.name){
                    arrs.push(item)
                    _this.setState({
                        arr : arrs
                    })
                }
            }

        }).catch(function (e) {
            console.log('error')
        })
    }
    render(){
        var rooms = [];
        var i = 0;

        if(this.state.arr){

            for (var item of this.state.arr){
                // console.log(imgs[i])

                var ssss = '../images/'+imgs[i]
                // console.log(item.id)
                rooms.push(<div id="myorder"  key={item.id}>
                    <img src={ssss}/>
                    <p>入住时间：{item.inTime}</p>
                    <p>退房时间时间：{item.inDays}</p>
                    <p>房间样式：{item.roomStyle}</p>
                    <button type="button" className="btn btn-primary btn-lg" data-id={item.id} onClick={this.delorder}>退房</button>
                </div>)
                i++;
            }
        }
        return (
            <div className="page">
                <header>我的订单</header>
                <div id="content">
                    <h3>我预订的房间</h3>
                    {/*<div id="myorder">*/}
                        {/*<img src="../images/aa2.jpg" alt=""/>*/}
                        {/*<p>入住时间：1919191</p>*/}
                        {/*<p>退房时间时间：1919191</p>*/}
                        {/*<p>房间样式：1919191</p>*/}
                        {/*<button type="button" className="btn btn-primary btn-lg">退房</button>*/}
                    {/*</div>*/}
                    {rooms}
                </div>
            </div>

        )
    }
}
export  default Cart