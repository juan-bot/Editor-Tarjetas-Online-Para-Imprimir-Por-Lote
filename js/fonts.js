var canvas = new fabric.Canvas('canvas',{
    //por si se requiere 
    isDrawingMode: false,
    freeDrawingBrush: new fabric.PencilBrush({ decimate: 8 })
});

var fonts = ["Pacifico", "VT323", "Quicksand", "Inconsolata","Pushster","Shizuru","Rock 3D","Montserrat"];

function agregaTexto(){
    var texto = new fabric.Textbox('texto', {
        left: 50,
        top: 50,
        width: 150,
        fontSize: 20
    
    });
    canvas.add(texto).setActiveObject(texto);
    console.log(canvas)
}

var textbox = new fabric.Textbox('Agrega tus titulos', {
    left: 50,
    top: 50,
    width: 150,
    fontSize: 20

});

canvas.add(textbox).setActiveObject(textbox);

/////////////tipos de letras
fonts.unshift('Times New Roman');
    // Populate the fontFamily select
var select = document.getElementById("font-family");

fonts.forEach(function(font) {
    var option = document.createElement('option');
    option.innerHTML = font;
    option.value = font;
    select.appendChild(option);
});

// Apply selected font on change
document.getElementById('font-family').onchange = function() {
    if (this.value !== 'Times New Roman') {
        loadAndUse(this.value);
    } else {
        canvas.getActiveObject().set("fontFamily", this.value);
        canvas.requestRenderAll();
    }
};
//////////////// tamaño de letras ////////
var sizesText=[10,11,12,13,14,15,16];

sizesText.unshift(9);
    // Populate the fontFamily select
var selectSizes = document.getElementById("sizeText");

sizesText.forEach(function(sizee) {
    var option = document.createElement('option');
    option.innerHTML = sizee;
    option.value = sizee;
    selectSizes.appendChild(option);
});

// Apply selected font on change
document.getElementById('sizeText').onchange = function() {
        canvas.getActiveObject().set('fontSize',this.value);
        canvas.requestRenderAll();
    
};
//////////////////////
function loadAndUse(font) {
    var myfont = new FontFaceObserver(font)
    myfont.load()
    .then(function() {
        // when font is loaded, use it.
        canvas.getActiveObject().set("fontFamily", font);
        canvas.requestRenderAll();
    }).catch(function(e) {
        console.log(e)
        alert('tipo de letra no encontrado :( ' + font);
    });
}
