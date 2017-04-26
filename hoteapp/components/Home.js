import React from 'react';
require('../jsMd/swiper-3.4.1.min');
import {Link } from "react-router";
class  Home extends React.Component{
    constructor(props){
        super(props);
        this.order = this.order.bind(this);
        this.state ={
            arr :[]
        }
    }
    order(){
        try{
            var local = localStorage.getItem('user');
            if(local){
            }else{
                alert('请先登录')
                location.href = '#/user'
            }
        }catch (e){

        }
    }
    componentWillMount(){
        var _this = this;
        var classUrl = "http://songjiawei.duapp.com/oAhotel/php/searchRoom.php";
        fetch(classUrl).then(function (response) {
            return response.json();
        }).then(function (data) {
            // console.log(data);
            _this.setState({
                arr : data
            })
        }).catch(function (e) {
            console.log('error')
        })
    }
    componentDidUpdate(){
        // console.log(Swiper)
        var swiper = new Swiper(".swiper-container",{
            loop: true,
            autoplay:3000,
            autoplayDisableOnInteraction:false,
            pagination:".swiper-pagination"
        });
    }
    render(){
        // console.log(this.state.arr);
        if(this.state.arr !=''){
            var arrs = this.state.arr;
            var banner = [];
            var list = [];
            for(var i in arrs){
                console.log(arrs[i].roomImg)
                banner.push(
                    <div className="swiper-slide" key={i}>
                    <img src={"http://songjiawei.duapp.com/oAhotel/images/"+arrs[i].roomImg} />
                </div>)
                list.push(
                    <li key={i}>
                        <Link to= {"/detail/"+arrs[i].id} >
                            <img src={"http://songjiawei.duapp.com/oAhotel/images/"+arrs[i].roomImg} alt=""/>
                            <div>
                                <p><b>房间介绍：</b>{arrs[i].roomNews}</p>
                                <p><b>房间样式：</b>{arrs[i].roomStyle}</p>
                                <p><b>房间价格：</b><span>${arrs[i].roomPrice}</span></p>
                            </div>
                        </Link>

                        <button type="button" className="btn btn-danger" id="btn" onClick={this.order}>
                            <Link to= "/orderroom" >
                                预订房间
                            </Link>
                        </button>
                    </li>
                )
            }
            // {"http://songjiawei.duapp.com/oAhotel/images/"+arrs[i].roomImg}
        }
        return (
            <div className="page">
                <header>首页</header>
                <div id="content">
                    <div className="swiper-container banners">
                        <div className = "swiper-wrapper">
                            {banner}
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                    <ul className="ullist">
                        {list}
                    </ul>
                </div>
            </div>

        )
    }
    componentDidMount(){
        try{
            var local = localStorage.getItem('user');
            if(local){
                console.log(local)
                $('#btn').html('预订房间');
            }else{
            }
        }catch (e){

        }
    }
}
export  default Home