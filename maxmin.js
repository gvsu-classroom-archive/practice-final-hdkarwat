function submit() {
    var maxMixList = document.getElementsByClassName("input")
    var min = parseInt(list[0])
    var max = parseInt(list[0])
    var total = 0
    var missing = 0

    for (var i = 0; i < maxMinList.length; i++) {

        if(list[i].value !="") {
        total = total + parseInt(list[i].value)
        }else{ 
            missing++;
        }
        if(min < pasrseInt(list[i].value))
            min = list[i].value; 
        if(max < parseInt(list[i].value))
            max = list[i].value; 
        
    }

    document.getElementById("max").innerHTML = max; 
    document.getElementById("min").innerHTML = min; 
    document.getElementById("average").innerHTML = total/list.length; 
}


function more() {
    for(var i = 0; i < 10; i++) {
        document.getElementsByClassName('input-list').appendChild(docuemnt.createElement('input'))
    }
}