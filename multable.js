function table(rows = 10, cols = 10) {
    let table = "<table>";
    for (let i = 1; i <= rows; i++) {
        table += "<tr>";
        for (let j = 1; j <= cols; j++) {
            table += "<td>" + i * j + "</td>";
        }
        table += "</tr>";
    }
    table += "</table>";
    document.getElementById("table-container").innerHTML = table;
}
table();

function createTable() {
    let rows = document.getElementById("rows").value;
    let cols = document.getElementById("cols").value;

    let table = "<table>";
    for (let i = 1; i <= rows; i++) {
        table += "<tr>";
        for (let j = 1; j <= cols; j++) {
            table += "<td>" + i * j + "</td>";
        }
        table += "</tr>";
    }
    table += "</table>";
    document.getElementById("table-container").innerHTML = table;
}

document.getElementById("draw-button").addEventListener("click", createTable);






