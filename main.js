//import * as fs from 'fs';
import { GetData } from "./node_modules/youtube-search-api/dist/index.js";

let vidTitle = document.getElementById("text1");
let searchBar = document.getElementById("search");
let searchQuery = searchBar.innerText;


function consoleOutput2(value) {
  vidTitle.innerText = value;
}

//let func1 = async () =>  await youtubesearchapi.GetListByKeyword(searchQuery);
async function func1() {
    await GetData(searchQuery);
    consoleOutput2(searchQuery);
}
searchBar.addEventListener("change", func1);
consoleOutput2(searchQuery);

function consoleOutput(value) {
  value = JSON.stringify(value);
  fs.writeFile("test.txt", value, function(err) {
    if (err) {
        console.log(err);
    }
  value = JSON.parse(value);
  console.log("pizza time");
  vidTitle.innerText = value.items[0].id;
});
}
