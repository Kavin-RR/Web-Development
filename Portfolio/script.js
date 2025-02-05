function openTabs(evt,name){
    var i,tabcontents,tablinks;
 
    tabcontents = document.getElementsByClassName("tabcontents");
    for (i = 0;i<tabcontents.length;i++){
        tabcontents[i].style.display = "none";
    }

    tablinks =document.getElementsByClassName("tablinks");
    for (i =0;i<tablinks.length;i++){
        tablinks[i].className = tablinks[i].className.replace("active","");

    }

    document.getElementById(name).style.display="block";
    evt.currentTarget.className += "active";

    document.addEventListener("DOMContentLoaded", function () {
        document.getElementsByClassName("tabcontents")[0].style.display = "block";
        document.getElementsByClassName("tablinks")[0].className += " active";
    });
}