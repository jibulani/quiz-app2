var ChartsAmcharts = function() {
			    var initChartSample1 = function() {
        var chart = AmCharts.makeChart("chart_1", {
            "theme": "light",
            "type": "serial",
            "startDuration": 2,

            "fontFamily": 'Open Sans',
            
            "color":    '#888',

            "dataProvider": window.dataChart1,
            // [{
            //     "player": "Игрок 1",
            //     "minutes": 75,
            //     "color": "#FF0F00"
            // }, {
            //     "player": "Игрок 2",
            //     "minutes": 60,
            //     "color": "#FF6600"
            // }, {
            //     "player": "Игрок 3",
            //     "minutes": 48,
            //     "color": "#FF9E01"
            // }, {
            //     "player": "Игрок 4",
            //     "minutes": 45,
            //     "color": "#FCD202"
            // }, {
            //     "player": "Игрок 5",
            //     "minutes": 42,
            //     "color": "#F8FF01"
            // }, {
            //     "player": "Игрок 6",
            //     "minutes": 40,
            //     "color": "#B0DE09"
            // }, {
            //     "player": "Игрок 7",
            //     "minutes": 30,
            //     "color": "#04D215"
            // }, {
            //     "player": "Игрок 8",
            //     "minutes": 18,
            //     "color": "#0D8ECF"
            // },  {
            //     "player": "Игрок 9",
            //     "minutes": 10,
            //     "color": "#000000"
            // }]
            "valueAxes": [{
                "position": "left",
                "axisAlpha": 0,
                "gridAlpha": 0
            }],
            "graphs": [{
                "balloonText": "[[category]]: <b>[[value]]</b>",
                "colorField": "color",
                "fillAlphas": 0.85,
                "lineAlpha": 0.1,
                "type": "column",
                "topRadius": 1,
                "valueField": "minutes"
            }],
            "depth3D": 40,
            "angle": 30,
            "chartCursor": {
                "categoryBalloonEnabled": false,
                "cursorAlpha": 0,
                "zoomable": false
            },
            "categoryField": "player",
            "categoryAxis": {
                "gridPosition": "start",
                "axisAlpha": 0,
                "gridAlpha": 0

            },
            "exportConfig": {
                "menuTop": "20px",
                "menuRight": "20px",
                "menuItems": [{
                    "icon": '/lib/3/images/export.png',
                    "format": 'png'
                }]
            }
        }, 0);

        jQuery('.chart_1_chart_input').off().on('input change', function() {
            var property = jQuery(this).data('property');
            var target = chart;
            chart.startDuration = 0;

            if (property == 'topRadius') {
                target = chart.graphs[0];
            }

            target[property] = this.value;
            chart.validateNow();
        });

        $('#chart_1').closest('.portlet').find('.fullscreen').click(function() {
            chart.invalidateSize();
        });
    }
		    var initChartSample2 = function() {
        var chart = AmCharts.makeChart("chart_2", {
            "theme": "light",
            "type": "serial",
            "startDuration": 2,

            "fontFamily": 'Open Sans',
            
            "color":    '#888',

            "dataProvider": window.dataChart2,
            // [{
            //     "player": "Александр",
            //     "minutes": 100,
            //     "color": "#FF0F00"
            // }, {
            //     "player": "Николай",
            //     "minutes": 60,
            //     "color": "#FF6600"
            // }, {
            //     "player": "Игрок 3",
            //     "minutes": 48,
            //     "color": "#FF9E01"
            // }, {
            //     "player": "Игрок 4",
            //     "minutes": 45,
            //     "color": "#FCD202"
            // }, {
            //     "player": "Игрок 5",
            //     "minutes": 42,
            //     "color": "#F8FF01"
            // }, {
            //     "player": "Игрок 6",
            //     "minutes": 40,
            //     "color": "#B0DE09"
            // }, {
            //     "player": "Игрок 7",
            //     "minutes": 30,
            //     "color": "#04D215"
            // }, {
            //     "player": "Игрок 8",
            //     "minutes": 18,
            //     "color": "#0D8ECF"
            // },  {
            //     "player": "Игрок 9",
            //     "minutes": 10,
            //     "color": "#000000"
            // }],
            // "valueAxes": [{
            //     "position": "left",
            //     "axisAlpha": 0,
            //     "gridAlpha": 0
            // }],
            "graphs": [{
                "balloonText": "[[category]]: <b>[[value]]</b>",
                "colorField": "color",
                "fillAlphas": 0.85,
                "lineAlpha": 0.1,
                "type": "column",
                "topRadius": 1,
                "valueField": "goal_plus_pass"
            }],
            "depth3D": 40,
            "angle": 30,
            "chartCursor": {
                "categoryBalloonEnabled": false,
                "cursorAlpha": 0,
                "zoomable": false
            },
            "categoryField": "player",
            "categoryAxis": {
                "gridPosition": "start",
                "axisAlpha": 0,
                "gridAlpha": 0

            },
            "exportConfig": {
                "menuTop": "20px",
                "menuRight": "20px",
                "menuItems": [{
                    "icon": '/lib/3/images/export.png',
                    "format": 'png'
                }]
            }
        }, 0);

        jQuery('.chart_2_chart_input').off().on('input change', function() {
            var property = jQuery(this).data('property');
            var target = chart;
            chart.startDuration = 0;

            if (property == 'topRadius') {
                target = chart.graphs[0];
            }

            target[property] = this.value;
            chart.validateNow();
        });

        $('#chart_2').closest('.portlet').find('.fullscreen').click(function() {
            chart.invalidateSize();
        });
    }
	    var initChartSample3 = function() {
        var chart = AmCharts.makeChart("chart_3", {
            "theme": "light",
            "type": "serial",
            "startDuration": 2,

            "fontFamily": 'Open Sans',
            
            "color":    '#888',

            "dataProvider": window.dataChart3,
            // [{
            //     "player": "Игрок 1",
            //     "minutes": 75,
            //     "color": "#FF0F00"
            // }, {
            //     "player": "Игрок 2",
            //     "minutes": 60,
            //     "color": "#FF6600"
            // }, {
            //     "player": "Игрок 3",
            //     "minutes": 48,
            //     "color": "#FF9E01"
            // }, {
            //     "player": "Игрок 4",
            //     "minutes": 45,
            //     "color": "#FCD202"
            // }, {
            //     "player": "Игрок 5",
            //     "minutes": 42,
            //     "color": "#F8FF01"
            // }, {
            //     "player": "Игрок 6",
            //     "minutes": 40,
            //     "color": "#B0DE09"
            // }, {
            //     "player": "Игрок 7",
            //     "minutes": 30,
            //     "color": "#04D215"
            // }, {
            //     "player": "Игрок 8",
            //     "minutes": 18,
            //     "color": "#0D8ECF"
            // },  {
            //     "player": "Игрок 9",
            //     "minutes": 10,
            //     "color": "#000000"
            // }],
            // "valueAxes": [{
            //     "position": "left",
            //     "axisAlpha": 0,
            //     "gridAlpha": 0
            // }],
            "graphs": [{
                "balloonText": "[[category]]: <b>[[value]]</b>",
                "colorField": "color",
                "fillAlphas": 0.85,
                "lineAlpha": 0.1,
                "type": "column",
                "topRadius": 1,
                "valueField": "min_per_result"
            }],
            "depth3D": 40,
            "angle": 30,
            "chartCursor": {
                "categoryBalloonEnabled": false,
                "cursorAlpha": 0,
                "zoomable": false
            },
            "categoryField": "player",
            "categoryAxis": {
                "gridPosition": "start",
                "axisAlpha": 0,
                "gridAlpha": 0

            },
            "exportConfig": {
                "menuTop": "20px",
                "menuRight": "20px",
                "menuItems": [{
                    "icon": '/lib/3/images/export.png',
                    "format": 'png'
                }]
            }
        }, 0);

        jQuery('.chart_3_chart_input').off().on('input change', function() {
            var property = jQuery(this).data('property');
            var target = chart;
            chart.startDuration = 0;

            if (property == 'topRadius') {
                target = chart.graphs[0];
            }

            target[property] = this.value;
            chart.validateNow();
        });

        $('#chart_3').closest('.portlet').find('.fullscreen').click(function() {
            chart.invalidateSize();
        });
    }
   
    var initChartSample4 = function() {
        var chart = AmCharts.makeChart("chart_4", {
            "theme": "light",
            "type": "serial",
            "startDuration": 2,

            "fontFamily": 'Open Sans',
            
            "color":    '#888',

            "dataProvider": window.dataChart4,
            // [{
            //     "player": "Игрок 1",
            //     "minutes": 75,
            //     "color": "#FF0F00"
            // }, {
            //     "player": "Игрок 2",
            //     "minutes": 60,
            //     "color": "#FF6600"
            // }, {
            //     "player": "Игрок 3",
            //     "minutes": 48,
            //     "color": "#FF9E01"
            // }, {
            //     "player": "Игрок 4",
            //     "minutes": 45,
            //     "color": "#FCD202"
            // }, {
            //     "player": "Игрок 5",
            //     "minutes": 42,
            //     "color": "#F8FF01"
            // }, {
            //     "player": "Игрок 6",
            //     "minutes": 40,
            //     "color": "#B0DE09"
            // }, {
            //     "player": "Игрок 7",
            //     "minutes": 30,
            //     "color": "#04D215"
            // }, {
            //     "player": "Игрок 8",
            //     "minutes": 18,
            //     "color": "#0D8ECF"
            // },  {
            //     "player": "Игрок 9",
            //     "minutes": 10,
            //     "color": "#000000"
            // }],
            "valueAxes": [{
                "position": "left",
                "axisAlpha": 0,
                "gridAlpha": 0
            }],
            "graphs": [{
                "balloonText": "[[category]]: <b>[[value]]</b>",
                "colorField": "color",
                "fillAlphas": 0.85,
                "lineAlpha": 0.1,
                "type": "column",
                "topRadius": 1,
                "valueField": "minutes"
            }],
            "depth3D": 40,
            "angle": 30,
            "chartCursor": {
                "categoryBalloonEnabled": false,
                "cursorAlpha": 0,
                "zoomable": false
            },
            "categoryField": "player",
            "categoryAxis": {
                "gridPosition": "start",
                "axisAlpha": 0,
                "gridAlpha": 0

            },
            "exportConfig": {
                "menuTop": "20px",
                "menuRight": "20px",
                "menuItems": [{
                    "icon": '/lib/3/images/export.png',
                    "format": 'png'
                }]
            }
        }, 0);

        jQuery('.chart_4_chart_input').off().on('input change', function() {
            var property = jQuery(this).data('property');
            var target = chart;
            chart.startDuration = 0;

            if (property == 'topRadius') {
                target = chart.graphs[0];
            }

            target[property] = this.value;
            chart.validateNow();
        });

        $('#chart_4').closest('.portlet').find('.fullscreen').click(function() {
            chart.invalidateSize();
        });
    }
   

    var initChartSample5 = function() {
        var chart = AmCharts.makeChart("chart_5", {
            "theme": "light",
            "type": "serial",
            "startDuration": 2,

            "fontFamily": 'Open Sans',
            
            "color":    '#888',

            "dataProvider": window.dataChart5,
            // [{
            //     "player": "Игрок 1",
            //     "minutes": 75,
            //     "color": "#FF0F00"
            // }, {
            //     "player": "Игрок 2",
            //     "minutes": 60,
            //     "color": "#FF6600"
            // }, {
            //     "player": "Игрок 3",
            //     "minutes": 48,
            //     "color": "#FF9E01"
            // }, {
            //     "player": "Игрок 4",
            //     "minutes": 45,
            //     "color": "#FCD202"
            // }, {
            //     "player": "Игрок 5",
            //     "minutes": 42,
            //     "color": "#F8FF01"
            // }, {
            //     "player": "Игрок 6",
            //     "minutes": 40,
            //     "color": "#B0DE09"
            // }, {
            //     "player": "Игрок 7",
            //     "minutes": 30,
            //     "color": "#04D215"
            // }, {
            //     "player": "Игрок 8",
            //     "minutes": 18,
            //     "color": "#0D8ECF"
            // },  {
            //     "player": "Игрок 9",
            //     "minutes": 10,
            //     "color": "#000000"
            // }],
            // "valueAxes": [{
            //     "position": "left",
            //     "axisAlpha": 0,
            //     "gridAlpha": 0
            // }],
            "graphs": [{
                "balloonText": "[[category]]: <b>[[value]]</b>",
                "colorField": "color",
                "fillAlphas": 0.85,
                "lineAlpha": 0.1,
                "type": "column",
                "topRadius": 1,
                "valueField": "missed_goals"
            }],
            "depth3D": 40,
            "angle": 30,
            "chartCursor": {
                "categoryBalloonEnabled": false,
                "cursorAlpha": 0,
                "zoomable": false
            },
            "categoryField": "player",
            "categoryAxis": {
                "gridPosition": "start",
                "axisAlpha": 0,
                "gridAlpha": 0

            },
            "exportConfig": {
                "menuTop": "20px",
                "menuRight": "20px",
                "menuItems": [{
                    "icon": '/lib/3/images/export.png',
                    "format": 'png'
                }]
            }
        }, 0);

        jQuery('.chart_5_chart_input').off().on('input change', function() {
            var property = jQuery(this).data('property');
            var target = chart;
            chart.startDuration = 0;

            if (property == 'topRadius') {
                target = chart.graphs[0];
            }

            target[property] = this.value;
            chart.validateNow();
        });

        $('#chart_5').closest('.portlet').find('.fullscreen').click(function() {
            chart.invalidateSize();
        });
    }
	    var initChartSample6 = function() {
        var chart = AmCharts.makeChart("chart_6", {
            "theme": "light",
            "type": "serial",
            "startDuration": 2,

            "fontFamily": 'Open Sans',
            
            "color":    '#888',

            "dataProvider": //window.dataChart6,
            [{
                "player": "Игрок 1",
                "minutes": 75,
                "color": "#FF0F00"
            }, {
                "player": "Игрок 2",
                "minutes": 60,
                "color": "#FF6600"
            }, {
                "player": "Игрок 3",
                "minutes": 48,
                "color": "#FF9E01"
            }, {
                "player": "Игрок 4",
                "minutes": 45,
                "color": "#FCD202"
            }, {
                "player": "Игрок 5",
                "minutes": 42,
                "color": "#F8FF01"
            }, {
                "player": "Игрок 6",
                "minutes": 40,
                "color": "#B0DE09"
            }, {
                "player": "Игрок 7",
                "minutes": 30,
                "color": "#04D215"
            }, {
                "player": "Игрок 8",
                "minutes": 18,
                "color": "#0D8ECF"
            },  {
                "player": "Игрок 9",
                "minutes": 10,
                "color": "#000000"
            }],
            "valueAxes": [{
                "position": "left",
                "axisAlpha": 0,
                "gridAlpha": 0
            }],
            "graphs": [{
                "balloonText": "[[category]]: <b>[[value]]</b>",
                "colorField": "color",
                "fillAlphas": 0.85,
                "lineAlpha": 0.1,
                "type": "column",
                "topRadius": 1,
                "valueField": "minutes"//"min_per_missed"
            }],
            "depth3D": 40,
            "angle": 30,
            "chartCursor": {
                "categoryBalloonEnabled": false,
                "cursorAlpha": 0,
                "zoomable": false
            },
            "categoryField": "player",
            "categoryAxis": {
                "gridPosition": "start",
                "axisAlpha": 0,
                "gridAlpha": 0

            },
            "exportConfig": {
                "menuTop": "20px",
                "menuRight": "20px",
                "menuItems": [{
                    "icon": '/lib/3/images/export.png',
                    "format": 'png'
                }]
            }
        }, 0);

        jQuery('.chart_6_chart_input').off().on('input change', function() {
            var property = jQuery(this).data('property');
            var target = chart;
            chart.startDuration = 0;

            if (property == 'topRadius') {
                target = chart.graphs[0];
            }

            target[property] = this.value;
            chart.validateNow();
        });

        $('#chart_6').closest('.portlet').find('.fullscreen').click(function() {
            chart.invalidateSize();
        });
    }

  
    return {
        //main function to initiate the module

        init: function() {

            initChartSample1();
            initChartSample2();
            initChartSample3();
            initChartSample4();
            initChartSample5();
			initChartSample6();
        }

    };

}();

jQuery(document).ready(function() {    
   ChartsAmcharts.init(); 
});