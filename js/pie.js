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
			radius: '45%',
			center: ['50%', '50%'],
			clockwise: false,
			data: [{
				value: 1,
				name: 'personal care'
			}, {
				value: 3,
				name: 'others'
			}, {
				value: 3,
				name: 'nutrition and health care'
			}, {
				value: 4,
				name: 'sexual medicines'
			}, {
				value: 4,
				name: 'chronic disease medicines'
			}, {
				value: 5,
				name: 'men-use'
			}, {
				value: 6,
				name: 'pediatric drugs'
			}, {
				value: 6,
				name: 'medicines for five sense organs'
			}, {
				value: 8,
				name: 'women-use'
			}, {
				value: 10,
				name: 'dermatological medicines'
			}, {
				value: 48,
				name: 'household medicines'
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