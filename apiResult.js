let name1 , email1, locatoin1, Followers1, Following1;

function addelement1(data)
{
    let div =document.createElement("div")
    // div.style.border="2px solid green"
    div.style.margin="10px"
    div.style.display="flex"
    div.style.flexDirection="row"
    div.style.justifyContent="space-between"
    div.id="add1"
    div.className="add"

    let h3 = document.createElement("h3")
    h3.style.color="white"
    // h3.style.border="2px solid red"
    div.appendChild(h3)
    h3.appendChild(document.createTextNode(data))
    let B = document.querySelector("#data")
    B.appendChild(div)

}
function addelement2(data)
{
    let div =document.createElement("div")
    // div.style.border="2px solid green"
    div.style.margin="10px"
    div.style.display="flex"
    div.style.flexDirection="row"
    div.style.justifyContent="space-between"
    div.id="add2"
    div.className="add"

    let h3 = document.createElement("h3")
    h3.style.color="white"
    // h3.style.border="2px solid red"
    div.appendChild(h3)
    h3.appendChild(document.createTextNode(data))
    let B = document.querySelector("#data")
    B.appendChild(div)

}
function addelement3(data)
{
    let div =document.createElement("div")
    // div.style.border="2px solid green"
    div.style.margin="10px"
    div.style.display="flex"
    div.style.flexDirection="row"
    div.style.justifyContent="space-between"
    div.id="add3"
    div.className="add"

    let h3 = document.createElement("h3")
    h3.style.color="white"
    // h3.style.border="2px solid red"
    div.appendChild(h3)
    h3.appendChild(document.createTextNode(data))
    let B = document.querySelector("#data")
    B.appendChild(div)

}
function addelement4(data)
{
    let div =document.createElement("div")
    // div.style.border="2px solid green"
    div.style.margin="10px"
    div.style.display="flex"
    div.style.flexDirection="row"
    div.style.justifyContent="space-between"
    div.id="add4"
    div.className="add"

    let h3 = document.createElement("h3")
    h3.style.color="white"
    // h3.style.border="2px solid red"
    div.appendChild(h3)
    h3.appendChild(document.createTextNode(data))
    let B = document.querySelector("#data")
    B.appendChild(div)

}
function addelement5(data)
{
    let div =document.createElement("div")
    // div.style.border="2px solid green"
    div.style.margin="10px"
    div.style.display="flex"
    div.style.flexDirection="row"
    div.style.justifyContent="space-between"
    div.id="add5"
    div.className="add"

    let h3 = document.createElement("h3")
    h3.style.color="white"
    // h3.style.border="2px solid red"
    div.appendChild(h3)
    h3.appendChild(document.createTextNode(data))
    let B = document.querySelector("#data")
    B.appendChild(div)

}
addelement1("Name   :")
addelement2("Email  :")
addelement3("Location   :")
addelement4("Followers  :")
addelement5("Following  :")


    fetch("https://api.github.com/users/rohitnautiyal958").then((responce)=>{

    return responce.json()
}).then((data)=>{


    name1 =data.name
     email1= data.email
     locatoin1=data.location
    Followers1=data.followers
    Following1=data.following
    // console.log(name1)
    // console.log(email1)
    console.log(locatoin1)
    // console.log(Followers1)
    // console.log(Following1)
    

  


let flage=0;
let btn=document.querySelector("#btn")
btn.addEventListener('click',()=>{

    if(flage===0){
    value1(name1)
    value2(email1)
    value3(locatoin1)
    value4(Followers1)
    value5(Following1)
    flage=1
    btn.innerHTML='Hide Details'
    }
    else{
        flage=0
    }

    
  
})
    


}).catch((errror)=>{
    console.log("Something went worng")
}).finally(()=>{
    console.log("All Done properly")
})






function value1(val){
    let h3 = document.createElement("h3")
    // h3.style.border = "2px solid red"
    h3.style.color="white"
    document.querySelector("#add1").appendChild(h3)
    h3.appendChild(document.createTextNode(`${val}`))
   
}
function value2(val){
    let h3 = document.createElement("h3")
    // h3.style.border = "2px solid red"
    h3.style.color="white"
    document.querySelector("#add2").appendChild(h3)
    h3.appendChild(document.createTextNode(`${val}`))
   
}
function value3(val){
    let h3 = document.createElement("h3")
    // h3.style.border = "2px solid red"
    h3.style.color="white"
    document.querySelector("#add3").appendChild(h3)
    h3.appendChild(document.createTextNode(`${val}`))
   
}
function value4(val){
    let h3 = document.createElement("h3")
    // h3.style.border = "2px solid red"
    h3.style.color="white"
    document.querySelector("#add4").appendChild(h3)
    h3.appendChild(document.createTextNode(`${val}`))
   
}
function value5(val){
    let h3 = document.createElement("h3")
    // h3.style.border = "2px solid red"
    h3.style.color="white"
    document.querySelector("#add5").appendChild(h3)
    h3.appendChild(document.createTextNode(`${val}`))
   
}



