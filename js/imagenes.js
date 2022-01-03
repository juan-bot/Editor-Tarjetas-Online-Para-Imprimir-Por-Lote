//imagen inicial
fabric.Image.fromURL('../images/loro.jpg', function(img) {
  img.set({ left: 20, top: 70}).scale(0.23);
  canvas.add(img);
  ObtieneElementos();
});

var imgElement = "";
var inputforupload = "";
var readerobj = "";
/** Ajustes de la imagen para darle estilo **/
var HideControls = {
    'tl':true,
    'tr':true,
    'bl':true,
    'br':true,
    'ml':true,
    'mt':true,
    'mr':true,
    'mb':true,
    'mtr':true
};
var ctrlImages = new Array()
function preload() {
    for (i = 0; i < preload.arguments.length; i++) {
        ctrlImages[i] = new Image();
        ctrlImages[i].src = preload.arguments[i];
    }
}
preload(
    "https://cdn.kartendruckerei.de/img/icons/ic_rotate_right_48px.svg",
    "https://cdn.kartendruckerei.de/img/icons/ic_highlight_off_48px.svg",
    "https://cdn.kartendruckerei.de/img/icons/expand-2.svg",

    "https://cdn3.iconfinder.com/data/icons/social-messaging-productivity-1/128/save-16.png"
)
//override _drawControl function to change the corner images
fabric.Object.prototype._drawControl = function(control, ctx, methodName, left, top, flipiX, flipiY) {
    var sizeX = this.cornerSize / this.scaleX,
    sizeY = this.cornerSize / this.scaleY;
    if (this.isControlVisible(control)) {
    /* isVML ||*/ this.transparentCorners || ctx.clearRect(left, top, sizeX, sizeY);
        var SelectedIconImage = new Image();
        var lx='';
        var ly='';
        var n='';

        switch (control){
            case 'tl':
                if (flipiY) { ly='b'; } else { ly = 't'; }
                if (flipiX) { lx='r'; } else { lx = 'l'; }
            break;
            case 'tr':
                if (flipiY) { ly='b'; } else { ly = 't'; }
                if (flipiX) { lx='l'; } else { lx = 'r'; }
            break;
            case 'bl':
                if (flipiY) { ly='t'; } else { ly = 'b'; }
                if (flipiX) { lx='r'; } else { lx = 'l'; }
            break;
            case 'br':
                if (flipiY) { ly='t'; } else { ly = 'b'; }
                if (flipiX) { lx='l'; } else { lx = 'r'; }
            break;

            default:
                ly=control.substr(0, 1);
                lx=control.substr(1, 1);
            break;
        }
        control=ly+lx;
        switch (control){
            case 'tl':
                SelectedIconImage.src = ctrlImages[1].src;
            break;
            case 'tr':
                if (flipiX && !flipiY) { n='5'; }
                if (!flipiX && flipiY) { n='3'; }
                if (flipiX && flipiY) { n='4'; }
                SelectedIconImage.src = ctrlImages[0].src;
            break;
            case 'mt':

            break;
                case 'bl':
                if (flipiY) { n='2'; }
                SelectedIconImage.src = ctrlImages[3].src;
            break;
            case 'br':
                if (flipiX || flipiY) { n='2'; }
                if (flipiX && flipiY) { n=''; }
                SelectedIconImage.src = ctrlImages[2].src;
            break;
            case 'mb':
            break;
            case 'ml':
            break;
            case 'mr':
            break;
            default:
                ctx[methodName](left, top, sizeX, sizeY);
            break;
        }

        if (control == 'tl' || control == 'tr' || control == 'bl' || control == 'br'
        || control == 'mt' || control == 'mb' || control == 'ml' || control == 'mr'){
            sizeX = 30;
            sizeY = 30;
            ctx.drawImage(SelectedIconImage, left, top, sizeX, sizeY);
        }
        try {
            ctx.drawImage(SelectedIconImage, left, top, sizeX, sizeY);

        } catch (e) {
            if (e.name != "NS_ERROR_NOT_AVAILABLE") {
                throw e;
            }
        }
        }
};//end


var readFile = function(e) {
    inputforupload = e.target;
    readerobj = new FileReader();

    readerobj.onload = function(){
        var imgElement = document.createElement('img');
        imgElement.src = readerobj.result;

        imgElement.onload = function() {
            var imageinstance = new fabric.Image(imgElement, {
                    angle: 0,
                    opacity: 1,
                    cornerSize: 30,
                  
                });
        var cw = $(".canvas-container").width();
        var ch = $(".canvas-container").height();
        if(cw > ch){
            imageinstance.scaleToWidth($(".canvas-container").width() - 100);
            imageinstance.scaleToHeight($(".canvas-container").height() - 100);

        }else{
            imageinstance.scaleToHeight($(".canvas-container").height() - 100);
            imageinstance.scaleToWidth($(".canvas-container").width() - 100);
        }
        imageinstance.setControlsVisibility(HideControls);
        canvas.add(imageinstance);
        canvas.sendToBack(imageinstance);//envia al fondo de cualquier elemento
        canvas.centerObject(imageinstance);
        ObtieneElementos();
        };
    };
    readerobj.readAsDataURL(inputforupload.files[0]);
};

document.getElementById('filereader').addEventListener('change', readFile);

/** Aktionen auf den einzelnen Ecken *
canvas.on('mouse:down',function(e){
if(canvas.getActiveObject()){
    var target = this.findTarget();

    if(target.__corner == 'tr'){
        console.log('delete pressed');
        canvas.remove(canvas.getActiveObject());

    }else if(target.__corner == 'tl'){
        var curAngle = canvas.getActiveObject().get('angle');
        canvas.getActiveObject().set('angle',curAngle+15);
        console.log('rotate pressed');
    }else if(target.__corner == 'bl'){
        console.log('scale pressed');
    }else if(target.__corner == 'br'){
        console.log('copy pressed');
    }
}

});*/
canvas.on({
    'touch:gesture': function() {
        var text = document.createTextNode(' Gesture ');
        info.insertBefore(text, info.firstChild);
    },
    'touch:drag': function() {
        var text = document.createTextNode(' Dragging ');
        info.insertBefore(text, info.firstChild);
    },
    'touch:orientation': function() {
        var text = document.createTextNode(' Orientation ');
        info.insertBefore(text, info.firstChild);
    },
    'touch:shake': function() {
        var text = document.createTextNode(' Shaking ');
        info.insertBefore(text, info.firstChild);
    },
    'touch:longpress': function() {
        var text = document.createTextNode(' Longpress ');
        info.insertBefore(text, info.firstChild);
    }
});
