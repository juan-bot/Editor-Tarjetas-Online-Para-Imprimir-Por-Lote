  var cadenasObj=[]
  function descargar(){
    //se guardan las cadenas como respaldo
    for(var i in ObjetosCampo){
      cadenasObj[i]=ObjetosCampo[i].text;
    }
// esto se tomaria de la base de datos
    var datos =[]
    var camposD= new Object();
    camposD.Usuario='pelon pelo rico';
    camposD.Contraseña='Contraseña123';
    camposD.Costo='$2344';
    camposD.Fecha='12 de diciembre';
    camposD.Duracion='111';
      
    for (var i=0;i<6;i++)
      datos[i]=camposD;

    pdf(datos)  
    
    //recuperamos las cadenas nuevamente
    for(var i = 0; i < ObjetosCampo.length; i++){
      ObjetosCampo[i].set("text",cadenasObj[i])
    }
    ObtieneElementos()
    canvas.renderAll();
  }

  function ObtenerExtensionImg(imgData){
    var Base64={_keyStr:imgData,encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/\r\n/g,"\n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}}
    var encoded = "Base64 encoded image returned from your service";
    var decoded = Base64.decode(encoded);
    // if the file extension is unknown
    var extension = undefined;
    // do something like this
    var lowerCase = decoded.toLowerCase();
    if (lowerCase.indexOf("png") !== -1) extension = "png"
    else if (lowerCase.indexOf("jpg") !== -1 || lowerCase.indexOf("jpeg") !== -1)
        extension = "jpg"
    else extension = "tiff";
    
    return extension;
  }

  function pdf(data){
    // se obtiene el tamaño del canvas para normalizarlo y el tamaño que se vea sea igual al del pdf
    var canvasHeigth =canvas.getHeight() * 0.67;
    var canvasWidth =canvas.getWidth() * 0.67;
  // aqui se instancia el pdf
    var doc = new jsPDF('p', 'pt', 'a4');//a4 es el formato del pdf de: 595 × 842
    var pageWidth = 595;
    var pageHeight = 842;
    var pageMargin = 20;
    pageWidth -= pageMargin * 2;
    pageHeight -= pageMargin * 2;
    var cellPadding = 10;
    var cellWidth = canvasWidth;
    var cellHeight = canvasHeigth;
    var lineHeight = 20;
    var startX = 0;
    var startY = 0;
    //doc.setFontSize(12);
    var page = 1;

    function createCard(item) {
      var requiredWidth = startX + cellWidth + (cellPadding * 2);
      var requiredHeight = startY + cellHeight + (cellPadding * 2);
      if (requiredWidth <= pageWidth) {
        textWriter(item, startX + cellPadding, startY + cellPadding);
        startX = requiredWidth;
      } 
      else {
        if (requiredHeight > pageHeight) {
          doc.addPage();
          page++;
          doc.setPage(page);
          startY = pageMargin;
        } 
        else 
          startY = requiredHeight; 
        startX = 0;
        textWriter(item, startX + cellPadding, startY + cellPadding);
        startX = startX + cellWidth + (cellPadding * 2);
      }
    }
    function textWriter(item, xAxis, yAxis) {
      doc.rect(xAxis-4, yAxis-9, cellWidth+20, cellHeight+20);
      for (var i = 0; i < CamposBD.length; i++) {
          let tamLetra=CamposBD[i].ObjetoCampo.fontSize;
          doc.setFontSize(tamLetra * 0.8)
          switch(CamposBD[i].campo){
            //aqui se sustituyen los nombres de los campos
            case 'Usuario': CamposBD[i].ObjetoCampo.set("text",item.Usuario);break;
            case 'Contraseña': CamposBD[i].ObjetoCampo.set("text",item.Contraseña); break;
            case 'Costo': CamposBD[i].ObjetoCampo.set("text",item.Costo); break;
            case 'Fecha': CamposBD[i].ObjetoCampo.set("text", item.Fecha); break;
            case 'Duracion': CamposBD[i].ObjetoCampo.set("text", item.Duracion); break;
          }
          //ObjetosCampo[i].set("text",textoPrueba)
      }

      let Data = canvas.toDataURL(); 
 
      doc.addImage(Data,ObtenerExtensionImg(Data),xAxis-3, yAxis-8,cellWidth+18,cellHeight+20);
    }
    for (var i = 0; i < data.length; i++) {
      createCard(data[i]);
    }
    //return doc;
    doc.save('ejemplo.pdf'); //para que se descargue automaticamente
  }
