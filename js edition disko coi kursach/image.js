class ImgEditor {
    constructor() {
    }

    drawImage(imageObj, idcanvas) {
        var canvas = document.getElementById(idcanvas);
        var imageWidth = imageObj.width;
        var imageHeight = imageObj.height;
        canvas.setAttribute("width", imageWidth);
        canvas.setAttribute("height", imageHeight);
        this.context = canvas.getContext('2d');

        this.countallpixels = imageWidth*imageHeight;

        this.context.drawImage(imageObj, 0, 0);
        this.startImageData = this.context.getImageData(0, 0, imageWidth, imageHeight);
        this.ImageData = this.context.getImageData(0, 0, imageWidth, imageHeight);
        var data = this.ImageData.data;

        this.sumred = 0;
        this.sumgreen = 0;
        this.sumblue = 0;

        // iterate over all pixels
        for(var i = 0, n = data.length; i < n; i += 4) {
            this.sumred += data[i];
            this.sumgreen += data[i + 1];
            this.sumblue += data[i + 2];
            var alpha = data[i + 3];
        }
        this.startmidred = this.sumred/this.countallpixels;
        this.startmidgreen = this.sumgreen/this.countallpixels;
        this.startmidblue = this.sumblue/this.countallpixels;
        return [this.startmidred, this.startmidgreen, this.startmidblue];
    }
    updatered(red = 0){
        var startdata = this.startImageData.data;
        var data = this.ImageData.data;

        this.sumred = 0;
        // iterate over all pixels
        for(var i = 0, n = data.length; i < n; i += 4) {
            if(red>img.startmidred)
                data[i] = startdata[i] + (red-img.startmidred)*(255-startdata[i])/(255-img.startmidred)
            else
                data[i] = startdata[i] - (img.startmidred-red)*startdata[i]/img.startmidred

            this.sumred += data[i];
        }
        var currentmidred = this.sumred/this.countallpixels;
        this.context.putImageData(this.ImageData, 0, 0);
        return currentmidred;
    }
    updategreen(green = 0){
        var startdata = this.startImageData.data;
        var data = this.ImageData.data;

        this.sumgreen = 0;
        // iterate over all pixels
        for(var i = 0, n = data.length; i < n; i += 4) {
            if(green>img.startmidgreen)
                data[i + 1] = startdata[i + 1] + (green-img.startmidgreen)*(255-startdata[i + 1])/(255-img.startmidgreen)
            else
                data[i + 1] = startdata[i + 1] - (img.startmidgreen-green)*startdata[i + 1]/img.startmidgreen
            this.sumgreen += data[i + 1];
        }
        var currentmidgreen = this.sumgreen/this.countallpixels;
        this.context.putImageData(this.ImageData, 0, 0);
        return currentmidgreen;
    }
    updateblue(blue = 0){
        var startdata = this.startImageData.data;
        var data = this.ImageData.data;

        this.sumblue = 0;
        // iterate over all pixels
        for(var i = 0, n = data.length; i < n; i += 4) {
            if(blue>img.startmidblue)
                data[i + 2] = startdata[i + 2] + (blue-img.startmidblue)*(255-startdata[i + 2])/(255-img.startmidblue)
            else
                data[i + 2] = startdata[i + 2] - (img.startmidblue-blue)*startdata[i + 2]/img.startmidblue
            this.sumblue += data[i + 2];
        }
        var currentmidblue = this.sumblue/this.countallpixels;
        this.context.putImageData(this.ImageData, 0, 0);
        return currentmidblue;
    }
}

img = new ImgEditor();
imageObj = new Image();
imageObj.onload = function() {
    midcolors = img.drawImage(this, 'myCanvas');

    $(".red span").text(midcolors[0]);
    $(".green span").text(midcolors[1]);
    $(".blue span").text(midcolors[2]);

    $("#redscroll").val(midcolors[0]);
    $("#greenscroll").val(midcolors[1]);
    $("#bluescroll").val(midcolors[2]);
};

$( document ).ready(function() {
    $(".imagefile").change(function(){
        imageObj.src = URL.createObjectURL($(this)[0].files[0]);
      });
    $('#redscroll').on('input', function () { 
        newmidred = $(this).val();
        $(".red span").text(img.updatered(newmidred));
    });
    $('#greenscroll').on('input', function () { 
        newmidgreen = $(this).val();
        $(".green span").text(img.updategreen(newmidgreen));
    });
    $('#bluescroll').on('input', function () { 
        newmidblue = $(this).val();
        $(".blue span").text(img.updateblue(newmidblue));
    });
});