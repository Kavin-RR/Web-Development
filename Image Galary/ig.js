var mimg = document.getElementById("mainimg");
var simg = document.querySelectorAll("#simg"); // Assuming you're selecting images within #simg

for (var i = 0; i < simg.length; i++) {
    simg[i].addEventListener("click", function () {
        mimg.src = this.src; // Corrected ming to mimg
    });
}
