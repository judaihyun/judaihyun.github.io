
/*
    - debug 용

    기능
    1.차트를 왼쪽 클릭할때 x,y 좌표 표출,
    2. Ctrl누른 상태에서 드래그 시 거리 재기
*/

var Guide = Guide || {};


Guide = function(ctx, canvas)
{
    let me = this;
    let drawingSurfaceImageData,
        posEl,
        drawWidthEl
        ctx,
        canvas, 
        mousePos = {},
        dragging = false;

    


    function saveDrawingSurface()
    {
        drawingSurfaceImageData = ctx.getImageData(0,0, canvas.width, canvas.height);
    }
    function restoreDrawingSurface()
    {
        ctx.putImageData(drawingSurfaceImageData, 0, 0);
    }
   

    function windowToCanvas(x, y)
    {
        var bbox = canvas.getBoundingClientRect();
        return { x:Math.floor(x - bbox.left),
            y: y - bbox.top * (canvas.height / bbox.height) };
    }


    function setDrawWidthEl(drawWidth)
    {
       me.drawWidthEl = drawWidth;
    }
    function setPosEl(pos)
    {
        me.posEl = pos;
    }
    function drawVerticalLine(x)
    {
        ctx.beginPath();
        ctx.moveTo(x+0.5, 0);
        ctx.lineTo(x+0.5, ctx.canvas.height);
        ctx.stroke();
    }

    function drawHorizontalLine(y)
    {
        ctx.beginPath();
        ctx.moveTo(0, y + 0.5);
        ctx.lineTo(ctx.canvas.width, y + 0.5);
        ctx.stroke();
    }

    


    canvas.addEventListener('mousedown',function(e){
        var loc = windowToCanvas(e.clientX, e.clientY);
        saveDrawingSurface();
        if(e.ctrlKey)
        {
            mousePos.x = loc.x;
            mousePos.y = loc.y;
            dragging = true;
        }
        ctx.strokeStyle = 'red';
        drawVerticalLine(loc.x);
        drawHorizontalLine(loc.y);
        ctx.restore();
        me.posEl.innerText = '[' + e.clientX+ '] , [' + e.clientY + ']';

    },false);

    canvas.addEventListener('mousemove', function(e){
        if(dragging)
        {
            restoreDrawingSurface();
            loc = windowToCanvas(e.clientX, e.clientY);
            ctx.save();
            ctx.strokeStyle = 'green';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(loc.x, loc.y);
            ctx.lineTo(mousePos.x, mousePos.y);
            ctx.stroke();
            ctx.restore();
            me.posEl.innerText = loc.x + ',' +loc.y;
            var string = 'lineLength : ';
            me.drawWidthEl.innerText = string + 'x('+(loc.x - mousePos.x)+'), y('+(loc.y - mousePos.y)+')';
        }
    },false);
    
    canvas.addEventListener('mouseup',function(e){
        restoreDrawingSurface();
        dragging = false;
    },false);

    return{
        setDrawWidthEl, setPosEl
    }

};