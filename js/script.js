let input = document.querySelector(".search-input");
let btn = document.querySelector(".btn");

let showList = document.querySelector(".show-list");

let tasks = [];

btn.addEventListener("click", () => {
  let val = input.value;
  console.log(input.value);
  tasks.push(val);
  input.innerText = "";
  printList();
});

function printList() {
  showList.innerHTML = "";
  for (let task of tasks) {
    let h3 = document.createElement("h3");
    h3.innerText = task;
    showList.appendChild(h3);
    console.log(task);
  }
}

// printList();
