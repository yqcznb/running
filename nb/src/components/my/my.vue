<template>
    <div id="my">
        <router-link :to="{name:'pinform',params:{backey:'/footer/my'}}">
            <div id="my_head">
                <div id="head_left">
                    <h4>{{ uname }} <router-link to='/confirm' @click.native="routerRefresh"><i :class="if_rz" class="iconfont iconwrz"></i></router-link></h4>
                    <h5><router-link to="/drole">{{ uduan }}段位 》</router-link></h5>
                    <img :src='levelImg' class="levelimg" >
                    <router-link to="/ex_bonus" @click.native="routerRefresh" >
                        <span class="ex-bonus">我的积分 》</span>
                    </router-link>
                </div>
                <div id="head_right">
                    <img :src='headportrait' class="headportrait">
                    <img :src='duanImg' class="duanimg">
                </div>
            </div>
        </router-link>
        <div id="myChart" :auto-resize='autoresize'></div>
        <div id="run_data">
            <router-link to="/run_data_detail" @click.native="routerRefresh">
                <div id="details">
                    <i class="iconfont icontiyu-paobu"></i><span class="">跑步数据详情</span><i class="iconfont iconfanhui iconfont-right"></i>
                </div>
            </router-link>
            <hr>
            <router-link to="/rank_list" @click.native="routerRefresh">
                <div id="rank_list">
                    <i class="iconfont iconpaihangbang rankimg"></i><span class="">排行榜</span><i class="iconfont iconfanhui iconfont-right"></i>
                </div>
            </router-link>
        </div>
        <router-link to="/tea_special" @click.native="routerRefresh">
            <div id="tea_special" v-show="tea_special">
                <i class="iconfont iconxuesheng"></i><span>学生跑步数据</span><i class="iconfont iconfanhui iconfont-right"></i>
            </div>
        </router-link>
        <router-link :to="mode"  @click.native="routerRefresh">
            <div id="settings">
                <i class="iconfont iconsettings"></i><span>设置</span><i class="iconfont iconfanhui iconfont-right"></i>
            </div>
        </router-link>
    </div>
