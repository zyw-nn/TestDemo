<template>
  <div class="mapBox">
    <div v-show="setPlan">
      <input type="date" :value="date" />
      <input type="text" :value="plan" />
    </div>
    <div id="mapChart" :style="{width: '900px', height: '600px'}">
    </div>
  </div>
</template>

<script>
import '../../static/china.js'
export default {
  name: 'chinaMap',
  data () {
    return {
      setPlan: false,
      date: '',
      plan: ''
    }
  },
  methods: {
    // 地图
    mapChart (myChart) {
      var option = {
        tooltip: {
          trigger: 'item',
          formatter: function (params, ticket, callback) {
            let info = params.data
            return info.name + '(' + (info.date === '' ? null : info.date) + ')：' + info.plan
          }
        },
        series: [
          {
            name: '旅行计划',
            type: 'map',
            mapType: 'china',
            roam: true,
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  textStyle: {
                    color: 'rgb(0, 0, 0)'
                  }
                }
              },
              emphasis: {
                label: {show: true}
              }
            },
            top: '1%',
            // 各省的数值，用了很多随机数
            data: [
              { name: '北京', date: '2017-7-10', plan: '备注1', selected: true },
              { name: '天津', date: '', plan: '' },
              { name: '上海', date: '', plan: '' },
              { name: '重庆', date: '', plan: '' },
              { name: '河北', date: '2015-8-1', plan: '备注2', selected: true },
              { name: '河南', date: '', plan: '' },
              { name: '云南', date: '', plan: '' },
              { name: '辽宁', date: '', plan: '' },
              { name: '黑龙江', date: '2017-12-31', plan: '备注3', selected: true },
              { name: '湖南', date: '', plan: '' },
              { name: '安徽', date: '', plan: '' },
              { name: '山东', date: '2016-4-29', plan: '备注4', selected: true },
              { name: '新疆', date: '', plan: '' },
              { name: '江苏', date: '', plan: '' },
              { name: '浙江', date: '', plan: '' },
              { name: '江西', date: '1994-12-9', plan: '备注5', selected: true },
              { name: '湖北', date: '2014-5-1', plan: '备注6', selected: true },
              { name: '广西', date: '', plan: '' },
              { name: '甘肃', date: '', plan: '' },
              { name: '山西', date: '2019-4-30', plan: '备注7', selected: true },
              { name: '内蒙古', date: '', plan: '' },
              { name: '陕西', date: '', plan: '' },
              { name: '吉林', date: '', plan: '' },
              { name: '福建', date: '', plan: '' },
              { name: '贵州', date: '', plan: '' },
              { name: '广东', date: '2017-6-13', plan: '备注8', selected: true },
              { name: '青海', date: '', plan: '' },
              { name: '西藏', date: '', plan: '' },
              { name: '四川', date: '', plan: '' },
              { name: '宁夏', date: '', plan: '' },
              { name: '海南', date: '', plan: '' },
              { name: '台湾', date: '', plan: '' },
              { name: '香港', date: '', plan: '' },
              { name: '澳门', date: '', plan: '' }
            ]
          }
        ]
      }
      myChart.setOption(option)
    }
  },
  mounted () {
    let myChart = this.$echarts.init(document.getElementById('mapChart'))
    this.mapChart(myChart)
    myChart.on('click', function (data) {
      console.log(data)
    })
  }
}
</script>

<style scoped>
</style>
