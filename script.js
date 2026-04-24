function convert() {
    let value = document.getElementById("value").value;
    let unit = document.getElementById("unit").value;

    if (value === "" || value<= 0) {
        document.getElementById("result").innerText = "Enter A Valid Number: ";
        return;
    }

    value = Number(value);

    let kb = 0;
    let mb = 0;
    let gb = 0;

    if (unit === "KB") {
        kb = value;
        mb = value / 1024;
        gb = value / (1024 * 1024);
    }

    if (unit === "MB") {
        kb = value * 1024;
        mb = value;
        gb = value / 1024;
    }

    if (unit === "GB") {
        kb = value * 1024 * 1024;
        mb = value * 1024;
        gb = value;
    }

    if (unit == "TB") {
        kb = value * 1024 * 1024 * 1024;
        mb = value * 1024 * 1024;
        gb = value * 1024;
    }

    document.getElementById("result").innerText =
        "KB: " + kb.toFixed(2) + " | MB: " + mb.toFixed(2) + " | GB: " + gb.toFixed(2);
}

function checkFiles() {
    let files = document.getElementById("fileInput").files;

    if (files.length === 0) {
        document.getElementById("result").innerText = "no file selected";
        return;
    }

    let total = 0;

    for (let i = 0; i < files.length; i++) {
        total += files[i].size;
    }
    
    let kb = total / 1024;
    let mb = total / (1024 * 1024);
    let gb = total / (1024 * 1024 * 1024);

    document.getElementById("result").innerText =
        "Total: " + 
        kb.toFixed(2) + "KB |" + 
        mb.toFixed(2) + " MB |" +
        gb.toFixed(2) + " GB ";
}

function resetAll() {
    document.getElementById("value").value = "";
    document.getElementById("fileInput").value = "";
    document.getElementById("result").innerText = "Your Result Will Appear Here: ";
}