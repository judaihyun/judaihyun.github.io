
    const CODE_VERSION = '0.6';

    (function(global, factory)
    {
        'use strict';
        // UMD,  if module object exists, then CommonJS
        // if define object exists, then AMD
        // others global.useModuleName = factory()
        typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
        typeof define === 'function' && define.amd ? define(factory) : (factory.JChart = factory(global));
    })(window, function(window){

        let DEBUG_MODE = false;

        function debugConsole(str)
        {
            if(typeof DEBUG_MODE !== 'undefined' && DEBUG_MODE)
                console.log(str);
        }

        const globalDefaults =
        {
            defaultColor: 'rgba(0,0,0,0.1)',
            defaultFontColor: '#666',
            defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
            defaultFontSize: 12,
            defaultFontStyle: 'normal',
            defaultLineHeight: 1.2,
            titleFontStyle: 'bold',
            titleSpacing: 2,
            titleMarginBottom: 6,
            titleFontColor: '#fff',
            titleAlign: 'left',
            gridLineColor: 'rgba(0,0,0,1)',
            gridLineWidth: 0.5,
            curveLineColor: 'green',
            dataPointColor: 'blue'

        };

        /* JChart 생성시 config가 비어있을 경우 이 defaultConfig 값을 사용 */
        const defaultConfig =
        {
            data:{
                labels: [''
                ],
                datasets: [{
                    label: '',
                    data: []
                    }]
            },
            options:{
                responsive: true,
                ratio: {
                    x: 21,
                    y: 9
                },
                layout: {
                    padding: {
                        top: 40.5,
                        right: 40,
                        bottom: 60.5,
                        left: 65.5
                    }
                },
                scales:{
                    yAxes:[{
                        display: true,
                        scaleLabel: {
                            display: true,
                        },
                        gridLines:{
                            color: globalDefaults.gridlineColor,
                            lineWidth: globalDefaults.gridLineWidth
                        }
                    }],
                    xAxes:[{
                        display: true,
                        scaleLabel: {
                            display: true,
                        },
                        gridLines:{
                            color: globalDefaults.gridlineColor,
                            lineWidth: globalDefaults.gridLineWidth
                        }
                    }]
                }
            },
            /*  incomplete
            elements:{},
            events: [
                'mousemove',
                'mouseout',
                'click',
                'touchstart',
                'touchmove'
            ],
            hover: { 
                onHover: null,
                mode: 'nearest',
                intersect: true,
                animationDuration: 400
            },
            
            onClick: null,
            maintainAspectRatio: true,
            responsiveAnimationDuration: 0
            */
        };

        /* 실제 반영 할 options ( layout-padding.., scales) */
        let computedSize = {
        };


        let Helper =
        {
            isExist(value)
            {
                if(!value) return false;
                return true;
            },
            contextValidator(ctx, config)
            {
                if(!this.isExist(ctx)){
                    console.error('ctx undefined');
                    return -1;
                }
                if(!this.isExist(config))
                {
                    console.error('config undefined')
                    return -1;
                }

                // TODO validate config{}
                for(let value in config)
                    debugConsole(value, config[value]);
                return ctx;
            },
            mergeConfig(config)
            {
                let data = config.data = config.data || {};
                data.labels = data.labels || [];
                data.datasets = data.datasets || [];

                //config.options = config.options || defaultConfig.options;

                console.log(defaultConfig); 
                
                //computedSize = Object.assign(defaultConfig.options, config.options);
                config.options = mergeDeep(defaultConfig.options, config);
                computedSize = config.options;
                console.log(config);
                console.log(computedSize);
                return config;
            },
            ratioCalculator(ctx)
            {
                let obj = {};
                let diagonal = 0;
                let parentNode = ctx.canvas.parentNode;
                let parentWidth = parentNode.clientWidth;
                let parentHeight = parentNode.clientHeight;

                console.log(`parent width=${parentWidth} height=${parentHeight}`);

                let x = computedSize.ratio.x;
                let y = computedSize.ratio.y;

                debugConsole(`RATIO = ${x}:${y}`);

                let w = parentWidth;
                let h = parentHeight;

                diagonal = Math.sqrt(Math.pow(w, 2) + Math.pow(h, 2));

                debugConsole(`diagonal=${diagonal}`);

                obj.width = Math.floor(diagonal * x / Math.sqrt(Math.pow(x, 2)+Math.pow(y, 2)));
                obj.height = Math.floor(diagonal * y / Math.sqrt(Math.pow(x, 2)+Math.pow(y, 2)));
                console.log(`ratio width=${obj.width},height=${obj.height}`);
                ctx.canvas.width = obj.width;
                ctx.canvas.height = obj.height;
                return obj;
            },
            computeSize(ctx)
            {
                if(computedSize.layout.padding)
                {
                    computedSize.layout.chartWidth = ctx.canvas.width -
                                                    (computedSize.layout.padding.left +
                                                    computedSize.layout.padding.right);
                    computedSize.layout.chartHeight = ctx.canvas.height -
                                                    (computedSize.layout.padding.top +
                                                    computedSize.layout.padding.bottom);
                    computedSize.layout.bottomLable = {
                        width : computedSize.layout.chartWidth + computedSize.layout.padding.left,// + computedSize.layout.padding.right,
                        height : computedSize.layout.padding.bottom +
                                computedSize.layout.chartHeight
                    };
                }else{
                    console.error('computedSize.layout.padding is not defined')
                }
            },
            niceScale(min, max)
            {
                /*
                    to get a 'nice number' algorithm. detail below 
                https://stackoverflow.com/questions/8506881/nice-label-algorithm-for-charts-with-minimum-ticks
                */
                var minPoint = min;
                var maxPoint = max;
                var maxTicks = 11;
                var tickSpacing;
                var range;
                var niceMin;
                var niceMax;

                scaleCalculator();
                return {
                    tickSpacing: tickSpacing,
                    niceMinimum: niceMin,
                    niceMaximum: niceMax
                };

                function scaleCalculator() {
                    range = niceNum(maxPoint - minPoint, false);
                    tickSpacing = niceNum(range / (maxTicks - 1), true);
                    niceMin =
                        Math.floor(minPoint / tickSpacing) * tickSpacing;
                    niceMax =
                        Math.ceil(maxPoint / tickSpacing) * tickSpacing;
                }

                function niceNum(localRange, round) {
                    var exponent; /** exponent of localRange */
                    var fraction; /** fractional part of localRange */
                    var niceFraction; /** nice, rounded fraction */

                    exponent = Math.floor(Math.log10(localRange));
                    fraction = localRange / Math.pow(10, exponent);

                    if (round) {
                        if (fraction < 1.5)
                            niceFraction = 1;
                        else if (fraction < 3)
                            niceFraction = 2;
                        else if (fraction < 7)
                            niceFraction = 5;
                        else
                            niceFraction = 10;
                    } else {
                        if (fraction <= 1)
                            niceFraction = 1;
                        else if (fraction <= 2)
                            niceFraction = 2;
                        else if (fraction <= 5)
                            niceFraction = 5;
                        else
                            niceFraction = 10;
                    }
                    return niceFraction * Math.pow(10, exponent);
                }

            },
            drawingRect(ctx) // for debug
            {
                return{
                    canvasArea : ()=>{
                        ctx.save();
                        ctx.strokeStyle = 'black';
                        ctx.lineWidth = 5;
                        ctx.strokeRect(0, 0, ctx.canvas.width, ctx.canvas.height);
                        ctx.restore();
                    },
                    chartArea : () => {
                        ctx.save();
                        ctx.strokeStyle = 'red';
                        ctx.lineWidth = 3;
                        ctx.strokeRect(computedSize.layout.padding.left,
                                computedSize.layout.padding.top,
                                computedSize.layout.chartWidth,
                                computedSize.layout.chartHeight);
                        ctx.restore();
                    },
                    yTickLabel : () => {
                        ctx.save();
                        ctx.strokeStyle = 'green';
                        ctx.lineWidth = 3;
                        ctx.strokeRect(30, 30, 30, computedSize.layout.chartHeight);
                        ctx.restore();
                    },
                    bottomLabel : () => {
                        ctx.save();
                        ctx.strokeStyle = 'blue';
                        ctx.lineWidth = 3;
                        ctx.strokeRect(0,
                                    computedSize.layout.padding.top + computedSize.layout.chartHeight,
                                    computedSize.layout.bottomLable.width,
                                    computedSize.layout.bottomLable.height);
                        ctx.restore();
                    }
                }


            }
        };

        let dataPoints = [{
            xPoint : [],
            yPoint : []
        }];

        let Draw = function(){

        return{
            drawOptions()
            {
                let ctx = this.getContext();
                let width = ctx.canvas.width,
                    height = ctx.canvas.height;

                let leftPadding = computedSize.layout.padding.left,
                    rightPadding = computedSize.layout.padding.right,
                    topPadding = computedSize.layout.padding.top,
                    bottomPadding = computedSize.layout.padding.bottom,
                    chartWidth = computedSize.layout.chartWidth,
                    chartHeight = computedSize.layout.chartHeight;


                return{
                    width, height, leftPadding,
                    rightPadding, topPadding, bottomPadding,
                    chartWidth, chartHeight
                }
            },
            yGridWithLabel(label) /* it depends on labels */ 
            {
                let ctx = this.getContext();
                let options = this.drawOptions();

                let labelLength = label.length || 1;
                let stepx = options.chartWidth / (labelLength - 1);
                let height = options.chartHeight + options.topPadding;
                let width = options.chartWidth + options.leftPadding;


                dataPoints[0].xPoint.splice(0);
                ctx.save();
                ctx.strokeStyle = computedSize.scales.yAxes[0].gridLines.color;
                ctx.lineWidth = computedSize.scales.yAxes[0].gridLines.lineWidth;

                for(let x = options.leftPadding, yAxes = 0;
                    x <= width; x += stepx, yAxes++)
                {
                    ctx.beginPath();
                    ctx.moveTo(x, options.topPadding);
                    ctx.lineTo(x, height);

                    dataPoints[0].xPoint.push(x);
                    this.bottomLabel(label[yAxes], x, options.chartHeight + options.bottomPadding);
                    ctx.stroke();
                }

                ctx.restore();
            },
            bottomLabel(string, x, y)
            {
                if(!string) return;
                var ctx = this.getContext();
                ctx.fillText(string, x, y);
            },
            xGridWithLabel(max, min)
            {
                let ctx = this.getContext();
                let options = this.drawOptions();

                let nice, niceMax, niceMin, tickStep, yTickNumber;
                if(max !== min)
                {
                    nice = Helper.niceScale(min, max);
                    niceMax = nice.niceMaximum;
                    niceMin = nice.niceMinimum;
                    tickStep = nice.tickSpacing;
                    yTickNumber = (niceMax - niceMin) / tickStep + 1;
                }else{
                    tickStep = 0.2;
                    niceMax = max + (tickStep * 5);
                    niceMin = max - (tickStep * 5);
                    yTickNumber = 11;
                }


                let stepy = Math.ceil((options.chartHeight) / yTickNumber);  
                let yTick = niceMax;
                let height = options.chartHeight + options.topPadding; 
                let width = options.chartWidth + options.leftPadding;
                dataPoints.tickNumber = yTickNumber;
                dataPoints.niceMax = niceMax;
                dataPoints.niceMin = niceMin;
                dataPoints.tickStep = tickStep;
                dataPoints.stepy = stepy;
                debugConsole('-----------');
                debugConsole('tickStep: ' + tickStep);
                debugConsole('niceMax : ' + niceMax);
                debugConsole('niceMin : ' + niceMin);
                debugConsole('yTickNumber : ' + yTickNumber);
                debugConsole('stepy : ' + stepy);
                debugConsole('tickStep : ' + tickStep);
                debugConsole('-----------');

                ctx.save();
                ctx.strokeStyle = computedSize.scales.xAxes[0].gridLines.color;
                let lineWidth = computedSize.scales.xAxes[0].gridLines.lineWidth;


                for(let y = options.topPadding;
                    y < height;
                    y += stepy)
                {
                    ctx.beginPath();
                    ctx.lineWidth = lineWidth;
                    if(yTick === 0)
                    {
                        ctx.lineWidth = lineWidth * 2;
                    }
                    this.yTickLabel(yTick, options.leftPadding - 20, y);
                    ctx.moveTo(options.leftPadding - 10, y);
                    ctx.lineTo(width, y);
                    yTick -= tickStep;
                    ctx.stroke();
                    dataPoints.tickHeight = y;
                }
                ctx.restore();
            },
            yTickLabel(tick, x, y)
            {
                let ctx = this.getContext();
                let yTick = tick.toFixed(1);
                ctx.fillText(yTick, x, y);
            },
            drawGrid(data)
            {
                let ctx = this.getContext();

                let fontSize = globalDefaults.defaultFontSize,
                fontStyle = fontSize + 'px ' + 'Arial';
                ctx.font = fontStyle,
                ctx.textAlign = 'center',
                ctx.textBaseline = 'middle';

                let label = data.labels;

                this.yGridWithLabel(label);

                let dataValue = data.datasets[0].data;
                let maxValue = Math.max.apply(null, dataValue);
                let minValue = Math.min.apply(null, dataValue);

                this.xGridWithLabel(maxValue, minValue);


            },
            axisTitles(scales, axesType)
            {
                var labelString,
                    fontStyle,
                    width,
                    height,
                fontSize = globalDefaults.defaultFontSize,
                fontStyle = fontSize + 'px ' + 'Arial';

                var ctx = this.getContext();

                ctx.save();
                ctx.fillStyle = globalDefaults.defaultFontColor;
                ctx.lineWidth = 1;
                ctx.font = fontStyle;
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';

                if(axesType==='xAxes') // bottom legend lable
                {
                    labelString = scales[0].scaleLabel.labelString;
                    width = ctx.canvas.width / 2;
                    ctx.fillText(labelString, width, computedSize.layout.bottomLable.height + fontSize + 1);
                }else if(axesType==='yAxes'){ // left legend lable
                    labelString = scales[0].scaleLabel.labelString;
                    width = ctx.canvas.width;
                    height = ctx.canvas.height / 2;
                    ctx.translate(25, height);
                    ctx.rotate(Math.PI * 1.5);
                    ctx.fillText(labelString, 0, 0 );
                }

                ctx.restore();
            },
            linePoint(data, xPoint)
            {
                let ctx = this.getContext();
                let options = this.drawOptions();
                let niceMax = dataPoints.niceMax;
                let niceMin = dataPoints.niceMin;
                let tickStep = dataPoints.tickStep;
                let height = dataPoints.tickHeight - options.topPadding;
                let stepy = dataPoints.stepy;

                debugConsole('Draw.point()'); 
                debugConsole('height : ' + height);
                debugConsole('stepy : ' + stepy);

                data.forEach(function(i, index){ // data
                    var data = i;
                    let y;
                    if(data === 0){
                        y = (niceMax / tickStep) * stepy;
                    }else if(data < 0){
                        data*=-1;
                        y = ((stepy / tickStep) * data) + ((niceMax / tickStep) * stepy );
                    }else if(data > 0){
                        y = ((stepy / tickStep ) * niceMax) - (stepy / tickStep) * data;
                    }
                    let x = xPoint[index];
                    dataPoints[0].yPoint.push(y + options.topPadding);

                    ctx.save();
                    ctx.beginPath();
                    ctx.fillStyle = globalDefaults.dataPointColor;
                    ctx.arc(x, y + options.topPadding, 3, 0, Math.PI*2);
                    ctx.fill();
                    ctx.restore();
                });
            },
            lineCurve()
            {
                let ctx = this.getContext();
                ctx.save();
                ctx.beginPath();

                let length = dataPoints[0].xPoint.length;
                let xPoint = dataPoints[0].xPoint;
                let yPoint = dataPoints[0].yPoint; 
                debugConsole(dataPoints[0].yPoint);
                ctx.moveTo(xPoint[0], yPoint[0]);
                ctx.strokeStyle = globalDefaults.curveLineColor;
                ctx.lineWidth = 2;
                for(let i = 0; i < length; i++)
                {
                    debugConsole('x : ' + xPoint[i]);
                    debugConsole('y : ' + yPoint[i]);
                    ctx.lineTo(xPoint[i], yPoint[i]);
                    ctx.stroke();
                }

                dataPoints[0].yPoint.splice(0);
                ctx.restore();
            },
            baseCanvas(config)
            {
                let opts = config.options;
                let data = config.data;

                this.drawGrid(data);
                for(var i = 0; i < data.datasets.length; i++)
                {
                    this.linePoint(data.datasets[i].data, dataPoints[0].xPoint);
                }
                /*
                data.datasets.forEach(function(i, index){
                    this.linePoint(i.data, dataPoints[0].xPoint);
                });
                */

                this.lineCurve();

                for(let axes in opts.scales)
                {
                    if(opts.scales[axes][0].display)
                    {
                        this.axisTitles(opts.scales[axes], axes);
                    }
                }
            },
            getContext(){
                return this.ctx;
            },
            setContext(_ctx){
                this.ctx = _ctx;
            }
        }
        }


        let JChart = function(ctx, config)
        {
            if(!(this instanceof JChart))
            {
                return new JChart(ctx, config);
            };

            let me = this;

            me.initialize(ctx, config);

            me.update = function()
            {
                me.ctx.clearRect(0,0, me.ctx.canvas.width, me.ctx.canvas.height);
                me.draw.baseCanvas(me.config);
            }
            me.changeRatio = function()
            {
                Helper.computeSize(me.ctx);
                me.baseDrawing();
            }
            me.getCurrentOpt = function()
            {
                return computedSize;
            }
            me.setLog = function(value)
            {
                if(Helper.isExist(value))
                {
                    DEBUG_MODE = value;
                }
            }
            me.areaShow = function()
            {
                return Helper.drawingRect(ctx);
            }

 
            return me;
        };

    

    

        JChart.prototype.initialize = function(ctx, config)
        {
            let me = this;
            me.draw = new Draw();
            me.ctx = Helper.contextValidator(ctx, config);
            if(me.ctx < 0)  return -1;

            me.config = Helper.mergeConfig(config);

            me.draw.setContext(ctx);

            me.bindEvent();

            me.baseDrawing();

        }

        JChart.prototype.bindEvent = function()
        {
            let me = this;
            let responsive = me.config.options.responsive || false;
            if(responsive)
            {
                me.bindResizeEvent();
            }
        }

        JChart.prototype.baseDrawing = function()
        {
            let me = this;

            Helper.ratioCalculator(me.ctx);

            Helper.computeSize(me.ctx);
            me.draw.baseCanvas(me.config);
        }

        JChart.prototype.bindResizeEvent = function()
        {
            console.warn('responsive mode : on');
            var me = this;

            window.addEventListener('resize',function(){
                this.resizingCanvas();
            }.bind(me));
        }

        JChart.prototype.resizingCanvas = function()
        {
            let me = this;
            Helper.ratioCalculator(me.ctx);

            debugConsole(`resize width=${me.ctx.canvas.width} height=${me.ctx.canvas.height}`);

            Helper.computeSize(me.ctx);
            me.draw.baseCanvas(this.config);
        }


        window.JChart = JChart;


    });





function isObject(item) {
        return (item && typeof item === 'object' && !Array.isArray(item));
}

/**
* https://stackoverflow.com/questions/27936772/how-to-deep-merge-instead-of-shallow-merge/34749873#34749873
* Deep merge two objects.
* @param target
* @param ...sources
*/

function mergeDeep(target, ...sources) {
    if (!sources.length) return target;
    const source = sources.shift();
      
    if (isObject(target) && isObject(source)) {
        for (const key in source) {
            if (isObject(source[key])) {
                if (!target[key]) Object.assign(target, { [key]: {} });
                mergeDeep(target[key], source[key]);
            } else {
              Object.assign(target, { [key]: source[key] });
            }
        }
    }
    return mergeDeep(target, ...sources);
}