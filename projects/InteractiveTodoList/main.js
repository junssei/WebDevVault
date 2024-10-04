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

let count = taskArray.length;
document.onload = displayList();

document.getElementById("addBtn").addEventListener("click", function () {
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
    subText +=
      '<li class="task">' +
      taskArray[i].text +
      '<button class="deletebtn" onclick="deleteTask(this)"> Delete </button></li>';
    list.innerHTML = subText;
    console.log(taskArray[i]);
  }
}

let task = document.getElementsByClassName("task");
for (let i = 0; i < task.length; i++) {
  task[i].addEventListener("click", function () {
    if (taskArray[i].completed) {
      taskArray[i].completed = false;
      console.log(taskArray[i].text + ": " + taskArray[i].completed);
      task[i].classList.remove("completed");
    } else {
      taskArray[i].completed = true;
      console.log(taskArray[i].text + ": " + taskArray[i].completed);
      task[i].classList.add("completed");
    }
  });
}

function deleteTask(tsk) {
  tsk.parentElement.remove();
}
