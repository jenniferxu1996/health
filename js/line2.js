$(document).ready(function() {
	var height = $('#line2').parent().height();
	if(IS_MOBILE){
		height*=1.8;
		if(height>$('#line2').width()*1.7){
			height=$('#line2').width()*1.7;
		}
	}
	$('#line2').height(height);
		
	var line = echarts.init(document.getElementById('line2'));

	var option = {
		tooltip: {
			trigger: 'axis',
			confine:true,
			textStyle:{
				fontSize:15
			}
		},
		xAxis: {
			name: 'time frame',
			nameLocation:'middle',
			nameGap:35,
			type: 'category',
			boundaryGap: false,
			nameTextStyle:{
				color:'white'
			},
			axisLabel:{
				textStyle:{
					color:'white'
				}
			},
			axisLine:{
				show:true,
				lineStyle:{
					color:'white'
				}
			},
			data: ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23']
		},
		yAxis: {
			name: 'Ranking of medicines for immunity adjustment',
			nameLocation:'middle',
			nameGap:40,
			type: 'value',
			nameTextStyle:{
				color:'white'
			},
			axisLine:{
				lineStyle:{
					color:'white'
				}
			},
			axisLabel: {
				formatter: function (value, index) {
					if(value==0){
						return 'after 10';
					}else{
						return 11-value;
					}
				},
				textStyle:{
					color:'white'
				}
			},
			splitLine:{
				show:false
			},
			splitNumber:10
		},
		grid:{
			containLabel:true,
			right:'10%'
		},
		legend:{
			show:true,
			orient:'vertical',
			left:'right',
			itemWidth:15,
			itemHeight:10,
			textStyle:{
				color:'white',
				fontSize:16
			},
			data:['east','middle','west']
		},
		series: [
			{
				name: 'east',
				type: 'line',
				showSymbol:false,
				smooth:true,
				lineStyle:{
					normal:{
						width:5
					}
				},
				data: [2,0,0,0,0,0,0,0,0,1,4,5,5,4,5,7,6,7,5,4,7,6,5,0],
			}, {
				name: 'middle',
				type: 'line',
				showSymbol:false,
				smooth:true,
				lineStyle:{
					normal:{
						width:5
					}
				},
				data: [0,3,4,0,4,6,0,3,6,8,8,8,8,8,8,10,9,10,8,8,8,7,6,7],
			}, {
				name: 'west',
				type: 'line',
				showSymbol:false,
				smooth:true,
				lineStyle:{
					normal:{
						width:5
					}
				},
				data: [3,3,3,0,3,0,2,1,7,8,8,8,8,8,8,9,8,8,8,8,8,9,8,0],
			},  
		],

		color: [
			'#a6d7ff',
			'#FFCC33',
			'#59b3ff',
			
		],
	};
	
	if(IS_MOBILE){
		option.grid.top = '10%';
		option.grid.left = 'left';
		option.legend.itemWidth=10;
		option.legend.icon = 'circle';
		option.legend.textStyle.fontSize = 12;
		option.legend.textStyle.fontWeight = 'bold';
		option.yAxis.name='';
		option.xAxis.name='';
		option.series[0].lineStyle.normal.width = 2;
		option.series[1].lineStyle.normal.width = 2;
		option.series[2].lineStyle.normal.width = 2;
	}
	
	// 使用刚指定的配置项和数据显示图表。
	line.setOption(option);
});