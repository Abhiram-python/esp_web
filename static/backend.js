p_name=document.getElementById("p_name")
p_number=document.getElementById("p_number")
p_age=document.getElementById("p_age")
p_weight=document.getElementById("p_weight")
p_height=document.getElementById("p_height")

d_name=document.getElementById("d_name")
d_number=document.getElementById("d_number")
d_email=document.getElementById("d_email")
d_specialization=document.getElementById("d_specialization")

prob=document.getElementById("problem")

function p_signup(){
    window.location.href="https://flask-app-hyfy.onrender.com/p_signup"
}
function d_signup(){
    window.location.href="https://flask-app-hyfy.onrender.com/d_signup"
}
async function send_p_data(){
    await fetch("https://flask-app-hyfy.onrender.com/send_p_data",{
        method:"POST",
        headers: { 'Content-Type': 'application/json' },
        body:JSON.stringify({name:p_name.value,number:p_number.value,age:p_age.value,weight:p_weight.value,height:p_height.value})
    }).then(data=>window.location.href="https://flask-app-hyfy.onrender.com/p_lobby")
}

async function send_d_data(){
    await fetch("https://flask-app-hyfy.onrender.com/send_d_data",{
        method:"POST",
        headers: { 'Content-Type': 'application/json' },
        body:JSON.stringify({name:d_name.value,number:d_number.value,email:d_email.value,specialization:d_specialization.value})
    })
}

async function enter_problem(){
    await fetch("https://flask-app-hyfy.onrender.com/send_prob",{
        method:"POST",
        headers: { 'Content-Type': 'application/json' },
        body:JSON.stringify({problem:prob.value})
    })
}