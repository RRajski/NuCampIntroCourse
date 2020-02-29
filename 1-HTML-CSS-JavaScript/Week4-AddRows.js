// function insert_list(){
//     var x=document.getElementById('sampleTable').insert_list(0);
//     var y = x.insertCell(0);
//     var z = x.insertCell(1);
//     y.innerHTML="New Cell1";
//     z.innerHTML="New Cell2";

// }

function addItem(){
    var ol = document.getElementById("dynamic-list");
    var candidate = document.getElementById("candidate");
    var li = document.createElement("li");
    li.setAttribute('id',candidate.value);
    li.appendChild(document.createTextNode(candidate.value));
    ol.appendChild(li);
}






