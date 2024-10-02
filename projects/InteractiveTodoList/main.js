let taskArray = [];
let count = 0;

document.getElementById("addBtn").addEventListener("click", addList);

function addList() {
  let taskTxt = document.getElementById("taskTxt").value;

  if (taskTxt != "") {
    // console.log(taskTxt);
    count++;
    taskArray[count] = {
      id: count,
      text: taskTxt,
      completed: "completed",
    };
    // let text = "<li>" + taskArray[count].text + "</li>";
    // document.getElementById("taskList").innerHTML = text;
    display();
  } else {
    alert("Need to input a task!");
  }
}

function display() {
  for (let x = 0; x < taskArray.length; x++) {
    console.log(taskArray[x].text);
  }
}
