  var createcharts={};//创建函数对象
  // 入库管理

      createcharts.chart1=function(Xdata,Ydata,Ydata2){
      $(function(){
          var chart1= echarts.init(document.getElementById('chart1'));
          var option = {
              //backgroundColor:'rgba(178,220,245,0.4)',//背景色
              color: ['#3da5a1'],
              tooltip : {  //鼠标悬浮显示
                  trigger: 'axis',
                  axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                      type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                  }
              },
              grid: {  //图表的位置
                  left: '0%',
                  right: '0%',
                  bottom: '3%',
                  containLabel: true
              },
              legend: {  //图例：
                  x:'35%',
                  y:'2%',
                  data:['应收货量','已收货量'],
                  textStyle: {
                      color: '#7d7d7d;'
                  },
              },
              xAxis : [
                  {
                      type : 'category',
                      name : '时间/小时',
                      data :Xdata,
                      axisTick: {
                          alignWithLabel: true
                      },
                      axisLabel: {
                          show: true,
                          textStyle: {
                              color: '#7d7d7d'   //x轴字体颜色
                          },
                          interval:0
                      },
                      axisLine:{
                          lineStyle:{
                              color:'#fff',   //x轴线颜色
                          }
                      },

                  }
              ],
              yAxis : [

                  {   splitLine:{show: false},  //去掉网格
                      type : 'value',
                      name : '数量/个',
                      axisLabel: {
                          show: true,
                          textStyle: {
                              color: '#fff'
                          }
                      },
                      axisLine:{
                          lineStyle:{
                              color:'#fff',
                          }
                      }
                  }
              ],
              series : [
                  {
                      label: {
                          normal: {
                              show: true,
                              position: 'inside',
                              formatter: '{c}个'
                          }
                      },
                      name:'应收货量',
                      type:'bar',
                      barWidth: '35%',
                      itemStyle:{
                          normal: {

                              barBorderRadius: 0,
                              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                  offset: 0,
                                  color: '#99d9ea'
                              }, {
                                  offset: 1,
                                  color: '#3fa7dc'
                              }]),
                              shadowColor: 'rgba(0, 0, 0, 0.4)',
                              shadowBlur: 20
                          }
                      },
                      data:Ydata
                  },{
                      label: {
                          normal: {
                              show: true,
                              position: 'inside',
                              formatter: '{c}个'
                          }
                      },
                      name:'已收货量',
                      type:'bar',
                      barWidth: '35%',
                      itemStyle:{
                          normal: {

                              barBorderRadius: 0,
                              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                  offset: 0,
                                  color: '#ee9a8a'
                              }, {
                                  offset: 1,
                                  color: '#b8a3e9'
                              }]),
                              shadowColor: 'rgba(0, 0, 0, 0.4)',
                              shadowBlur: 20
                          }
                      },
                      data:Ydata2
                  }
              ]
          };
          chart1.setOption(option);
      });

  };
      createcharts.chart2=function(title,Xdata,Ydata,Ydata2){
      $(function(){
          var chart2= echarts.init(document.getElementById('chart2'));
          var option = {
              //backgroundColor:'rgba(178,220,245,0.4)',//背景色
              color: ['#3da5a1'],
              title: {
                  text:title,
                  textStyle: {
                      fontSize:22,
                      fontWeight:'normal',
                      color:'#218be2',            //标题颜色
                  },
                  x:'center',
                  y:'14px'

              },
              tooltip : {  //鼠标悬浮显示
                  trigger: 'axis',
                  axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                      type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                  }
              },
              grid: {  //图表的位置
                  left: '2%',
                  right: '1%',
                  bottom: '2%',
                  containLabel: true
              },
              xAxis : [
                  {   splitLine:{show: false},  //去掉网格
                      type : 'value',
                      axisLabel: {
                          show: true,
                          textStyle: {
                              color: '#fff'   //x轴字体颜色
                          },
                          // interval:0
                      },
                      axisLine:{
                          lineStyle:{
                              color:'#fff',   //x轴线颜色
                          }
                      }
                  }
              ],
              series : [
                  {
                      label: {
                          normal: {
                              show: true,
                              position: 'inside',
                              formatter: '{c}%'
                          }
                      },
                      name:title,
                      type:'bar',
                      barWidth: '70%',
                      itemStyle:{
                          normal: {

                              barBorderRadius:25,
                              color: new echarts.graphic.LinearGradient(0, 0, 1, 0,
                                  [
                                      {offset: 0, color: '#bd8cf5'},
                                      {offset: 1, color: '#6be2e1'}
                                  ]
                              ),
                              shadowColor: 'rgba(0, 0, 0, 0.4)',
                              shadowBlur: 20
                          }
                      },
                      data:Ydata
                  }
              ],
              yAxis : [
                  {
                      type : 'category',
                      data :Xdata,
                      axisTick: {
                          alignWithLabel: true
                      },
                      axisLabel: {
                          show: true,
                          textStyle: {
                              color: '#7d7d7d'   //x轴字体颜色
                          },
                          // interval:0
                      },
                      axisLine:{
                          lineStyle:{
                              color:'#fff',   //x轴线颜色
                          }
                      }

                  }

              ]
          };
          chart2.setOption(option);
      });

  };
      createcharts.chart3=function(zhuX,zhuY1,zhuY2){
      $(function(){
          var chart3= echarts.init(document.getElementById('chart3'));
          var option = {
              //backgroundColor:'rgba(178,220,245,0.4)',//背景色
              color: ['#3da5a1'],
              tooltip : {  //鼠标悬浮显示
                  trigger: 'axis',
                  axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                      type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                  }
              },
              grid: {  //图表的位置
                  left: '1%',right:'3%',
                  bottom: '1%',top:'20%',
                  containLabel: true
              },
              legend: {  //图例：
                  x:'35%',
                  y:'0%',
                  data:[
                      {
                          name:'应收货量',
                          icon:'image://./img/2.png'//格式为'image://+icon文件地址'，其中image::后的//不能省略
                      },
                      {
                          name:'已收货量',
                          icon:'image://./img/1.png'//格式为'image://+icon文件地址'，其中image::后的//不能省略
                      },
                  ],
                  textStyle: {
                      color: '#7d7d7d;'
                  },
              },
              xAxis : [
                  {   splitLine:{show: false},  //去掉网格
                      type : 'category',
                      data :zhuX,
                      axisTick: {
                          alignWithLabel: true
                      },
                      axisLabel: {
                          show: true,
                          textStyle: {
                              color: '#7d7d7d'   //x轴字体颜色
                          },
                          // interval:0
                      },
                      axisLine:{
                          lineStyle:{
                              color:'#FFF',   //x轴线颜色
                          }
                      },

                  }

              ],
              series : [
                  { // For shadow
                      label: {
                          normal: {
                              show: true,
                              position: 'top',
                              textStyle: {
                                  color: '#96E3D8',
                                  fontSize :16
                              },
                              formatter: '{c}'
                          }
                      },
                      type: 'bar',
                      name:"应收货量",
                      barWidth: '50%',
                      itemStyle:{
                          normal: {
                              barBorder:1,
                              barBorderColor: '#96E3D8',
                              barBorderRadius: 0,
                              color: new echarts.graphic.LinearGradient(0, 1, 0, 1, [{
                                  offset: 0,
                                  color: '#FFF'
                              }, {
                                  offset: 1,
                                  color: '#FFF'
                              }]),
                              shadowColor: 'rgba(0, 0, 0, 0)',
                              shadowBlur: 20
                          }
                      },
                      barGap:'-100%',
                      barCategoryGap:'40%',
                      data:zhuY1,
                      animation: false
                  },
                  {
                      label: {
                          normal: {
                              show: true,
                              position: 'top',
                              textStyle: {
                                  color: '#66C5F6',
                                  fontSize :14
                              },
                              formatter: '{c}'
                          }
                      },
                      name:'已收货量',
                      type:'bar',
                      barWidth: '50%',
                      itemStyle:{
                          normal: {

                              barBorderRadius: 0,
                              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                  offset: 0,
                                  color: '#96E3D8'
                              }, {
                                  offset: 1,
                                  color: '#66C5F6'
                              }]),
                              shadowColor: 'rgba(0, 0, 0, 0)',
                              shadowBlur: 20
                          }
                      },
                      data:zhuY2
                  }

              ],
              yAxis : [

                  {   splitLine:{show: false},  //去掉网格
                      type : 'value',
                      axisLabel: {
                          show: true,
                          textStyle: {
                              color: '#7d7d7d'
                          }
                      },
                      axisLine:{
                          lineStyle:{
                              color:'#FFF',
                          }
                      }
                  }
              ]
          };
          chart3.setOption(option);
      });
  };
      createcharts.chart4=function(){
      $(function(){
          var chart4= echarts.init(document.getElementById('chart4'));
          var option = {
              title : {
                  text: '项目商品占比率',
                  x:'center'
              },
              tooltip: {
                  trigger: 'item',
                  formatter: "{a} <br/>{b}: {c} ({d}%)"
              },
              color:['#6fefcb','#6ce6e0', '#f2fa96','#ec8989'],
              series: [
                  {
                      name: '项目商品占比率',
                      type: 'pie',
                      radius: ['50%', '70%'],
                      center: ['50%', '60%'],

                      itemStyle: {
                          normal: {label:{
                              show:true,
                              formatter:'{b} : {c} ({d}%)'
                          },
                          labelLine:{show:true}},
                      },
                      data:data,

                  }
              ]
          };
          chart4.setOption(option);
      });
  };

