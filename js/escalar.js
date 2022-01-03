  function escalar(factor){
    canvas.setHeight(canvas.getHeight() * factor);
    canvas.setWidth(canvas.getWidth() * factor); 
    zoomIt(factor)
  }
  function zoomIt(factor) {
    //canvas.setHeight(canvas.getHeight() * factor);
    //canvas.setWidth(canvas.getWidth() * factor);
    if (canvas.backgroundImage) {
        // Need to scale background images as well
        var bi = canvas.backgroundImage;
        bi.width = bi.width * factor; 
        bi.height = bi.height * factor;
    }
    var objects = canvas.getObjects();
    for (var i in objects) {
        var scaleX = objects[i].scaleX;
        var scaleY = objects[i].scaleY;
        var left = objects[i].left;
        var top = objects[i].top;

        var tempScaleX = scaleX * factor;
        var tempScaleY = scaleY * factor;
        var tempLeft = left * factor;
        var tempTop = top * factor;

        objects[i].scaleX = tempScaleX;
        objects[i].scaleY = tempScaleY;
        objects[i].left = tempLeft;
        objects[i].top = tempTop;

        //objects[i].setCoords();
    }
    for (var i in ObjetosTextos) {
        ObjetosTextos[i].fontSize=ObjetosTextos[i].fontSize;
    }
    canvas.renderAll();
    canvas.calcOffset();
}
var auxAncho=0,auxAlto=0;
var ancho=document.getElementById("input-ancho");
ancho.addEventListener('change', cambioAncho);

var alto=document.getElementById("input-alto")
alto.addEventListener('change', cambioAlto);


function cambioAncho(){
    let tam=Math.round((180 * ((ancho.value * 10) / 100)) + 180)

    canvas.setWidth(tam);
    if(ancho.value>0){
        if(ancho.value > auxAncho)
            zoomIt(1.02) 
        else if(ancho.value < auxAncho)
            zoomIt(.98) 
            auxAncho=ancho.value
    }else if(ancho.value<0){
        if(auxAncho>0){
            zoomIt(1)
        }
        else if(Math.abs(ancho.value) < auxAncho)
            zoomIt(1.02) 
        else if(Math.abs(ancho.value) > auxAncho)
            zoomIt(.98) 
            auxAncho=Math.abs(ancho.value)
    }
    else{
        auxAncho=0
        canvas.setWidth(180);
    }
}
function cambioAlto(){
    let tam=Math.round((180 * ((alto.value * 10) / 100)) + 180)

    canvas.setHeight(tam);
    if(alto.value>0){
        if(alto.value > auxAlto)
            zoomIt(1.02) 
        else if(alto.value < auxAlto)
            zoomIt(.98) 
        auxAlto=alto.value
    }else if(alto.value<0){
        if(auxAlto>0){
            zoomIt(1)
        }
        else if(Math.abs(alto.value) < auxAlto)
            zoomIt(1.02) 
        else if(Math.abs(alto.value) > auxAlto)
            zoomIt(.98) 
        auxAlto=Math.abs(alto.value)
    }
    else{
        auxAlto=0
        canvas.setHeight(180);
    }
}