function decorate() {
    //making list of all elements in the html page 
    var Allup = document.getElementsByClassName("allcaps")
    var up1 = document.getElementsByClassName("upcase")
        for(var i=0; i< Allup.length; i++) {
            Allup[i].innerHTML = Allup[i].toUpperCase(); 
        }

        for(var i=0; i< up1.length; i++){ 
            up1[i].innerHTML = up1[i].innerHTML.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();}); 
            
        }
}