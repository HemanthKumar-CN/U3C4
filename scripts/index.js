// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page



import { navbar } from "../components/navbar.js";
let nav=document.getElementById("navbar");
nav.innerHTML=navbar();


















import { sN,searchNews,appending } from "../components/fetch.js";

let def="in";

sN(def).then((data)=> {
    let container=document.getElementById("results");
        document.getElementById("results").innerHTML="";
        appending(data.articles,container)
})



let country=document.getElementById("sidebar").children;
console.log(country)

for(let i of country)
{
    i.addEventListener("click",cSearch)
}

function cSearch()
{
    console.log(this.id)

    sN(this.id).then((data)=> {
        console.log(data.articles)
        let container=document.getElementById("results");
        document.getElementById("results").innerHTML="";
        appending(data.articles,container)
        
    })
}



// let searchNews=async (ev)=>
// {
//     let query=document.getElementById("search_input").value;

//     if(ev.key=="Enter")
//     {
//         try
//         {
//         let res= await fetch(`https://masai-mock-api.herokuapp.com/news?q=${query}`);
//         let data= await res.json();
//         console.log(data)
//         return data;
//         }
//         catch(err)
//         {
//             console.log(err)
//         }

//         window.location.href="../search.html";
        
//     }

//     // window.location.href="../search.html";
    
// }

let search=(ev)=> {
    let query=document.getElementById("search_input").value;

    if(ev.key=="Enter")
    {

        
        localStorage.setItem("searched",query)

        window.location.href="../search.html";
        
    }
}



document.getElementById("search_input").addEventListener("keydown",search)

