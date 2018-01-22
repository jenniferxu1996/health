	$(document).ready(function(){
			var height = $('#bar').parent().height();
			$('#bar').height(height);
	        var bar = echarts.init(document.getElementById('bar'));
	        
			option = {
				color: ['#fff'],
			    tooltip : {
			        trigger: 'axis',
			        axisPointer : {
			            type : 'shadow'
			        },
			        formatter:'{c0}%'
			    },
			    grid: {
			    	top:'5%',
			    	bottom:'5%',
			        containLabel: true
			    },
			    xAxis : [
			        {
				    	
						axisLabel:{
							textStyle:{
								color:'white'
							}
						},
						axisLine:{
							show:false
						},
			            type : 'category',
			            data : ['10', '30', '50', '100', '200', 'above 200'],
			            axisTick: {
			                show:false
			            }
			        }
			    ],
			    yAxis : [
			        {
				        type: 'value',
						axisLine:{
							show:false
						},
						axisLabel:{
				            show:false
						},
						splitLine: {
					            show: false
					    },
					    axisTick: {
			                show:false
			            }
			        }
			    ],
			    series : [
			        {
			            name:'用户消费水平分布',
			            type:'bar',
			            barMaxWidth:'55%',
			            data:[20.44, 45.34, 20.76, 8.83, 3.40, 1.24],
				        label: {
					        normal: {
					            position: 'top',
					            show: true,
					            formatter:'{c}%',
					            textStyle:{
					            	color:'white'
					            }
					        }
					    }
			        }
			    ]
			};
			
	        bar.setOption(option);
	});