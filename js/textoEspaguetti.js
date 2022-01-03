function dibujaTexto(){  
    canvas.isDrawingMode=canvas.isDrawingMode? false:true;
    //canvas.isDrawingMode=false;
}

fabric.Object.prototype.objectCaching = true;

canvas.on('before:path:created', function(opt) {
    console.log("opt: ",opt)
    var path = opt.path;
    path.visible=false; //para que no se vea la linea cuando la traces
    var pathInfo = fabric.util.getPathSegmentsInfo(path.path);
    path.segmentsInfo = pathInfo;
    var pathLength = pathInfo[pathInfo.length - 1].length;
    var text = 'Texto';
    var fontSize = 2.5 * pathLength / text.length;
    var text = new fabric.Textbox(text, { 
        fontSize: fontSize, 
        path: path, 
        top: path.top, 
        left: path.left 
    });
    canvas.add(text);
    ObtieneElementos();
});

canvas.on('path:created', function(opt) {
    canvas.remove(opt.path);
})
