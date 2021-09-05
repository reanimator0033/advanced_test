// 'use strict';

// var   stanze = [
//     { "id": 1, "name": "Cucina", "north": 0, "south": 0, "est": 0, "west": 3, "objects": [{"name": "Coltello"}] },
//     { "id": 2, "name": "Sala da pranzo", "north": 4, "south": 3, "est": 0, "west": 0, "objects": [] },
//     { "id": 3, "name": "Bagno", "north": 2, "south": 0, "est": 1, "west": 0, "objects": [] },
//     { "id": 4, "name": "Entrata", "north": 0, "south": 2, "est": 0, "west": 0, "objects": [{"name": "Chiavi"}] }
//    ];

// let currentRoom = 3;
// let previousRoom = 100;
// let out = [];

// out.push(stanze[currentRoom-1].name)

// while (! out.find(currentValue => currentValue == "Chiavi") || ! out.find(currentValue => currentValue == "Coltello")) {
//     if (stanze[currentRoom-1].objects[0] != undefined) {
//         out.push(stanze[currentRoom-1].objects[0].name);
//         previousRoom = currentRoom;
//         if(out.find(currentValue => currentValue == "Coltello") &&  out.find(currentValue => currentValue == "Chiavi")){
//             break;
//         }
//     }
//     if (stanze[currentRoom-1].north != 0 && stanze[currentRoom-1].north != previousRoom ){
//         previousRoom = currentRoom;
//         currentRoom = stanze[currentRoom-1].north;  
//         out.push(stanze[currentRoom-1].name);
//         if(out.find(currentValue => currentValue == "Coltello") &&  out.find(currentValue => currentValue == "Chiavi")){
//             break;
//         }
//     }
//     else if (stanze[currentRoom-1].south != 0 && stanze[currentRoom-1].south != previousRoom ){
//         previousRoom = currentRoom;
//         currentRoom = stanze[currentRoom-1].south;     
//         out.push(stanze[currentRoom-1].name);
//         if(out.find(currentValue => currentValue == "Coltello") &&  out.find(currentValue => currentValue == "Chiavi")){
//             break;
//         }
//     }
//     else if (stanze[currentRoom-1].est != 0 && stanze[currentRoom-1].est != previousRoom ){
//         previousRoom = currentRoom;
//         currentRoom = stanze[currentRoom-1].est;
//         out.push(stanze[currentRoom-1].name);
//         if(out.find(currentValue => currentValue == "Coltello") &&  out.find(currentValue => currentValue == "Chiavi")){
//             break;
//         }
//     }
//     else if (stanze[currentRoom-1].west != 0 && stanze[currentRoom-1].west != previousRoom ){
//         previousRoom = currentRoom;
//         currentRoom = stanze[currentRoom-1].west;
//         out.push(stanze[currentRoom-1].name);
//         if(out.find(currentValue => currentValue == "Coltello") &&  out.find(currentValue => currentValue == "Chiavi")){
//             break;
//         }
//     }
//         else {
//             currentRoom = previousRoom;
//         }

// }
// console.log(out);
