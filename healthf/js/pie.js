$(document).ready(function() {
	var height = $('#pie').parent().height();
	if(IS_MOBILE){
		height = $('#pie').width();
	}
	$('#pie').height(height);
	
	var pie = echarts.init(document.getElementById('pie'));
	
	var option = {
		tooltip: {
			trigger: 'item',
			formatter: "{b} : {c}%"
		},
		series: [{
			name: '用户购买品类分布情况',
			type: 'pie',
			radius: '65%',
			center: ['50%', '50%'],
			clockwise: false,
			data: [{
				value: 1,
				name: '个人护理'
			}, {
				value: 3,
				name: '其他'
			}, {
				value: 3,
				name: '营养保健'
			}, {
				value: 4,
				name: '两性'
			}, {
				value: 4,
				name: '慢性疾病用药'
			}, {
				value: 5,
				name: '男性'
			}, {
				value: 6,
				name: '儿童用药'
			}, {
				value: 6,
				name: '五官用药'
			}, {
				value: 8,
				name: '女性'
			}, {
				value: 10,
				name: '皮肤用药'
			}, {
				value: 48,
				name: '家庭常备'
			}, ],
			itemStyle: {
				normal: {
					borderColor: '#fff',
					borderWidth: 0.2,
				},
				emphasis: {
					shadowBlur: 10,
					shadowOffsetX: 0,
					shadowColor: 'rgba(0, 0, 0, 0.5)'
				}
			},
			label: {
				normal: {
					show: true,
					textStyle:{
						fontSize:20
					}
				},
			}
		}],
		color: [
			'#fca063',
			'#fc7c00'
		],
	};
	
	if(IS_MOBILE){
		option.series[0].label.normal.textStyle.fontSize = 13;
		option.series[0].label.normal.textStyle.color = '#fff';
		option.series[0].label.normal.textStyle.fontWeight = 'bold';
		option.series[0].labelLine={
			normal:{
				length:3,
				length2:6,
				lineStyle:{
					color:'#fff'
				}
			}
		};
	}
	
	// 使用刚指定的配置项和数据显示图表。
	pie.setOption(option);
});