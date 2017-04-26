import React from "react";
import {Link} from "react-router";
const active = {color:"#f66"};
class Detail extends React.Component {
    constructor(props){
        super(props);
        this.order = this.order.bind(this);
        this.back = this.back.bind(this);
        this.state = {
            arr :[]
        }
    }
    back(){
        window.location.href="../"
    }
    order(){
        try{
            var local = localStorage.getItem('user');
            if(local){
                location.href = '#/orderroom'
            }else{
                alert('请先登录')
                location.href = '#/user'
            }
        }catch (e){

        }
    }
    componentWillMount(){
        var _this = this;
        var pid = this.props.params.pid;
        console.log(this.props.params.pid);
        var arrU = [];
        var classUrl = "http://songjiawei.duapp.com/oAhotel/php/searchRoom.php";
        fetch(classUrl).then(function (response) {
            return response.json();
        }).then(function (data) {
            console.log(data);
            for(var item of data){
                if(item.id == pid){
                    arrU.push(item)
                    _this.setState({
                        arr : arrU
                    }) ;
                    break;
                }
            }
        }).catch(function (e) {
            console.log('error')
        })
    }

    render(){
        if(this.state.arr !=''){
            var arrs = this.state.arr;
            var detail = [];
            var Id = this.props.params.pid;
                detail.push(
                    <div id="content" key="Id" className="roomdetail">
                        <img src={"http://songjiawei.duapp.com/oAhotel/images/"+arrs[0].roomImg} alt=""/>
                        <div>
                            <p>房间详情:{arrs[0].roomNews}</p>
                            <p>房间号:{arrs[0].roomNum}</p>
                            <p>房间价格:${arrs[0].roomPrice}</p>
                            <p>房间样式:{arrs[0].roomStyle}</p>
                        </div>
                        <button type="button" className="btn btn-success " onClick={this.order}>去预定房间</button>
                    </div>)

            // {"http://songjiawei.duapp.com/oAhotel/images/"+arrs[i].roomImg}
        }
        return (
            <div className="page">
                <header><img src="../images/back.png" alt="" onClick={this.back}/>房间详情</header>
                {detail}
            </div>
        )
    }
}

export default Detail;