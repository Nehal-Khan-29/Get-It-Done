
/* -------------------------------------------------------------------------------------------------------------------------------------------------*/

function showHousehold() {
    var householdDiv = document.getElementById("household");
    var frontDiv = document.getElementById("front");
    frontDiv.style.display = "none";
    householdDiv.style.display = "block";
}

function hideHousehold() {
    var householdDiv = document.getElementById("household");
    var frontDiv = document.getElementById("front");
    householdDiv.style.display = "none";
    frontDiv.style.display = "block";
}

/* -------------------------------------------------------------------------------------------------------------------------------------------------*/

function showwork() {
    var workDiv = document.getElementById("work");
    var frontDiv = document.getElementById("front");
    frontDiv.style.display = "none";
    workDiv.style.display = "block";
}

function hidework() {
    var workDiv = document.getElementById("work");
    var frontDiv = document.getElementById("front");
    workDiv.style.display = "none";
    frontDiv.style.display = "block";
}


/* ----------------------------------------------------------------household---------------------------------------------------------------------------------*/

  const addTodo = function(todo, index) {
    const isHidden = todo.dropdown ? "" : "hidden";
    const isChecked = todo.checked ? "checked" : "";
    const dropdownIcon = todo.dropdown ? "fa-solid fa-circle-chevron-up" : "fa-solid fa-circle-chevron-down";
    const rawhtml = `
      <div id="item-ct">
        <div class="topic1" id="topic-ct">
          <span>${todo.title}</span>
          <i class="${dropdownIcon}" type="button" onclick="toggleDropdown(event, ${index})"></i>
        </div>
        <div id="dropdown-ct" ${isHidden}>
          <div class="drpbtn">
            <span>${todo.date}</span>
            <span>${todo.time}</span>
            <div>
              <i class="fa-solid fa-check-circle" onclick="checkItem(event, ${index})"></i>
              <i class="fa-solid fa-trash" onclick="deleteItem(event, ${index})"></i>
            </div>
          </div>
          <div class="description"></div>
        </div>
      </div>
    `;
  
    var ul = document.getElementById("tasks");
    var li = document.createElement("li");
    li.className = isChecked;
    li.id = `todo-item-${index}`;
    li.innerHTML = rawhtml;
    ul.appendChild(li);
  };
    
  const generateTodo = function(todos) {
    const list = document.getElementById("tasks");
    list.innerHTML = "";
    remainingText.innerHTML = todos.filter(todo => !todo.checked).length;
    
    todos.forEach((todo, index) => {
      addTodo(todo, index);
      const listItem = document.getElementById(`todo-item-${index}`);
      if (todo.checked) {
        listItem.classList.add('completed');
      }
    });

    localStorage.setItem("todos", JSON.stringify(todos));

    if (list.childElementCount > 4) {
      list.classList.add("scroll");
    } else {
      list.classList.remove("scroll");
    }
  };
    
  var remainingTask = 0;
  var todos = [];
  const remainingText = document.getElementById("remaining-task");
    
  const toggleDropdown = function(event, index) {
    event.stopPropagation();
    todos.forEach((todo, i) => {
      if (i === index) {
        todo.dropdown = !todo.dropdown;
      } else {
        todo.dropdown = false;
      }
    });
  
    generateTodo(todos);
  
    const showDescElement = document.getElementById("showdesc");
    showDescElement.innerHTML = ""; 
  
    if (todos[index].dropdown) {
      const desContent = todos[index].de.replace(/\n/g, "<br>");
      const desItem = document.createElement("div");
      desItem.innerHTML = desContent;
      showDescElement.appendChild(desItem);
    }
  };
  
  
    
  const deleteItem = function(event, index) {
    event.stopPropagation();
    todos.splice(index, 1);
    generateTodo(todos);
  };
  
  const checkItem = function(event, index) {
    event.stopPropagation();
    todos[index].checked = !todos[index].checked;
    generateTodo(todos);
  
    const listItem = document.getElementById(`todo-item-${index}`);
    if (todos[index].checked) {
      listItem.classList.add('completed');
    } else {
      listItem.classList.remove('completed');
    }
  };
  
        
  const onAddbtnclicked = function() {
    const titletxt = document.getElementById("topic");
    const datetxt = document.getElementById("date");
    const timetxt = document.getElementById("time");
    const destxt = document.getElementById("des");
    todos.push({
      title: titletxt.value,
      date: datetxt.value,
      time: timetxt.value,
      de: destxt.value,
      dropdown: false,
      checked: false
    });
    generateTodo(todos);
  
  };
        
        
  const clearAll = function() {
    const list = document.getElementById("tasks");
    list.innerHTML = "";
    todos = [];
    remainingText.innerHTML = 0;

    localStorage.removeItem("todos");
  };
        
  const storedTodos = localStorage.getItem("todos");
  if (storedTodos) {
    todos = JSON.parse(storedTodos);
    generateTodo(todos);
  }
        
  const addButton = document.getElementById("addbtn");
  addButton.addEventListener("click", onAddbtnclicked);
  
  /* ----------------------------------------------------------------work---------------------------------------------------------------------------------*/


  const addTodo2 = function(todo2, index) {
    const isHidden = todo2.dropdown ? "" : "hidden";
    const isChecked = todo2.checked ? "checked" : "";
    const dropdownIcon = todo2.dropdown ? "fa-solid fa-circle-chevron-up" : "fa-solid fa-circle-chevron-down";
    const rawhtml = `
      <div id="item-ct">
        <div class="topic12" id="topic-ct">
          <span>${todo2.title}</span>
          <i class="${dropdownIcon}" type="button" onclick="toggleDropdown2(event, ${index})"></i>
        </div>
        <div id="dropdown-ct" ${isHidden}>
          <div class="drpbtn2">
            <span>${todo2.date}</span>
            <span>${todo2.time}</span>
            <div>
            <i class="fa-solid fa-check-circle" onclick="checkItem2(event, ${index})"></i>

              <i class="fa-solid fa-trash" onclick="deleteItem2(event, ${index})"></i>
            </div>
          </div>
          <div class="description2"></div>
        </div>
      </div>
    `;
  
    var ul = document.getElementById("tasks2");
    var li = document.createElement("li");
    li.className = isChecked;
    li.id = `todo-item-work-${index}`;
    li.innerHTML = rawhtml;
    ul.appendChild(li);
  };
  
  const generateTodo2 = function(todos2) {
    const list = document.getElementById("tasks2");
    list.innerHTML = "";
    remainingText2.innerHTML = todos2.filter(todo2 => !todo2.checked).length;
  
    todos2.forEach((todo2, index) => {
      addTodo2(todo2, index);
      const listItem = document.getElementById(`todo-item-work-${index}`);
      if (todo2.checked) {
        listItem.classList.add('completed2');
      }
    });
  
    localStorage.setItem("todos2", JSON.stringify(todos2));
  
    if (list.childElementCount > 4) {
      list.classList.add("scroll2");
    } else {
      list.classList.remove("scroll2");
    }
  };
  
  
  
  var remainingTask2 = 0;
  var todos2 = [];
  const remainingText2 = document.getElementById("remaining-task2");
  
  const toggleDropdown2 = function(event, index) {
    event.stopPropagation();
    todos2.forEach((todo2, i) => {
      if (i === index) {
        todo2.dropdown = !todo2.dropdown;
      } else {
        todo2.dropdown = false;
      }
    });
  
    generateTodo2(todos2);
  
    const showDescElement = document.getElementById("showdesc2");
    showDescElement.innerHTML = "";
  
    if (todos2[index].dropdown) {
      const desContent = todos2[index].de.replace(/\n/g, "<br>");
      const desItem = document.createElement("div");
      desItem.innerHTML = desContent;
      showDescElement.appendChild(desItem);
    }
  };
  
  const deleteItem2 = function(event, index) {
    event.stopPropagation();
    todos2.splice(index, 1);
    generateTodo2(todos2);
  };
  
  const checkItem2 = function(event, index) {
    event.stopPropagation();
    todos2[index].checked = !todos2[index].checked;
    generateTodo2(todos2);
  
    const listItem = document.getElementById(`todo-item-work-${index}`);
    if (todos2[index].checked) {
      listItem.classList.add('completed2');
    } else {
      listItem.classList.remove('completed2');
    }
  };
  
  
  
  const onAddbtnclicked2 = function() {
    const titletxt = document.getElementById("topic2");
    const datetxt = document.getElementById("date2");
    const timetxt = document.getElementById("time2");
    const destxt = document.getElementById("des2");
    todos2.push({
      title: titletxt.value,
      date: datetxt.value,
      time: timetxt.value,
      de: destxt.value,
      dropdown: false,
      checked: false
    });
    generateTodo2(todos2);
  };
  
  const clearAll2 = function() {
    const list = document.getElementById("tasks2");
    list.innerHTML = "";
    todos2 = [];
    remainingText2.innerHTML = 0;
  
    localStorage.removeItem("todos2");
  };
  
  const storedTodos2 = localStorage.getItem("todos2");
  if (storedTodos2) {
    todos2 = JSON.parse(storedTodos2);
    generateTodo2(todos2);
  }
  
  
  const addButton2 = document.getElementById("addbtn2");
  addButton2.addEventListener("click", onAddbtnclicked2);
  