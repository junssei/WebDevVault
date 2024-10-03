let taskArray = [];
let count = 0;

document.getElementById("addBtn").addEventListener("click", addList);

let text = document.getElementById("taskList");
// console.log(text);

function addList() {
  let taskTxt = document.getElementById("taskInput").value;

  if (taskTxt != "") {
    // console.log(taskTxt);
    taskArray[count] = {
      id: count,
      text: taskTxt,
      completed: 'completed',
    };

    text.innerHTML += "<li>" + taskArray[count].text + "</li>";

    displayList();
    count++;
  } else {
    alert("Need to input a task!");
  }
}

function displayList(){
  for (let i = 0; i < taskArray.length; i++) {
    console.log(taskArray[i]);
  }
}