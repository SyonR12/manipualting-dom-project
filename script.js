let pButton = document.querySelector("#p-button");
let imgButton = document.querySelector("#img-button");
let pDiv = document.querySelector("#p-div");
let imgDiv = document.querySelector("#img-div");

pButton.onclick = function() {
    imgDiv.innerHTML = "";
    var p = document.createElement("p");
    p.style.border = "3px solid black";
    p.style.backgroundColor = "black";
    p.style.color = "white";
    p.textContent = "This is a paragraph";
    pDiv.append(p);
}

imgButton.onclick = function() {
    pDiv.innerHTML = "";
    var img = document.createElement("img");
    img.src = "logo.png"
    img.style.border = "3px solid black";
    img.width = "50px";
    img.height = "50px";
    imgDiv.append(img);
}