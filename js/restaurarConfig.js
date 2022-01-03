var CamposAuxiliares=[];
function loadCanvas() {
  
  var configuracion= new Object();//se comentaria despues
  let json={"version":"4.6.0","objects":[{"type":"textbox","version":"4.6.0","originX":"left","originY":"top","left":30,"top":50,"width":150,"height":19.21,"fill":"rgb(0,0,0)","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeDashOffset":0,"strokeLineJoin":"miter","strokeUniform":false,"strokeMiterLimit":4,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"backgroundColor":"","fillRule":"nonzero","paintFirst":"fill","globalCompositeOperation":"source-over","skewX":0,"skewY":0,"fontFamily":"Times New Roman","fontWeight":"normal","fontSize":17,"text":"Agrega tus titulos","underline":false,"overline":false,"linethrough":false,"textAlign":"left","fontStyle":"normal","lineHeight":1.16,"textBackgroundColor":"","charSpacing":0,"styles":{},"direction":"ltr","path":null,"pathStartOffset":0,"pathSide":"left","minWidth":20,"splitByGrapheme":false},{"type":"textbox","version":"4.6.0","originX":"left","originY":"top","left":10,"top":10,"width":70,"height":22.6,"fill":"rgb(0,0,0)","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeDashOffset":0,"strokeLineJoin":"miter","strokeUniform":false,"strokeMiterLimit":4,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"backgroundColor":"","fillRule":"nonzero","paintFirst":"fill","globalCompositeOperation":"source-over","skewX":0,"skewY":0,"fontFamily":"Times New Roman","fontWeight":"normal","fontSize":20,"text":"Campo","underline":false,"overline":false,"linethrough":false,"textAlign":"left","fontStyle":"normal","lineHeight":1.16,"textBackgroundColor":"","charSpacing":0,"styles":{},"direction":"ltr","path":null,"pathStartOffset":0,"pathSide":"left","minWidth":20,"splitByGrapheme":false,"id":"F16411683009151"},{"type":"textbox","version":"4.6.0","originX":"left","originY":"top","left":49,"top":97,"width":70,"height":22.6,"fill":"rgb(0,0,0)","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeDashOffset":0,"strokeLineJoin":"miter","strokeUniform":false,"strokeMiterLimit":4,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"backgroundColor":"","fillRule":"nonzero","paintFirst":"fill","globalCompositeOperation":"source-over","skewX":0,"skewY":0,"fontFamily":"Times New Roman","fontWeight":"normal","fontSize":20,"text":"Campo","underline":false,"overline":false,"linethrough":false,"textAlign":"left","fontStyle":"normal","lineHeight":1.16,"textBackgroundColor":"","charSpacing":0,"styles":{},"direction":"ltr","path":null,"pathStartOffset":0,"pathSide":"left","minWidth":20,"splitByGrapheme":false,"id":"F16411683015392"}]};
  //let json={"version":"4.6.0","objects":[{"type":"textbox","version":"4.6.0","originX":"left","originY":"top","left":30,"top":50,"width":150,"height":19.21,"fill":"rgb(0,0,0)","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeDashOffset":0,"strokeLineJoin":"miter","strokeUniform":false,"strokeMiterLimit":4,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"backgroundColor":"","fillRule":"nonzero","paintFirst":"fill","globalCompositeOperation":"source-over","skewX":0,"skewY":0,"fontFamily":"Times New Roman","fontWeight":"normal","fontSize":17,"text":"Agrega tus titulos","underline":false,"overline":false,"linethrough":false,"textAlign":"left","fontStyle":"normal","lineHeight":1.16,"textBackgroundColor":"","charSpacing":0,"styles":{},"direction":"ltr","path":null,"pathStartOffset":0,"pathSide":"left","minWidth":20,"splitByGrapheme":false},{"type":"textbox","version":"4.6.0","originX":"left","originY":"top","left":58.5,"top":45.8,"width":114.79,"height":57.33,"fill":"rgb(0,0,0)","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeDashOffset":0,"strokeLineJoin":"miter","strokeUniform":false,"strokeMiterLimit":4,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"backgroundColor":"","fillRule":"nonzero","paintFirst":"fill","globalCompositeOperation":"source-over","skewX":0,"skewY":0,"fontFamily":"Times New Roman","fontWeight":"normal","fontSize":50.73212583270602,"text":"Texto","underline":false,"overline":false,"linethrough":false,"textAlign":"left","fontStyle":"normal","lineHeight":1.16,"textBackgroundColor":"","charSpacing":0,"styles":{},"direction":"ltr","path":{"type":"path","version":"4.6.0","originX":"left","originY":"top","left":58.5,"top":45.8,"width":42,"height":89,"fill":null,"stroke":"rgb(0, 0, 0)","strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"round","strokeDashOffset":0,"strokeLineJoin":"round","strokeUniform":false,"strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":false,"backgroundColor":"","fillRule":"nonzero","paintFirst":"fill","globalCompositeOperation":"source-over","skewX":0,"skewY":0,"path":[["M",58.999,135.30098779296875],["Q",59,135.29998779296875,59.5,134.79998779296875],["Q",60,134.29998779296875,61,132.79998779296875],["Q",62,131.29998779296875,62.5,128.79998779296875],["Q",63,126.29998779296875,65,123.79998779296875],["Q",67,121.29998779296875,68.5,117.79998779296875],["Q",70,114.29998779296875,71,111.79998779296875],["Q",72,109.29998779296875,74,105.79998779296875],["Q",76,102.29998779296875,78,99.79998779296875],["Q",80,97.29998779296875,81.5,93.79998779296875],["Q",83,90.29998779296875,85,87.79998779296875],["Q",87,85.29998779296875,88.5,82.79998779296875],["Q",90,80.29998779296875,91.5,78.79998779296875],["Q",93,77.29998779296875,94,75.79998779296875],["Q",95,74.29998779296875,95.5,73.29998779296875],["Q",96,72.29998779296875,97,71.29998779296875],["Q",98,70.29998779296875,98.5,68.79998779296875],["Q",99,67.29998779296875,99.5,66.79998779296875],["Q",100,66.29998779296875,100,65.79998779296875],["Q",100,65.29998779296875,100.5,64.29998779296875],["Q",101,63.29998779296875,101,62.79998779296875],["Q",101,62.29998779296875,101,61.79998779296875],["Q",101,61.29998779296875,101,60.79998779296875],["Q",101,60.29998779296875,101,59.79998779296875],["Q",101,59.29998779296875,101,58.79998779296875],["Q",101,58.29998779296875,101,57.29998779296875],["Q",101,56.29998779296875,101,55.29998779296875],["Q",101,54.29998779296875,100.5,54.29998779296875],["Q",100,54.29998779296875,100,53.29998779296875],["Q",100,52.29998779296875,100,51.79998779296875],["Q",100,51.29998779296875,100,50.79998779296875],["Q",100,50.29998779296875,100,49.79998779296875],["Q",100,49.29998779296875,100,48.79998779296875],["Q",100,48.29998779296875,100,47.29998779296875],["L",100,46.29898779296875]]},"pathStartOffset":0,"pathSide":"left","minWidth":20,"splitByGrapheme":false}]}
  //se comentaria despues, es un ejemplo
    configuracion.json=json;
    configuracion.width=180;
    configuracion.height=180;
    //aqui se establece el tamaño del canvas
    canvas.setHeight(configuracion.height);
    canvas.setWidth(configuracion.width);
    // se remplazan los elementos del canvas
    canvas.loadFromJSON(configuracion.json);

    
    eliminar("elementos")
    eliminar("camposIde")
    camposTexto.forEach(function(campo) {
      let option = document.createElement('option');
      option.innerHTML = campo;
      option.value = campo;
      etiquetarCampos.appendChild(option);
    });
    restauraObjCampo()
    ObtieneElementos()
    //aqui se eliminan del select ya que se recuperaron
    obtenerCamposEtiquetados();

    //se renderizan los elementos en el canvas
    canvas.renderAll();

    
      
  }
  function obtenerCamposEtiquetados(){
    for(var i=0;i < CamposBD.length;i++){

      eliminaCampoSelect(CamposBD[i].campo)
    }
    for(var i=0;i < CamposAuxiliares.length;i++){
      console.log(CamposAuxiliares[i].ObjetoCampo.id+"  "+ObjetosCampo[i].id)
    }
  }
  function eliminar(select){
    let selectElementos = document.getElementById(select);
    while (selectElementos.firstChild) {
      selectElementos.removeChild(selectElementos.firstChild);
    }
    
  }
  // vacia los arreglos de objetos
  function restauraObjCampo(){
    var all=canvas.getObjects();
    
    for(var i=0;i< ObjetosCampo.length;i++){
      ObjetosCampo.pop()
    }
    ObjetosCampo.pop()
    for(var i=0;i< CamposBD.length;i++){
      CamposBD.pop()
    }
    CamposBD.pop()
    // esto se eliminara, se sacara de la bd
    var auxCad=["Usuario","Contraseña"]
    var contC=0
    ///
    for(var i=0;i<all.length;i++){
      
      var fi=all[i].id;
      if(fi!=null){
        if(fi[0]=='F'){//todos los campos tienen un id con una F al principio
          //este objeto se obtendra de la bd
          var campoObj= new Object();
          campoObj.campo=auxCad[contC];
          campoObj.ObjetoCampo=all[i];


          CamposBD.push(campoObj);
          ObjetosCampo.push(all[i])
          contC++ //esto se eliminara

        }
      }
      
        
    }
  }