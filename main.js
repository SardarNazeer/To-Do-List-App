
// variable declaration 

// it is for input box 
const inputBox = document.getElementById('input-box');

// it is for ul li 
const listContainer = document.getElementById('list-container');

// it is for on clicking the add button 

function addTask() {

    // if input box will be empty and you click on add button it will give alert 

    if (inputBox.value === '') {
        alert("You must write something");
    } else {

        // else you write something and click on add button it will display your text on li 

        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        // for adding the cross icon 

        let span = document.createElement("span");
        span.innerHTML = '\u00d7';

        // display this span 

        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

// when we will click on container where we store our task 

listContainer.addEventListener("click", function (e) {

    // first it will check where we click if we click on li it will add checked class name 

    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();

    } else if (e.target.tagName === "SPAN") {

        // if we click on span means on cross icon it will delete our task 

        e.target.parentElement.remove();
        saveData();

    }
}, false);


// for reloading the web page data not be hiden 

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

// for showing the data 

function showData(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showData(); 