let sN=async(country) =>
{
    try {
        let res=await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${country}`);
        let data=await res.json();
        return data;        
    } catch (error) {
        console.log(error)
    }
}


let searchNews=async (query)=>
{
    try {
        let res=await fetch(`https://masai-mock-api.herokuapp.com/news?q=${query}`);
        let data=await res.json();
        return data;
    } catch (err) {
        console.log(err)
    }

}







let appending=(data,container)=>
{
    data.forEach(element => {
        let div=document.createElement("div")
        div.setAttribute("class","news")
        div.addEventListener("click",function () {
            getitem(element)
        })

        let divImg=document.createElement("div")
        let img=document.createElement("img");
        img.src=element.urlToImage;

        divImg.append(img)

      let itemsDiv= document.createElement("div")

        let title=document.createElement("h3");
        title.innerText=element.title;

        let content=document.createElement("p");
        content.innerText=element.description;

        itemsDiv.append(title,content)

        div.append(divImg,itemsDiv);

        container.append(div)
        
    });
}

function getitem(element)
{
    console.log(element)

    localStorage.setItem("news",JSON.stringify(element))
    window.location.href="../news.html";
}



export {sN,searchNews,appending};