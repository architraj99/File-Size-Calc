function convert() {
    let value = document.getElementById("value").value;
    let unit = document.getElementById("unit").value;

    if (value == "") {
        document.getElementById("result").innerText = "enter value first";
        return;
    }

    value = Number(value);

    let kb = 0;
    let mb = 0;
    let gb = 0;

    if (unit == "KB") {
        kb = value;
        mb = value / 1024;
        gb = value / (1024 * 1024);
    }

    if (unit == "MB") {
        kb = value * 1024;
        mb = value;
        gb = value / 1024;
    }

    if (unit == "GB") {
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
        "KB: " + kb + " | MB: " + mb + " | GB: " + gb;
}

function checkFiles() {
    let files = document.getElementById("fileInput").files;

    if (files.length == 0) {
        document.getElementById("result").innerText = "no file selected";
        return;
    }

    let total = 0;

    for (let i = 0; i < files.length; i++) {
        total += files[i].size;
    }

    let mb = total / (1024 * 1024);

    document.getElementById("result").innerText =
        "Total size: " + mb + " MB";
}