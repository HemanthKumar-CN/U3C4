// Ude Import export (MANDATORY)


import { navbar } from "../components/navbar.js";
let nav=document.getElementById("navbar");
nav.innerHTML=navbar();



let newsDet=JSON.parse(localStorage.getItem("news"));
console.log(newsDet)


import { appending } from "../components/fetch.js";

let container=document.getElementById("detailed_news");

document.getElementById("detailed_news").innerHTML="";

let img=document.createElement("img");
img.src=newsDet.urlToImage;

let title=document.createElement("h3");
title.innerText=newsDet.title;

let content=document.createElement("p");
content.innerText=newsDet.description;

container.append(img,title,content);




let search=(ev)=> {
    let query=document.getElementById("search_input").value;

    if(ev.key=="Enter")
    {

        
        localStorage.setItem("searched",query)

        window.location.href="../search.html";
        
    }
}



document.getElementById("search_input").addEventListener("keydown",search)