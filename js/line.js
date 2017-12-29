$(document).ready(function() {
	var height = $('#line').parent().height();
	if(IS_MOBILE){
		height*=1.5;
		if(height>$('#line').width()*1.6){
			height=$('#line').width()*1.6;
		}
	}
	$('#line').height(height);
		
	var line = echarts.init(document.getElementById('line'));

	var option = {
		tooltip: {
			trigger: 'axis',
			confine:true,
			formatter:function (params, ticket, callback) {
				var res = 	"<p style='text-align: left;font-size: 1em;'>" + params[0].name + "</p>" +
							"<table style='text-align: left;font-size: 1em;'>";
				for(var i = 0;i<3;i++){
					res +=	"<tr>" +
							"<td style='color:"+params[i].color+";'>●&nbsp;</td>"+
							"<td>" + params[i].data + "%</td>"+
							"</tr>";
				}
				res += "</table>";
				return res;
			},
			textStyle:{
				fontSize:15
			}
		},
		xAxis: {
			name: '时段',
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
				lineStyle:{
					color:'white'
				}
			},
			data: ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23']
		},
		yAxis: {
			name: '占比',
			nameLocation:'middle',
			nameGap:50,
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
				formatter:'{value}%',
				textStyle:{
					color:'white'
				}
			}
		},
		grid:{
			containLabel:true,
			top:'15%',
			right:'15%'
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
			data:['所有产品整体下单时段分布','全天销售量最高的感冒用药和呼吸系统用药','晚上需求较突出的避孕类产品分时段销售情况']
		},
		series: [{
			name: '所有产品整体下单时段分布',
			type: 'line',
			showSymbol:false,
			smooth:true,
			lineStyle:{
				normal:{
					width:5
				}
			},
			data: [
				1.412,
				0.730,
				0.454,
				0.313,
				0.249,
				0.277,
				0.562,
				1.432,
				3.762,
				7.383,
				8.681,
				7.616,
				6.525,
				6.513,
				6.724,
				6.367,
				6.375,
				6.471,
				6.318,
				6.545,
				5.641,
				4.341,
				3.222,
				2.076,
			],
		}, {
			name: '全天销售量最高的感冒用药和呼吸系统用药',
			type: 'line',
			showSymbol:false,
			smooth:true,
			lineStyle:{
				normal:{
					width:5
				}
			},
			data: [
				0.253,
				0.142,
				0.091,
				0.065,
				0.053,
				0.057,
				0.126,
				0.356,
				1.063,
				2.158,
				2.306,
				1.973,
				1.693,
				1.607,
				1.553,
				1.476,
				1.491,
				1.557,
				1.628,
				1.646,
				1.357,
				1.024,
				0.720,
				0.434,
			],
		}, {
			name: '晚上需求较突出的避孕类产品分时段销售情况',
			type: 'line',
			showSymbol:false,
			smooth:true,
			lineStyle:{
				normal:{
					width:5
				}
			},
			data: [
				0.111,
				0.068,
				0.046,
				0.030,
				0.021,
				0.019,
				0.032,
				0.069,
				0.167,
				0.304,
				0.353,
				0.319,
				0.297,
				0.298,
				0.315,
				0.301,
				0.300,
				0.296,
				0.313,
				0.316,
				0.297,
				0.270,
				0.222,
				0.168,
			],
		},  ],

		color: [
			'#a6d7ff',
			'#FFCC33',
			'#59b3ff',
			
		],
	};
	
	if(IS_MOBILE){
		option.grid.top = '20%';
		option.grid.right = '10%';
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