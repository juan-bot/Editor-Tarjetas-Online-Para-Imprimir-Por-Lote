var camposTexto = ["Etiqueta Campos","Usuario", "Contraseña", "Costo","Fecha","Duracion"];
var etiquetarCampos = document.getElementById("camposIde");
//son los campos que ya han sido etiquetados
var CamposBD=[];
ObtieneElementos()
// eliminar elementos
$('#remove').click(function(){
    //objeto que sera eliminado
    var object = canvas.getActiveObject();
    //si un objeto es elimindo, verifica que sea un campo
    //si es un campo tambien lo elimina del arreglo de campos
    for (var i = 0; i < ObjetosCampo.length; i++) {
        if( ObjetosCampo[i]==object){
            ObjetosCampo.splice(i, 1);    
        }  
    }
    for (var i = 0; i < CamposBD.length; i++) {
        if(CamposBD[i].ObjetoCampo.id==object.id){
            var optionField = document.createElement('option');
            optionField.innerHTML = CamposBD[i].campo;
            optionField.value = CamposBD[i].campo;
            etiquetarCampos.appendChild(optionField);
        } 
    }

    for (var i in ObjetosTextos) {
        if( ObjetosTextos[i]==object){
            ObjetosTextos.splice(i, 1);
        }
    }
    /////////////////////////
    if (!object){
        alert('No has seleccionado un elemento a eliminar!');
        return '';
    }
    canvas.remove(object);
    ObtieneElementos()
    //elimina el objeto del canvas
    
    
});
//cambiar color de letras
document.getElementById('cinput').onchange = function() {
    canvas.getActiveObject().set('fill',this.value);
    canvas.renderAll();
};
//cambiar color de fondo de los textos
document.getElementById('backgroundInput').onchange = function() {
    canvas.getActiveObject().set('backgroundColor',this.value);
    canvas.renderAll();
};
//cambiar tamaño de letras
function letra(){
    canvas.getActiveObject().set('fontSize',30);
    canvas.renderAll();
}
// bold etc

function estilo(opc){
    if(opc==1){
        if(canvas.getActiveObject().fontWeight=="bold")
            canvas.getActiveObject().set("fontWeight", "");
        else
            canvas.getActiveObject().set("fontWeight", "bold");
    }else if(opc==2){
        if(canvas.getActiveObject().fontStyle=="italic")
            canvas.getActiveObject().set("fontStyle", "");
        else
            canvas.getActiveObject().set("fontStyle", "italic");
    }else if(opc==3){
        if(canvas.getActiveObject().underline==true)
            canvas.getActiveObject().set("underline", false);
        else
            canvas.getActiveObject().set("underline", true);
    } 
    canvas.renderAll();
}
function caragarTexto(){
    let textoPrueba="este es un texto para pruebas"
      for (var i = 0; i < ObjetosCampo.length; i++) {
     
          ObjetosCampo[i].set("text",textoPrueba)
      }
      canvas.renderAll();
}

// modifica el select de todos los elementos que se estan renderizando
function ObtieneElementos(){
    let selectEle = document.getElementById("elementos");
    let objts=canvas.getObjects();
    let existEle=false
    while (selectEle.firstChild) {
        selectEle.removeChild(selectEle.firstChild);
    }
    var ide=0;
    objts.forEach(function(elemento) {
        var option = document.createElement('option');
        if(elemento.text==null)
            option.innerHTML = "Imagen";
        else
            option.innerHTML = elemento.text;
        option.setAttribute('id', ide)
        selectEle.appendChild(option);
        existEle=true;
        ide++;
    });
    if(!existEle){
        let opt = document.createElement('option');
        opt.innerHTML = "Elementos agregados";
        selectEle.appendChild(opt);
    }
    
}

// Apply selected font on change
document.getElementById("elementos").onchange = function() {
    let objts=canvas.getObjects();
    var c = this;
    var i;
    var selectedValue = c.options[c.selectedIndex];
    for (i = 0; i < c.length; i++) {
        if(c[i]==selectedValue){
            canvas.setActiveObject(objts[i]);
            canvas.requestRenderAll();
            break;
        }
      
    }
};

// etiquetar los campos de texto

camposTexto.forEach(function(campo) {
    let option = document.createElement('option');
    option.innerHTML = campo;
    option.value = campo;
    etiquetarCampos.appendChild(option);
});
function verificaObjCampo(){
    var res=false
    for (var i = 0; i < ObjetosCampo.length; i++) {
       //si el elemento seleccionado es un campo
        if(canvas.getActiveObject().id==ObjetosCampo[i].id)
            res=true
    }
    return res
}
function verificaCampoEtiquetado(){
    var res=false
    for (var i = 0; i < CamposBD.length; i++) {
        //console.log("entra verificaCampoEtiquetado")
        //console.log("clave "+CamposBD[i].ObjetoCampo.id +"  "+canvas.getActiveObject().id)
        if(CamposBD[i].ObjetoCampo.id==canvas.getActiveObject().id){
            //console.log("ya ha sido etiquetado")
            res=true
        }
    }
    return res
}
//se analiza cuando se quiere etiquetar un campo
document.getElementById("camposIde").onchange = function() {
    if(this.value!=camposTexto[0]){
        var campoObj= new Object();
        if(verificaObjCampo()){
            if(!verificaCampoEtiquetado()){
                
                campoObj.campo=this.value;
                campoObj.ObjetoCampo=canvas.getActiveObject();

                CamposBD.push(campoObj); 
                eliminaCampoSelect(campoObj.campo)
            }else alert("ya etiquetaste este campo")
            etiquetarCampos.options[0].selected=true;
        }else alert("este no es un campo")
    }
    
};
function eliminaCampoSelect(campo){
    for (var i = 0; i < etiquetarCampos.length; i++) {
        if(etiquetarCampos[i].value==campo){
            etiquetarCampos.removeChild(etiquetarCampos[i]);
        }
    }  
    etiquetarCampos.options[0].selected=true;
}