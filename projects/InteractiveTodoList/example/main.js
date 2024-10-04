// let taskArray = [];
let taskArray = [
  {
    id: 0,
    text: "IT313 Activity",
    completed: false,
  },
  {
    id: 1,
    text: "Watch Anime",
    completed: true,
  },
  {
    id: 2,
    text: "Read Manga",
    completed: false,
  },
];

document.onload = displayList();
let count = taskArray.length;

document.getElementById("addBtn").addEventListener("click", function(){
  let inputTxt = document.getElementById("taskInput").value;
  
  if (inputTxt != "") {
    taskArray[count] = {
      id: count,
      text: inputTxt,
      completed: false,
    };

    displayList();
    count++;
  } else {
    alert("Need to input a task!");
  }
});

function displayList() {
  let list = document.getElementById("taskList");
  let subText = "";

  // text.innerHTML += '<li class="task">' + taskArray[count].text + '<button class="deletebtn" onclick="deleteTask(this)"> Delete </button></li>'; 

  for (let i = 0; i < taskArray.length; i++) {
    subText += '<li class="task">' + taskArray[i].text + '<button class="deletebtn" onclick="deleteTask(this)"> Delete </button></li>';
    list.innerHTML = subText;

    // let taskText = document.createElement('li');
    // taskText.textContent = taskArray[i].text;
    // console.log(taskText);



    console.log(subText);
    console.log(taskArray[i]);
  } 
}

function completeList(){
  if(taskArray[i].completed){

  } else{

  }
}

var list = document.getElementById("taskList");
list.addEventListener(
  "click",
  function (tk) {
    if (tk.target.tagName === "LI") {
      tk.target.classList.toggle("completed");
    }
  },
  false
);



function deleteTask(tsk) {
  tsk.parentElement.remove();
  // displayList();
}
