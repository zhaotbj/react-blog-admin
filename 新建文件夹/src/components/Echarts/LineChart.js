import React, { Component } from 'react';
// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/line'
// 引入柱状图
import 'echarts/lib/chart/bar';
import 'echarts/lib/chart/pie';

class LineChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      LineOptions: {
        backgroundColor: '#fff',
        grid: {
          left: '7%',
          right: '5%',
          top: '25%',
          bottom: '19%',
        },
        title: {
          show: false
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          data: ['监控数量', '监控密度'],
          right: '3%',
          top: '10%',
          itemWidth: 11,
          itemHeight: 11,
          textStyle: {
            color: '#ffffff',
            fontSize: 13
          }
        },
        toolbox: {
          show: false,
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: true,
            show: true,
            axisTick: {
              show: false
            },
            axisLabel: {
              fontSize: 15,
              color: '#d0d0d0',
              margin: 8,
              interval: 0,
              formatter: function (val) {
                return val.split("").join("\n");
              }
            },
            axisLine: {
              lineStyle: {
                type: 'solid',
                color: '#4e608b',//左边线的颜色
                width: '1'//坐标线的宽度
              }
            },
            data: ['芝罘区', '福山区', '莱山区', '牟平区', '海阳市', '莱阳市', '蓬莱市', '栖霞市', '龙口市', '长岛县', '招远市', '莱州市', '开发区', '高新区', '昆嵛山', '龙海', '机场', '核电']
          }
        ],
        yAxis: [
          {
            type: 'value',
            scale: true,
            name: '',
            axisLine: {
              show: false
            },
            splitNumber: 4,
            axisTick: {
              show: false
            },
            splitLine: {
              lineStyle: {
                // 使用深浅的间隔色
                color: '#4e608b'
              }
            },
            axisLabel: {
              fontSize: 13,
              color: '#d0d0d0',
              margin: 12,
            },
            max: 12000,
            min: 0,
            boundaryGap: [0.2, 0.2]
          },
          {
            type: 'value',
            scale: true,
            axisLine: {
              show: false
            },
            splitNumber: 3,
            axisTick: {
              show: false
            },
            axisLabel: {
              fontSize: 13,
              color: '#d0d0d0',
              margin: 12,
            },
            splitLine: {
              lineStyle: {
                // 使用深浅的间隔色
                color: '#4e608b'
              }
            },
            name: '',
            max: 30,
            min: 0,
            boundaryGap: [0.2, 0.2]
          },

        ],
        series: [
          {
            name: '监控数量',
            type: 'bar',
            label: {
              normal: {
                show: true,
                position: 'top',
                textStyle: {
                  color: '#1dacfe'
                }
              }
            },
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                  offset: 0,
                  color: "#4889fb" // 0% 处的颜色
                }, {
                  offset: 1,
                  color: "#15b3ff" // 100% 处的颜色
                }], false)
              }
            },
            barWidth: '40%',
            yAxisIndex: 0,
            data: [10758, 3975, 2980, 1831, 2122, 3018, 3525, 1729, 2764, 380, 3988, 2333, 3596, 453, 365, 9, 67, 48]
          },
          {
            name: '监控密度',
            yAxisIndex: 1,
            color: '#ffd300',
            label: {
              normal: {
                show: true,
                position: 'top',
                textStyle: {
                  color: '#ffd300'
                }
              }
            },
            lineStyle: {
              color: '#ffd300'
            },
            type: 'line',
            data: [28, 4.4, 5.9, 0.9, 0.7, 1.1, 2.1, 0.4, 1.9, 3.8, 1.6, 0.7, 5.7, 6.1]
          }
        ]
      },
      paiChartOption: {
          backgroundColor: '#fff',
          color: ['#FFCA61', '#FF7065', '#ABE2C3', '#707070', '#B4D0FE'],
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          textStyle: {
            fontSize: '15',
            fontWeight: "bold",
            fontFamily: "Source Han Sans CN"
          },
  
          visualMap: {
            show: false,
            min: 80,
            max: 600,
            inRange: {
  
            }
          },
          series: [
            {
              name: '媒体客户分布',
              type: 'pie',
              radius: ['30%', '70%'],
              center: ['50%', '50%'],
  
              data: [
                { value: 210, name: '出行类' },
                { value: 235, name: '导航类' },
                { value: 274, name: '社交类' },
                { value: 335, name: '垂媒类' },
                { value: 400, name: '旅游类' }
              ].sort(function (a, b) { return a.value - b.value; }),
              roseType: 'radius',
              label: {
              },
              labelLine: {
                normal: {
                  lineStyle: {
  
                  },
                  smooth: 0.2,
                  length: 10,
                  length2: 20
                }
              },
              itemStyle: {
                borderWidth: 3,
                borderColor: '#fff',
              },
  
              animationType: 'scale',
              animationEasing: 'elasticOut',
              animationDelay: function (idx) {
                return Math.random() * 200;
              }
            }
          ]
        
      }

    }
  }
  componentDidMount() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('main'));
    var myChart1 = echarts.init(document.getElementById('main1'));
    // 绘制图表
    myChart.setOption(this.state.LineOptions);
    myChart1.setOption(this.state.paiChartOption)
  }
  render() {
    return (
      <div className="chartContent">
        <div id="main" style={{ width: 1000, height: 500 }}></div>
        <div id="main1" style={{ width: 1000, height: 500 }}></div>
      </div>

    );
  }
}

export default LineChart;