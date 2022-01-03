function saveCanvas() {
    var configuracion= new Object();
    //var json = JSON.stringify( canvas.toJSON() );
    var json = JSON.stringify( canvas.toObject(['id']));
    
    configuracion.json=json;
    configuracion.width=canvas.getWidth()
    configuracion.height=canvas.getHeight()
    console.log(json)
    // save via xhr
    /*$.post('/save', { json : json }, function(resp){ 
        // do whatever ...
    }, 'json');*/
}
