<template>
    <div id="run_data_detail">
        <div id="back_bar">
            <router-link to="/footer/my" @click.native="routerRefresh">
                <i class="iconfont iconfanhui-copy"></i>返回
            </router-link>
            <span class="title">跑步数据详情</span>
        </div>
        <span class="datetitle">请选择日期</span> <input type="text" @click="csdate" v-model="datedata" class="datedata" readonly>
        <div id="myChart" :auto-resize='autoresize'></div>
        <span class="chartitle">本月运动时间占比</span>

        <transition name="Dpicker">
            <div class="Dpicker" v-show="showdate">
                <div class="button-bar">
                    <button class="cancel" @click="cancel">取消</button> <button class="confirm" @click="confirm">确认</button>
                </div>
                <div class="mt-picker">
                    <mt-picker :slots="slots" @change="onValuesChange" ></mt-picker>
                </div>
            </div>
        </transition>
    </div>
</template>
<script>
import axios from 'axios'
import echarts from 'echarts'
export default {
    name: 'run_data_detail',
    data() {
        return{
            autoresize: true,
            showdate: false,
            datedata: '',
            daydate: '',
            dayend: '',
            datebrige: '',
            slots: [
                {
                    flex: 1,
                    values: ['2017', '2018', '2019'],
                    className: 'slot1',
                    textAlign: 'right'
                    }, {
                    flex: 1,
                    values: '-',
                    className: 'slot2',
                    textAlign: 'center',
                    }, {
                    flex: 1,
                    values: ['01', '02', '03', '04', '05', '06','07','08','09','10','11','12'],
                    className: 'slot3',
                    textAlign: 'left',
                    get_run_data: '',
                    sj_data: '',
                    jl_data: '',
                }
            ]
        }
    },
    created() {
        axios.get('http://no37.store:8080/AK/MoveAction',{
            params: {
                yhid:1,ydrqOne:2019,ydrqTwo:6,
            }})
            .then(response=>{
                this.get_run_data = response.data;
            })      //获取失败
            .catch(error=>{
                alert('网络错误，不能访问');
            })
    },
    mounted(){
        this.dateDefault();
    },
    methods: {
        // 默认日期
        dateDefault() {
            let today = new Date();
            let month_str = ['12','01','02','03','04','05','06','07','08','09','10','11'];
            let datekey = (today.getMonth()+1)%12;
            let nextkey = (today.getMonth()+2)%12;
            let dateMonth = month_str[datekey];
            let nextMonth = month_str[nextkey];
            let dateYear = today.getFullYear();
            this.datebrige = dateYear + "-" + dateMonth;
            this.datedata = this.datebrige;
            this.daydate = this.datebrige + "-01";
            this.dayend = dateYear + "-" + String(nextMonth) + "-01";
            this.drawDate();
        },
        onValuesChange(picker, values) {
            this.datebrige = values[0]+values[1]+values[2];
            this.daydate = this.datebrige+values[1]+"01";
            let nextValues = String(Number(values[2])+1) ;
            this.dayend = values[0]+values[1]+nextValues+"-01";
        },
        csdate() {
            this.showdate = !this.showdate; 
        },
        cancel() {
            this.showdate = !this.showdate;
            this.datedata = "请选择相关月份";
        },
        confirm() {
            this.showdate = !this.showdate;
            this.datedata = this.datebrige;
            this.drawDate();
        },
        drawDate(){
            // 基于准备好的dom，初始化echarts实例
            let myChart = this.$echarts.init(document.getElementById('myChart'));
            // 图表自适应
            window.onresize = function(){myChart.resize();location.reload()}
            
            let screeWidth = document.body.clientWidth;
            let screeHeight = window.innerHeight;
            let xcsize = screeHeight/14;
            if(xcsize*8 >= screeWidth) {
                xcsize = screeWidth/8;
            }
            let ycsize = xcsize;
            let cellSize = [xcsize, ycsize];
            let pieRadius = xcsize*3/8;

            function getVirtulData(daydate,dayend) {
                var date = +echarts.number.parseDate(daydate);
                var end = +echarts.number.parseDate(dayend);
                var dayTime = 3600 * 24 * 1000;
                var data = [];
                for (var time = date; time < end; time += dayTime) {
                    data.push([
                        echarts.format.formatTime('yyyy-MM-dd', time),
                        Math.floor(Math.random() * 10000)
                    ]);
                }
                return data;
            }

            function getPieSeries(scatterData, chart) {
                return echarts.util.map(scatterData, function (item, index) {
                    let value2 = Math.round(Math.random() * 6);
                    let value1 = 24-value2;
                    var center = chart.convertToPixel('calendar', item);
                    return {
                        id: index + 'pie',
                        type: 'pie',
                        center: center,
                        label: {
                            normal: {
                                formatter: '{c}',
                                position: 'inside'
                            }
                        },
                        radius: pieRadius,
                        data: [
                            {name: '非运动', value: value1, itemStyle: {color: '#eea2a4'} },
                            {name: '运动', value: value2, itemStyle: {color: '#7bc5ae'} },
                        ]
                    };
                });
            }

            function getPieSeriesUpdate(scatterData, chart) {
                return echarts.util.map(scatterData, function (item, index) {
                    var center = chart.convertToPixel('calendar', item);
                    return {
                        id: index + 'pie',
                        center: center
                    };
                });
            }

            var scatterData = getVirtulData(this.daydate,this.dayend);

            // 绘制图表
            myChart.setOption({
                tooltip : {},
                legend: {
                    data: ['非运动', '运动'],
                    bottom: 0,
                },
                calendar: {
                    top: 'middle',
                    left: 'center',
                    orient: 'vertical',
                    cellSize: cellSize,
                    yearLabel: {
                        show: false,
                        textStyle: {
                            fontSize: 30,
                            fontFamily: '方正汉真广标简体',
                        }
                    },
                    dayLabel: {
                        margin: 15,
                        firstDay: 1,
                        nameMap: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
                    },
                    monthLabel: {
                        show: false
                    },
                    range: this.datebrige,
                },
                series: [{
                    id: 'label',
                    type: 'scatter',
                    coordinateSystem: 'calendar',
                    symbolSize: 1,
                    label: {
                        normal: {
                            show: true,
                            formatter: function (params) {
                                return echarts.format.formatTime('dd', params.value[0]);
                            },
                            offset: [-cellSize[0] / 2 + 10, -cellSize[1] / 2 + 10],
                            textStyle: {
                                color: '#000',
                                fontSize: xcsize/4,
                            }
                        }
                    },
                    data: scatterData
                }]
            },true);
            if (!app.inNode) {
                var pieInitialized;
                setTimeout(function () {
                    pieInitialized = true;
                    myChart.setOption({
                        series: getPieSeries(scatterData, myChart)
                    });
                }, 10);

                app.onresize = function () {
                    if (pieInitialized) {
                        myChart.setOption({
                            series: getPieSeriesUpdate(scatterData, myChart)
                        });
                    }
                };
            }
        }
    }
}
</script>
<style scoped>
    #run_data_detail {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        margin: 0 auto;
        background: linear-gradient(top,rgb(199, 195, 197),#f9f6c9);
    }
    a {
        text-decoration: none;
        color: #dec674;    
    }
    #back_bar {
        width: 100%;
        position: fixed;
        text-align: left;
        text-indent: 0.3em;
        line-height: 200%;
        background-color: rgb(83, 83, 83);
        margin-bottom: 2%;
    }
    .title {
        color: #dec674;
        position: absolute;
        text-align: center;
        width: 50%;
        left: 0;
        right: 0;
        margin: 0 auto;
    }
    .datetitle {
        display: inline-block;
        margin-top: 40px;
        font-size: 12px;
        opacity: 0.8;
    }
    .datedata {
        background-color: rgba(255,255,255,0.6);
        text-align: center;
    }
    #myChart {
        width: 100%;
        height: 50%;
        display: flex;
        justify-content: center;
        left: 0;
        right: 0;
        margin: 0 auto;
        margin-bottom: 10px;
    }
    .chartitle {
        font-family: '方正汉真广标简体';
        letter-spacing: 0.5ex;
    }
    .Dpicker {
        width: 100%;
        position: fixed;
        margin-bottom: 0;
        bottom: 0;
    }
    .button-bar {
        width: 100%;
        height: 5ex;
        padding: 5px;
        border: 1px solid rgba(1,1,1,0.4);
        background-color: #f2f4ef;
    }
    .cancel {
        border: 1px solid #dec674;
        float: left;
        
    }
    .confirm {
        border: 1px solid rgba(1,1,1,0.4);
        float: right;
    }
    .mt-picker {
        width: 100%;
        /* height: 100%; */
        background-color: white;
    }
</style>
