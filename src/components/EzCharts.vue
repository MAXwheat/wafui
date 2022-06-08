<template>
    <div class="echart" id="mychart" :style="myChartStyle"></div>
</template>

<script>
import * as echarts from "echarts";

export default {
    name: 'EzCharts',
    data() {
        return {
            myChart: {},
            xData: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], //横坐标
            yData: [23, 24, 18, 25, 27, 28, 25], //人数数据
            myChartStyle: { float: "left", width: "100%", height: "400px" } //图表样式
        };
    },
    mounted() {
        this.initEcharts();
        this.getdata()
    },
    methods: {
        getdata(){
            
        },
        initEcharts() {
            const option = {
                xAxis: {
                    data: this.xData
                },
                legend: { // 图例
                    data: ["人数", "任务"],
                    bottom: "0%"
                },
                yAxis: {},
                series: [
                    {
                        name: "人数",
                        data: this.yData,
                        type: "line", // 类型设置为折线图
                        label: {
                            show: true,
                            position: "top",
                            textStyle: {
                                fontSize: 16
                            }
                        }
                    },
                    {
                        name: "任务",
                        data: this.taskData,
                        type: "line", // 类型设置为折线图
                        label: {
                            show: true,
                            position: "bottom",
                            textStyle: {
                                fontSize: 16
                            }
                        }
                    }
                ]
            };
            this.myChart = echarts.init(document.getElementById("mychart"));
            this.myChart.setOption(option);
            //随着屏幕大小调节图表
            window.addEventListener("resize", () => {
                this.myChart.resize();
            });
        }
    }
};
</script>

