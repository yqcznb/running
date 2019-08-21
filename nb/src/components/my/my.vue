<template>
    <div id="my">
        <router-link :to="{name:'pinform',params:{backey:'/footer/my'}}">
            <div id="my_head">
                <div id="head_left">
                    <h4>{{ uname }}<router-link to='/confirm'><i :class="if_rz" class="iconfont iconwrz"></i></router-link></h4>
                    <h5><router-link to="/drole">{{ uduan }} <i class="iconfont drole-c iconchongwu"></i> </router-link></h5>
                    <img :src='levelImg' class="levelimg" >
                    <router-link to="/ex_bonus" >
                        <img :src='bonusImg' class="bonusimg"> <span class="iconfont bonus-c iconchongwu"></span>
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
            <router-link to="/rank_list">
                <div id="rank_list">
                    <i class="iconfont iconpaihangbang rankimg"></i><span class="">排行榜</span><i class="iconfont iconfanhui iconfont-right"></i>
                </div>
            </router-link>
           
        </div>
        <router-link :to="mode"  @click.native="routerRefresh">
            <div id="settings">
                <i class="iconfont iconsettings"></i><span>设置</span><i class="iconfont iconfanhui iconfont-right"></i>
            </div>
        </router-link>
    </div>
</template>
<script> 
export default {
    name: 'my',
    data() {
        return{
            autoresize: true,
            uname: '叭叭叭',
            if_rz: 'have_rz',
            uduan: '天下跑神段位',
            levelImg: require('../../assets/img/my/schedual_level/first.png'),
            bonusImg:require('../../assets/img/my/identify/我太难啦.png'),
            headportrait:require('../../assets/img/my/headportrait/4.jpg'),
            duanImg:require('../../assets/img/my/duan/5.png'),
            nearImg:require('../../assets/img/my/run_data/near.png'),
            mode:'/settings',
            routerAlive:true,
        }
    },
    created() {
        
    },
    mounted(){
        this.drawLine();
    },
    methods: {
        routerRefresh() {
            window.location.reload();
        },
        drawLine(){
            // 近12日日期
            function get_date() {
                var myDate = new Date(); //获取今天日期
                myDate.setDate(myDate.getDate() - 12);
                var dateArray = []; 
                var dateTemp; 
                var flag = 1; 
                for (var i = 0; i < 12; i++) {
                    dateTemp = (myDate.getMonth()+1)+"-"+myDate.getDate();
                    dateArray.push(dateTemp);
                    myDate.setDate(myDate.getDate() + flag);
                }
                return dateArray;
            }
            let date = get_date();

            // 基于准备好的dom，初始化echarts实例
            let myChart = this.$echarts.init(document.getElementById('myChart'));
            // 图表自适应
            window.onresize = function(){myChart.resize();}
            // 绘制图表
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
                    data: date
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
                    data : [ 10000, 20000, 12065, 3620,16530, 9510, 20100, 13002, 13580,15063, 15200, 9000 ]
                },{
                    name : '配速',
                    smooth: 'true',
                    type : 'line',                                itemStyle: {normal: { color: '#e56f7f'}},
                    yAxisIndex : 1,
                    areaStyle: {
                        color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{offset: 0, color: '#efc7b4'},{offset: 0.8, color: '#f6ebd5'}])},
                    data : [ 3.1, 5.55, 5.59, 6.20, 4.39, 5.00, 6.1, 7.4,7.34, 8.26, 3.58,8.12 ]
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
        top: 0;
        left: 0;
        right: 0;
        margin: 0 auto;
        background: linear-gradient(top,rgb(199, 195, 197),#f9f6c9);
    }
    #my_head,#run_data,#settings {
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
    .drole-c:before {
        font-size: 80%;
        color: rgba(253, 185, 51, 0.89);
    }
    .levelimg {
        width: 70%;
        max-width: 336px;
    }
    .bonusimg {
        width: 33%;
        float: left;
        display: flex;
        justify-content: flex-start;
    }
    .bonus-c:before {
        height: 100%;
        display: inline-flex;
        align-items: center;
        float: left;
        /* vertical-align: middle; */
        margin-left: 2%;
        /* float: left; */
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
    #run_data,#settings {
        border-radius: 7px;
    }
    #settings span {
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
    #settings {
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
