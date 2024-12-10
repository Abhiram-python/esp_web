nam=document.getElementById("name")
num=document.getElementById("number")
prob=document.getElementById("texta")

intt=document.getElementById("int")

async function sr() {
    await fetch("https://flask-app-hyfy.onrender.com/s",{
        method:"POST",
        headers: { 'Content-Type': 'application/json' },
        body:JSON.stringify({name:nam.value,number:num.value,problem:prob.value})
    })

    await fetch("https://flask-app-hyfy.onrender.com/r").then(data=>data.json())
    .then(data=>{
        intt.innerHTML=data.name
    })
}