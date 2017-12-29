	        $(document).ready(function(){
				var height = $('#bar2').parent().height();
				if(IS_MOBILE){
					height*=1.5;
					if(height>$('#bar2').width()*2){
						height=$('#bar2').width()*2;
					}
				}
				$('#bar2').height(height);
				
		        var bar = echarts.init(document.getElementById('bar2'));
		        
		        var fontSize = Math.ceil(height*0.026);
		        var option = {
				    color: ['#e50000'],
				    tooltip : {
				        trigger: 'axis',
				        axisPointer : {
				            type : 'shadow'
				        },
				        formatter:'{b0} : {c0}%'
				    },
				    grid: {
				    	left:'left',
				    	containLabel:true
				    },
				    legend: {
				    	show:true,
				        selectedMode:false,
				        x: '25%',
				        y: '3%',  
				        data:['用户购买药品百分比'],
				        textStyle:{
				        	color:'white',
				        	fontSize:fontSize
				        }
				    },
				    xAxis : [
				        {
							axisLabel:{
								textStyle:{
									color:'white',
									fontSize:fontSize
								}
							},
							axisLine:{
								lineStyle:{
									color:'white'
								}
							},
							splitLine: {
					            show: false
					       },
				            type : 'value'
				        }
				    ],
				    yAxis : [
				        {
					        type: 'category',
							axisLine:{
								lineStyle:{
									color:'white'
								}
							},
							axisLabel:{
					            interval: 0,
					            rotate: 0,
								textStyle:{
									color:'white',
									fontSize:fontSize
								}
							},
					        splitLine: {
					            show: false
					        },
							data:[
							'内分泌系统',
							'护肤用品','季节护理','神经用药','检测仪器','呼吸道用具','私密护理',
							'营养食品','辅助理疗','男科用药','心脑血管用药','其他药品','安全避孕','检测试纸',
							'营养健康','风湿骨伤','滋补调养','家庭常备','儿童用药','五官用药',
							'妇科用药','消化系统','呼吸系统','皮肤用药','感冒用药']
				        }
				    ],
				    series : [
				        {
				            type:'bar',
				            z: 3,
				            name:'用户购买药品百分比',
				            label: {
					            normal: {
					                position: 'right',
					                show: true,
					                textStyle:{
					                	color:'white'
					                }
					            }
					        },
				            data:[
				            0.3,
				            0.46,0.51,0.53,0.56,0.69,0.74,
				            0.76,1.05,1.07,1.51,1.55,1.68,1.75,
				            2.37,3.00,3.96,4.04,6.20,6.44,
				            6.52,9.22,9.58,9.86,24.81]
				        }
				    ]
				};

				if(IS_MOBILE){
					option.series[0].label.normal.textStyle.fontWeight = 'bold';
					option.xAxis[0].axisLabel.textStyle.fontWeight = 'bold';
					option.yAxis[0].axisLabel.textStyle.fontWeight = 'bold';
					option.legend.textStyle.fontWeight = 'bold';
					option.legend.x = '50%';
					option.legend.y = '70%';
				}

		        bar.setOption(option);
	        });