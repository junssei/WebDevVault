// let taskArray = [];
let taskArray = [
  { id: 0, text: "IT313 Activity", completed: false },
  { id: 1, text: "Watch Anime", completed: true },
  { id: 2, text: "Read Manga", completed: false },
];

let count = taskArray.length;
let list = document.getElementById("taskList");
let subText = "";
for (let  i = 0; i < taskArray.length; i++) {
  subText += '<li class="task">' + taskArray[i].text + '<button class="deletebtn"> Delete </button></li>';
  list.innerHTML = subText;
  console.log(taskArray[i]);
}

deleteList();
completeList();

//Add Task Button Event Listener
document.getElementById("addBtn").addEventListener("click", function () {
  let inputTxt = document.getElementById("taskInput").value;
  
  if (inputTxt != "") {
    taskArray[count] = { id: count, text: inputTxt, completed: false};
    console.log(taskArray[count]);
    displayList();
    count++;
  } else {
    alert("Need to input a task!");
  }
});

// Display list
function displayList() {
  list.innerHTML +=
    '<li class="task">' +
    taskArray[count].text +
    '<button class="deletebtn"> Delete </button></li>';

  deleteList();
  completeList();
}

// Toggle Complete Task
function completeList() {
  let task = document.getElementsByClassName("task");
  for (let i = 0; i < task.length; i++) {
    if (taskArray[i].completed) {
      task[i].classList.add("completed");
    } else {
      task[i].classList.remove("completed");
    }

    // Event Listener
    task[i].addEventListener("click", function () {
      if (taskArray[i].completed == true) {
        taskArray[i].completed = false;
        task[i].classList.remove("completed");
        console.log(i + ": " + taskArray[i].text + ": " + taskArray[i].completed); //checking
      } else {
        taskArray[i].completed = true;
        task[i].classList.add("completed");
        console.log(i + ": " + taskArray[i].text + ": " + taskArray[i].completed); //checking
      }
    });
  }
}

// Hide/Delete Task
function deleteList() {
  let delbtn = document.getElementsByClassName("deletebtn");
  for (let i = 0; i < delbtn.length; i++) {
    delbtn[i].addEventListener("click", function () {
      console.log("Hide/Delete " + "ID: " + taskArray[i].id + " | " + taskArray[i].text);
      delbtn[i].parentElement.style.display = "none";
    });
  }
}
