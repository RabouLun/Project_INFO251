// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function openPage(){
    var x =document.getElementById("search").value;
    if(x === "siem reap"){
        window.open("index1.html","_blank")
    }
    else if(x==="kompong som"|| x==="Sihanoukvile" || x === "sihanoukvile"){
        window.open("index3.html","_blank")
    }
    else if(x==="phnom penh"){
        window.open("index2.html","_blank")
    }
    else{
        window.alert("not found")
    }
}

function showClick(){
    var elms = document.getElementsByClassName('collapse');
    Array.from(elms).forEach((x) => {
    if (x.style.display === "none") {
     x.style.display = "block";
    } else {
        x.style.display = "none";
    }
})
}