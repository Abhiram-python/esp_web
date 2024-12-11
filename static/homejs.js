min=document.getElementById("min")

async function send_min() {
    await fetch("https://esp-web-fjlb.onrender.com/esp_timer",{
        method:"POST",
        headers: { 'Content-Type': 'application/json' },
        body:JSON.stringify({minutes:min.value})
    })
}

async function send_stop() {
    await fetch("https://esp-web-fjlb.onrender.com/esp_stop",{
        method:"POST",
        headers: { 'Content-Type': 'application/json' },
        body:JSON.stringify({mess:"0"})
    })
}