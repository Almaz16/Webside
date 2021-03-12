let tabledata = document.getElementById('tabledata')

fetch("http://localhost:7071/api/GetFromCosmos")
.then(res => res.json())
.then(data => {
    for(let row of data) {
        tabledata.innerHTML += `<tr><td>${row.deviceId}</td><td>${row.name}</td><td>${row.school}</td><td>${row.temperature}</td><td>${row.humidity}</td><td>${row.epochTime}</td></tr>` 

    }
 })

setInterval(() => {
    tabledata.innerHTML = "";

    fetch("http://localhost:7071/api/GetFromCosmos")
    .then(res => res.json())
    .then(data => {
        for(let row of data) {
            tabledata.innerHTML += `<tr><td>${row.deviceId}</td><td>${row.name}</td><td>${row.school}</td><td>${row.temperature}</td><td>${row.humidity}</td><td>${row.epochTime}</td></tr>`
        }
    })   
}, 60000);

