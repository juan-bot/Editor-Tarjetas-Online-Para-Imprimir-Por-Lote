    function zoomIt(factor) {
    var factor = 2;
    canvas.setHeight(canvas.getHeight() * factor);
    canvas.setWidth(canvas.getWidth() * factor);
    if (canvas.backgroundImage) {
        // Need to scale background images as well
        var bi = canvas.backgroundImage;
        bi.width = bi.width * factor; bi.height = bi.height * factor;
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

        objects[i].setCoords();
    }
    canvas.renderAll();
    canvas.calcOffset();
    }
    //zoomIt();


    //Scale Canvas
    function unzoomIt(factor) {
    var factor = .5;
    canvas.setHeight(canvas.getHeight() * factor);
    canvas.setWidth(canvas.getWidth() * factor);
    if (canvas.backgroundImage) {
        // Need to scale background images as well
        var bi = canvas.backgroundImage;
        bi.width = bi.width * factor; bi.height = bi.height * factor;
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

        objects[i].setCoords();
    }
    canvas.renderAll();
    canvas.calcOffset();
    }





    fabric.Object.prototype.transparentCorners = false;
        fabric.Object.prototype.padding = 5;
        
    $("#canvas2png").click(function(){
        canvas.isDrawingMode = false;
    //enlarge image
        zoomIt();
    
        if(!window.localStorage){alert("This function is not supported by your browser."); return;}
        // to PNG
        window.open(canvas.toDataURL('png'));
        //revert back to original size
        unzoomIt();
    });
        
    //Source: http://stackoverflow.com/questions/35053171/editor-text-fabricjs-itext-format-letters-and-simultaneous-selection-textdecor


    var $ = function(id){return document.getElementById(id)};


    var canvas = this.__canvas = new fabric.Canvas('c');
        var cheight = canvas.setHeight(300);
            var cwidth = canvas.setWidth(200);
        //canvas.backgroundColor = 'red';



    var text = new fabric.IText("Bharat\nasdsa\nasdasda\nnn\nklssd", {
        fontFamily: 'Courier New',
        left: 0,
        top: 0,
        fontSize: 16,
        fill: '#000000'
    });

    var rect = new fabric.Rect({
        height: 100,
        width: 100,
        fill: '#ffcc12',
        opacity: 1
    });

    var group = new fabric.Group([rect, text]);
    canvas.add(group);
    canvas.centerObject(group);
    group.setCoords();

    fabric.util.addListener(document.getElementById('align'), 'click', function () {
        var align = text.getTextAlign();
        if (align === 'right') {
        
        text.set({
                textAlign: 'left',
                originX: 'left',
                left: rect.left
            });
        
        text.set({
                textAlign: 'center',
                originX: 'center',
                left: rect.center
            });
        
        
        } else {
            text.set({
                textAlign: 'right',
                originX: 'right',
            left: rect.left + rect.width
              //left: rect.right
           });
        }
        text.setCoords();
        canvas.renderAll();
    });

    //just added this in
    canvas.setActiveObject(text)
    /*

    //function addcenteredtext() { 
    //var text = new fabric.IText("Bharat\nasdsa\nasdasda\nnn\nklssd", {
    var text = new fabric.IText("A", {
        fontFamily: 'Verdana',
        left: 0,
        top: 0,
        fontSize: 200, // this size cannot be larger than the canvas 
        fill: '#000000'
    });

    var newrectwidth = canvas.getWidth();
    var newrectheight = canvas.getHeight();
    //alert(newrectwidth + newrectheight)

    var rect = new fabric.Rect({
        //height: newrectheight,
        //width: newrectwidth,
        height: 300,
        width: 200,
        fill: 'red',
        opacity: 1
    });


    var group = new fabric.Group([rect, text]);
    canvas.add(group);
    canvas.centerObject(group);
    group.setCoords();
    var align = text.getTextAlign();
    text.set({
                textAlign: 'center',
                originX: 'center',
                left: rect.center
            });
    
        text.setCoords();
        canvas.renderAll();
    */
    /*
    var items = group._objects;
    group._restoreObjectsState();
    canvas.remove(group);
    for(var i = 0; i < items.length; i++) {
    canvas.add(items[i]);
    }
    */
    //}


    function Addtext() { 
    canvas.add(new fabric.IText('Tap and Type', { 
        left: 0,
        top:   0,
        fontFamily: 'arial black',
        fill: '#333',
            fontSize: 20,
    
    }));
    }



    var site_url =  'http://fabricjs.com/assets/1.svg';
    fabric.loadSVGFromURL( site_url , function(objects, options) {
    });

    fabric.loadSVGFromURL(site_url, function(objects) { 
            var group2 = new fabric.PathGroup(objects, { 
            //left: 0, 
            //top: 100, 
            //width: 300, 
            //height: 211 
            }); 
            canvas.add(group2); 
            group2.center().setCoords();

            canvas.renderAll(); 
            }); 


        
    document.getElementById('text-color').onchange = function() {
                canvas.getActiveObject().setFill(this.value);
                canvas.renderAll();
            };
    document.getElementById('text-color').onchange = function() {
                canvas.getActiveObject().setFill(this.value);
                canvas.renderAll();
            };
            
            document.getElementById('text-bg-color').onchange = function() {
                canvas.getActiveObject().setBackgroundColor(this.value);
                canvas.renderAll();
            };
            
            document.getElementById('text-lines-bg-color').onchange = function() {
                canvas.getActiveObject().setTextBackgroundColor(this.value);
                canvas.renderAll();
            };

            document.getElementById('text-stroke-color').onchange = function() {
                canvas.getActiveObject().setStroke(this.value);
                canvas.renderAll();
            };	

            document.getElementById('text-stroke-width').onchange = function() {
                canvas.getActiveObject().setStrokeWidth(this.value);
                canvas.renderAll();
            };				
        
            document.getElementById('font-family').onchange = function() {
                canvas.getActiveObject().setFontFamily(this.value);
                canvas.renderAll();
            };
            
            document.getElementById('text-font-size').onchange = function() {
                canvas.getActiveObject().setFontSize(this.value);
                canvas.renderAll();
            };
            
            document.getElementById('text-line-height').onchange = function() {
                canvas.getActiveObject().setLineHeight(this.value);
                canvas.renderAll();
            };
            
            document.getElementById('text-align').onchange = function() {
                canvas.getActiveObject().setTextAlign(this.value);
                //canvas.getActiveObject().setoriginX(this.value);
        canvas.renderAll();
            };
            
        
    radios5 = document.getElementsByName("fonttype");  // wijzig naar button
        for(var i = 0, max = radios5.length; i < max; i++) {
            radios5[i].onclick = function() {
                
                if(document.getElementById(this.id).checked == true) {
                    if(this.id == "text-cmd-bold") {
                        canvas.getActiveObject().set("fontWeight", "bold");
                    }
                    if(this.id == "text-cmd-italic") {
                        canvas.getActiveObject().set("fontStyle", "italic");
                    }
                    if(this.id == "text-cmd-underline") {
                        canvas.getActiveObject().set("textDecoration", "underline");
                    }
                    if(this.id == "text-cmd-linethrough") {
                        canvas.getActiveObject().set("textDecoration", "line-through");
                    }
                    if(this.id == "text-cmd-overline") {
                        canvas.getActiveObject().set("textDecoration", "overline");
                    }
                    
                    
                    
                } else {
                    if(this.id == "text-cmd-bold") {
                        canvas.getActiveObject().set("fontWeight", "");
                    }
                    if(this.id == "text-cmd-italic") {
                        canvas.getActiveObject().set("fontStyle", "");
                    }  
                    if(this.id == "text-cmd-underline") {
                        canvas.getActiveObject().set("textDecoration", "");
                    }
                    if(this.id == "text-cmd-linethrough") {
                        canvas.getActiveObject().set("textDecoration", "");
                    }  
                    if(this.id == "text-cmd-overline") {
                        canvas.getActiveObject().set("textDecoration", "");
                    }
                }
                
                
                canvas.renderAll();
            }
        }
    

    document.getElementById('json-dataless').addEventListener('click', function() {
        console.log(canvas.toDatalessJSON());
    });

    document.getElementById('json').addEventListener('click', function() {
        console.log(canvas.toJSON());
    });



    var canvas1 = new fabric.Canvas('canvas1');
    canvas1.backgroundColor = '#000fff';
    canvas1.setHeight(300);
    canvas1.setWidth(200);
    var site_url5 = "https://userup.imgix.net/testing/imagewords.svg"
    var site_url6 = 'https://userup.imgix.net/testing/simage.svg'
    var site_url7 = 'https://userup.imgix.net/testing/imggtest1.svg'
    var site_url8 = "http://fabricjs.com/assets/1.svg"

    fabric.loadSVGFromURL(site_url8, function(objects, options) {

    var loadedObject = fabric.util.groupSVGElements(objects, options);
        // Set sourcePath
        //loadedObject.set('sourcePath', elem.getAttribute('data-url'));
        canvas1.add(loadedObject);
        loadedObject.center().setCoords();
        canvas1.renderAll();
    
    });
