min=document.getElementById("min")

async function send_min() {
    await fetch("https://esp-web-fjlb.onrender.com/esp_timer",{
        method:"POST",
        headers: { 'Content-Type': 'application/json' },
        body:JSON.stringify({minutes:min.value})
    })
}