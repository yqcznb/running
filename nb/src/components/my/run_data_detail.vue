<template>
    <div id="run_data_detail">
        <div id="back_bar">
            <router-link to="/footer/my" @click.native="routerRefresh">
                <i class="iconfont iconfanhui-copy"></i>返回
            </router-link>
        </div>
        
        
        <div id="myChart" :auto-resize='autoresize'></div>
        跑步数据详情界面
        <div class="picker">
            <div class="button-bar">
                <button class="cancel">取消</button> <button class="confirm">确认</button>
                
            </div>
            <mt-picker class="mt-picker" :slots="slots" @change="onValuesChange" ></mt-picker>
        </div>
    </div>
</template>
<script>
import echarts from 'echarts'
export default {
    name: 'run_data_detail',
    computed: {
        
    },
    data() {
        return{
            autoresize: true,
            slots: [
                {
                    flex: 1,
                    values: ['2017', '2018', '2019'],
                    className: 'slot1',
                    textAlign: 'right'
                    }, {
                    divider: true,
                    content: '-',
                    className: 'slot2'
                    }, {
                    flex: 1,
                    values: ['01', '02', '03', '04', '05', '06','07','08','09','10','11','12'],
                    className: 'slot3',
                    textAlign: 'left'
                }
            ]
        }
    },
    mounted(){
        this.drawLine();
    },
    methods: {
        routerRefresh() {
            window.location.reload();
        },
        onValuesChange(picker, values) {
            // if (values[0] > values[1]) {
            //     picker.setSlotValue(1, values[0]);
            // }
        },
        drawLine(){
            // 基于准备好的dom，初始化echarts实例
            let myChart = this.$echarts.init(document.getElementById('myChart'));
            // 图表自适应
            window.onresize = function(){myChart.resize();location.reload()}
            
            let screeHeight = window.innerHeight;
            let xcsize = screeHeight/14;
            let ycsize = xcsize;
            let cellSize = [xcsize, ycsize];
            let pieRadius = xcsize*3/8;

            function getVirtulData() {
                var date = +echarts.number.parseDate('2017-04-01');
                var end = +echarts.number.parseDate('2017-05-01');
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
                            {name: '非运动', value: Math.round(Math.random() * 24), itemStyle: {color: '#eea2a4'} },
                            {name: '运动', value: Math.round(Math.random() * 24), itemStyle: {color: '#7bc5ae'} },
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

            var scatterData = getVirtulData();

            // 绘制图表
            myChart.setOption({
                tooltip : {},
                legend: {
                    data: ['非运动', '运动'],
                    bottom: 20,
                },
                calendar: {
                    top: 'middle',
                    left: 'center',
                    orient: 'vertical',
                    cellSize: cellSize,
                    yearLabel: {
                        show: false,
                        textStyle: {
                            fontSize: 30
                        }
                    },
                    dayLabel: {
                        margin: 20,
                        firstDay: 1,
                        nameMap: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
                    },
                    monthLabel: {
                        show: false
                    },
                    range: ['2017-04']
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
                                fontSize: xcsize/4
                            }
                        }
                    },
                    data: scatterData
                }]
            });
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
        text-align: left;
        text-indent: 0.3em;
        line-height: 200%;
        background-color: rgb(83, 83, 83);
        margin-bottom: 2%;
    }
    #myChart {
        width: 100%;
        height: 50%;
        border: 1px solid red;
        display: flex;
        justify-content: center;
        left: 0;
        right: 0;
        margin: 0 auto;
    }
    .picker {
        width: 100%;
        height: 26%;
        border: 1px solid red;
    }
    .button-bar {
        width: 100%;
        height: 25%;
        padding: 1%;
        position: relative;
        border: 1px solid black;
    }
    .cancel {
        border: 1px solid red;
        float: left;
        /* margin-left: 2%; */
        
    }
    .confirm {
        border: 1px solid black;
        float: right;
        /* margin-right: 2%; */
    }
    .mt-picker {
        width: 100%;
        position: fixed;
    }
</style>
