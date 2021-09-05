


let muUrl = "js/stanze.json";
let xhr = new XMLHttpRequest();
const btn = document.querySelector(".button");
const btnJson = document.querySelector(".button-json");
const json = document.querySelector(".json");

const getDataPromise = () => new Promise((resolve, reject) => {
    xhr.open('GET', muUrl);
    xhr.send();
    xhr.onload = () => {
        resolve (JSON.parse(xhr.response));
        var text = xhr.responseText;
        json.innerHTML = text;
    }  
});

btnJson.addEventListener('click', () => {
    getDataPromise();
});

btn.addEventListener('click', () => {
   getDataPromise ().then((stanze) => {
    let currentRoom = 3;
    let previousRoom = null;
    let out = [];

    out.push(stanze.stanze[currentRoom-1].name)
    appendData(stanze.stanze[currentRoom-1]);
    
    while (! out.find(currentValue => currentValue == "Chiavi") || ! out.find(currentValue => currentValue == "Coltello")) {
        if (stanze.stanze[currentRoom-1].objects[0] != undefined) {
            out.push(stanze.stanze[currentRoom-1].objects[0].name);
            appendDataWithObject(stanze.stanze[currentRoom-1]);
            previousRoom = currentRoom;
            if(out.find(currentValue => currentValue == "Coltello") &&  out.find(currentValue => currentValue == "Chiavi")){
                break;
            }
        }
        if (stanze.stanze[currentRoom-1].north != 0 && stanze.stanze[currentRoom-1].north != previousRoom ){
            previousRoom = currentRoom;
            currentRoom = stanze.stanze[currentRoom-1].north;  
            out.push(stanze.stanze[currentRoom-1].name);
            if (stanze.stanze[currentRoom-1].objects[0] == undefined){
            appendData(stanze.stanze[currentRoom-1]);
            }
            if(out.find(currentValue => currentValue == "Coltello") &&  out.find(currentValue => currentValue == "Chiavi")){
                break;
            }
        }
        else if (stanze.stanze[currentRoom-1].south != 0 && stanze.stanze[currentRoom-1].south != previousRoom ){
            previousRoom = currentRoom;
            currentRoom = stanze.stanze[currentRoom-1].south;     
            out.push(stanze.stanze[currentRoom-1].name);
            if (stanze.stanze[currentRoom-1].objects[0] == undefined){
                appendData(stanze.stanze[currentRoom-1]);
                }
            if(out.find(currentValue => currentValue == "Coltello") &&  out.find(currentValue => currentValue == "Chiavi")){
                break;
            }
        }
        else if (stanze.stanze[currentRoom-1].est != 0 && stanze.stanze[currentRoom-1].est != previousRoom ){
            previousRoom = currentRoom;
            currentRoom = stanze.stanze[currentRoom-1].est;
            out.push(stanze.stanze[currentRoom-1].name);
            if (stanze.stanze[currentRoom-1].objects[0] == undefined){
                appendData(stanze.stanze[currentRoom-1]);
                }
            if(out.find(currentValue => currentValue == "Coltello") &&  out.find(currentValue => currentValue == "Chiavi")){
                break;
            }
        }
        else if (stanze.stanze[currentRoom-1].west != 0 && stanze.stanze[currentRoom-1].west != previousRoom ){
            previousRoom = currentRoom;
            currentRoom = stanze.stanze[currentRoom-1].west;
            out.push(stanze.stanze[currentRoom-1].name);
            if (stanze.stanze[currentRoom-1].objects[0] == undefined){
                appendData(stanze.stanze[currentRoom-1]);
                }
            if(out.find(currentValue => currentValue == "Coltello") &&  out.find(currentValue => currentValue == "Chiavi")){
                break;
            }
        }
        else {
            currentRoom = previousRoom;
        }

    }
});
}, { once: true });

const appendDataWithObject = (data) => {
    const tableBody = document.querySelector("#table-body");
    const tr = document.createElement("tr");
    const id = document.createElement("td");
    id.innerText = data.id;
    tr.appendChild(id);  
    const name = document.createElement("td");
    name.innerText = data.name;
    tr.appendChild(name);  
    const obj = document.createElement("td");
    obj.innerText = data.objects[0].name;
    tr.appendChild(obj);
    tableBody.appendChild(tr);
};

const appendData = (data) => {
    const tableBody = document.querySelector("#table-body");
    const tr = document.createElement("tr");
    const id = document.createElement("td");
    id.innerText = data.id;
    tr.appendChild(id);  
    const name = document.createElement("td");
    name.innerText = data.name;
    tr.appendChild(name);  
    tableBody.appendChild(tr);
};



///////////////////////////////

