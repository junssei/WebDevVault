let taskArray = [
  {
    id: 0,
    text: "IT313 Activity",
    completed: false,
  },
  {
    id: 1,
    text: "Watch Anime",
    completed: false,
  },
];

let count = taskArray.length;
console.log(count);
displayList();

document.getElementById("addBtn").addEventListener("click", addList);

function addList() {
  let taskTxt = document.getElementById("taskInput").value;

  if (taskTxt != "") {
    // console.log(taskTxt);
    taskArray[count] = {
      id: count,
      text: taskTxt,
      completed: false,
    };

    // text.innerHTML += '<li id="task'+ taskArray[count].id +'">' + taskArray[count].text + '<button class="deletebtn"> Delete </button></li>';

    // console.log("al(): " + count);
    displayList();
    count++;
  } else {
    alert("Need to input a task!");
  }
}

function displayList() {
  let text = document.getElementById("taskList");
  let subText = "";
  for (let i = 0; i < taskArray.length; i++) {
    subText +=
      '<li id="task' +
      taskArray[i].id +
      '">' +
      taskArray[i].text +
      '<button class="deletebtn"> Delete </button></li>';
    text.innerHTML = subText;

    // console.log(subText);
    console.log(taskArray[i]);
  }

  // console.log("ds(): " + count);
}

document.getElementsByClassName("deletebtn").forEach((element) => {});
document
  .getElementsByClassName("deletebtn")
  .addEventListener("click", deleteList(this));

function deleteList(test) {
  //
}
