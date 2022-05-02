// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page



import { navbar } from "../components/navbar.js";
let nav=document.getElementById("navbar");
nav.innerHTML=navbar();




let searched=localStorage.getItem("searched");
console.log(searched)

import { searchNews,appending } from "../components/fetch.js";

searchNews(searched).then((data)=> {
    console.log(data)
    let container=document.getElementById("results");

    document.getElementById("results").innerHTML="";
    appending(data.articles,container);

})


document.getElementById("search_input").addEventListener("keydown",setquery)

function setquery(ev)
{
    let query=document.getElementById("search_input").value;

    if(ev.key=="Enter")
    {
        // localStorage.setItem("searched",query)
        localStorage.setItem("searched",query)
        // console.log(query)

        let x=localStorage.getItem("searched");
        searchNews(x).then((data)=> {
            let container=document.getElementById("results");

            document.getElementById("results").innerHTML="";
            appending(data.articles,container);
        })
    }
}