</template>
<script> 
import axios from 'axios'
export default {
    name: 'my',
    data() {
        return{
            autoresize: true,
            uname: '用户2048',
            if_rz: 'have_not_rz',
            uduan: '青铜萌新',
            levelImg: require('../../assets/img/my/schedual_level/default.png'),
            headportrait:require('../../assets/img/my/headportrait/default.png'),
            duanImg:require('../../assets/img/my/duan/default.png'),
            nearImg:require('../../assets/img/my/run_data/near.png'),
            mode:'/settings',
            routerAlive:true,
            date: [],
            ydrqOne: '',
            ydrqTwo: '',
            miledate: [ 10000, 20000, 12065, 3620,16530, 9510, 20100, 13002, 13580,15063, 15200, 9000 ],
            speeddate: [ 3.1, 5.55, 5.59, 6.20, 4.39, 5.00, 6.1, 7.4,7.34, 8.26, 3.58, 8.12 ],
            tea_special: false,
        }
    },
    beforeCreate() {
            
    },
    created() {
        // 近12日日期
            let myDate = new Date(); //获取今天日期
            myDate.setDate(myDate.getDate() - 12);
            let dateArray = []; 
            let dateTemp; 
            let flag = 1; 
            for (var i = 0; i < 12; i++) {
                dateTemp = (myDate.getMonth()+1)+"-"+myDate.getDate();
                dateArray.push(dateTemp);
                myDate.setDate(myDate.getDate() + flag);
            }
            this.date = dateArray;
            let t_Month = myDate.getMonth()+1;
            if(String(t_Month).length == 1) {
                this.ydrqOne = myDate.getFullYear()+'-0'+dateArray[0];
                this.ydrqTwo = myDate.getFullYear()+'-0'+dateArray[11];
            }
            else if(t_Month == 10 && myDate.getDate() <= 11) {
                this.ydrqOne = myDate.getFullYear()+'-0'+dateArray[0];
                this.ydrqTwo = myDate.getFullYear()+'-'+dateArray[11];
            }
            else {
                this.ydrqOne = myDate.getFullYear()+'-'+dateArray[0];
                this.ydrqTwo = myDate.getFullYear()+'-'+dateArray[11];
            }
        // 个人信息请求
        axios.get('http://no37.store:8080/AK/ShowMe',{
            params: {
                yhid:localStorage.getItem("yhid"),
                // yhid:28,
            }})
            .then(response=>{
                // console.log(response);
                this.uname = response.data.yhnc;
                this.headportrait = response.data.yhtx;
                this.uduan = response.data.dwmc;
                this.duanImg = "http://no37.store/image/duan/"+response.data.dwtp;
                this.levelImg = "http://no37.store/image/schedual_level/"+response.data.dwjdtp;
            })      //获取失败
            .catch(error=>{
                alert('网络错误，不能访问');
            })
        if(localStorage.getItem("yhsf") == 0 || localStorage.getItem("yhsf") == 1) {
            this.if_rz = "have_rz";
            // this.tea_special = true;
        }
        if(localStorage.getItem("yhsf") == 1) {
            this.tea_special = true;
        }
        // 近期跑步数据请求
        axios.get('http://no37.store:8080/AK/SelectMove',{
            params: {
                yhid:localStorage.getItem("yhid"),ydrqOne:this.ydrqOne,ydrqTwo:this.ydrqTwo,
            }})
            .then(response=>{
                // console.log(response);
            })      //获取失败
            .catch(error=>{
                alert('网络错误，不能访问');
            })
    },
    mounted(){
        this.drawLine();
    },
    methods: {
        // routerRefresh() {
        //     window.location.reload();
        // },
        drawLine(){
            // 基于准备好的dom，初始化echarts实例
            let myChart = this.$echarts.init(document.getElementById('myChart'));
            // 图表自适应
            window.onresize = function(){myChart.resize();}
            // 绘制图表
            let miledate = this.miledate;
            let speeddate = this.speeddate;
            myChart.setOption({
                title: {
                    left: 'center',
                    bottom: '0%',
                    text: '近 期 跑 步 数 据',
                    textStyle: {
                        fontFamily: '方正汉真广标简体',
                        color: 'white',
                        fontSize: 14,
                        fontWeight: 'normal',
                        fontStyle: 100,
                    },
                },
                tooltip : {
                    trigger : 'axis'
                },
                grid : {
                    right : '10.5%',
                    left: '15.5%',
                    // bottom: '14%',
                },
                toolbox : {
                    feature : {
                        dataView : {
                            show : false,
                            readOnly : false
                        },
                        restore : {
                            show : false
                        },
                        saveAsImage : {
                            show : false
                        }
                    }
                },
                legend : {
                    data : [ '里程' ,'配速']
                },
                xAxis : [ {
                    type : 'category',
                    boundaryGap: false,
                    splitLine:{show: false},
                    axisTick : {
                        alignWithLabel : false,
                    },
                    axisLine : {
                        lineStyle : {
                            color: '#c8c6c9',
                        },
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            fontSize: 12,
                            color: 'white',
                        },
                    },
                    data: this.date,
                } ],
                yAxis : [ {
                    type : 'value',
                    position : 'left',
                    splitLine:{show: false},
                    axisLine : {
                        lineStyle : {
                            color: '#c8c6c9',
                        },
                    },
                    axisLabel : {
                        formatter : '{value}',
                        textStyle: {
                            fontSize: 12,
                            color: 'white',
                        },
                    }
                },{
                    type : 'value',
                    position : 'right',
                    splitLine:{show: false},
                    axisLine : {
                        lineStyle : {
                            color: '#c8c6c9',
                        },
                    },
                    axisLabel : {formatter : '{value}',
                    textStyle: {
                        fontSize: 12,
                        color: 'white',
                    },
                }}],
                series: [ {
                    name : '里程',
                    smooth: 'true',
                    type : 'line',
                    itemStyle: {normal: { color: '#5eb5d7',lineStyle: {color: '#5eb5d7'}}},
                    areaStyle: {
                        color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{offset: 0, color: '#84eded'},{offset: 0.8, color: '#f3fffc'}])},
                    data: miledate
                },{
                    name : '配速',
                    smooth: 'true',
                    type : 'line',                                itemStyle: {normal: { color: '#e56f7f'}},
                    yAxisIndex : 1,
                    areaStyle: {
                        color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{offset: 0, color: '#efc7b4'},{offset: 0.8, color: '#f6ebd5'}])},
                    data: speeddate,
                } ]
            });
        }
    }
}
</script>
<style scoped>
    body {
        background-color: #dec674;
    }
    a {
        text-decoration: none;
        color: black;
    }
    #my {
        width: 100%;
        /* max-width: 600px; */
        height: 100%;
        position: absolute;
        overflow-x: hidden;
        overflow-y: scroll;
        top: 0;
        left: 0;
        right: 0;
        margin: 0 auto;
        background: linear-gradient(top,rgb(199, 195, 197),#f9f6c9);
    }
    #my_head,#run_data,#settings,#tea_special {
        width: 90%;
        /* border: 1px solid red; */
        display: flex;
        margin: 0 auto;
        background-color: white;
    }
    #my_head {
        height: 22%;
        border-radius: 0 0 7px 7px;
        padding: 15px 20px;
        margin-bottom: 1%;
        display: flex;
        justify-content: space-between;
    }
    #head_left,#head_right {
        height: 100%;
    }
    #head_left {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    h4,h5 {
        font-weight: normal;
        text-align: left;
    }
    h4 {
        /* margin-bottom: 20%; */
    }
    h4 a{
        font-size: 13px;
        color: #d5a269;
        font-style: italic;
    }
    .have_rz:before {
        color: rgba(253, 185, 51, 0.89);
    }
    .have_not_rz:before {
        color:lightgray;
    }
    h5 a{
        text-decoration: none;
        color: rgba(253, 185, 51, 0.89);
        /* color: #999999; */
    }
    .levelimg {
        width: 70%;
        max-width: 336px;
    }
    .ex-bonus {
        font-size: 14px;
        float: left;
        line-height: 100%;
        color: rgba(253, 185, 51, 0.89);
    }
    #head_right {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .headportrait {
        border: 1px solid #bbb;
        /* position: relative; */
        border-radius: 50%;
        height: 63%;
        z-index: 4;
    }
    .duanimg {
        /* border: 1px solid #bbb; */
        height: 50%;
        margin-top: -25%;
        position: relative;
        z-index: 0;
    }
    #myChart {
        width: 100%;
        height: 30%;
        /* border: 1px solid red; */
        display: flex;
        justify-content: center;
        left: 0;
        right: 0;
        margin: 0 auto;
    }
    .iconfont {
        color: #d5a269;
        font-size: 130%;
    }
    #run_data,#settings,#tea_special {
        border-radius: 7px;
    }
    #settings {
        margin-bottom: 10%;
    }
    #settings span,#tea_special span {
        text-indent: 0.5em;
    }
    #run_data {
        height: 16%;
        margin-top: 2%;
        padding: 0 10px;
        flex-direction: column;
        justify-content: space-around;
        text-align: left;
    }
    #details,#rank_list {
        display: flex;
        align-items: center;
        text-align: left;
    }
    hr {
        width: 85%;
        position: absolute;
        right: 0;
        left: 0;
        margin: 0 auto;
    }
    #details span,#rank_list span {
        text-indent: 0.5em;
    }
    #settings,#tea_special {
        height: 8%;
        margin-top: 2%;
        /* margin-bottom: 8%; */
        padding: 0 10px;
        display: flex;
        align-items: center;
        text-align: left;
        /* border: 1px solid black; */
    }
    .iconfont-right {
        /* text-align: right !important; */
        color: #999999;
        margin-right: 0;
        position: absolute;
        right: 7%;
    }
</style>
