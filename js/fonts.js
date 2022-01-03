    var ObjetosCampo=[];
    var ObjetosTextos=[];
    var contField=0;
    var canvas = new fabric.Canvas('canvas',{
        isDrawingMode: false,
        freeDrawingBrush: new fabric.PencilBrush({ decimate: 8 })
    });

    var fonts = ["Pacifico", "VT323", "Quicksand", "Inconsolata","Pushster","Shizuru","Rock 3D","Montserrat"];
    //agregar texto normal
    function agregaTexto(){
        
        var texto = new fabric.Textbox('texto', {
            left: 20,
            top: 30,
            width: 80,
            fontSize: 20
        });
        canvas.add(texto).setActiveObject(texto);
        ObjetosTextos.push(texto);
        ObtieneElementos();
    }
    //agregar campos 
    function agregaCampoTexto(){
        contField++;
        var unicide='F'+Date.now() + contField
        var textoCampo = new fabric.Textbox(
            'Campo', {
            left: 10,
            top: 10,
            width: 70,
            fontSize: 20,
            id:unicide//clave unica de cada campo
        });
        canvas.add(textoCampo).setActiveObject(textoCampo);
        ObjetosCampo.push(textoCampo);
        ObjetosTextos.push(textoCampo);
        ObtieneElementos();
    }
    //texto inicial
    var textbox = new fabric.Textbox('Agrega tus titulos', {
        left: 30,
        top: 50,
        width: 150,
        fontSize: 17

    });

    canvas.add(textbox).setActiveObject(textbox);
    ObjetosTextos.push(textbox);
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
    //////////////// tamaños de letras ////////
    var sizesText=[10,11,12,14,16,18,20,22,24,26,28,36,48,72];

    sizesText.unshift(9);
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
