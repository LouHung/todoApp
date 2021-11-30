let deleteBtn 

const api = 'http://localhost:3000/api'
function getAPI(callback){
fetch(api)
.then(res =>res.json())
.then(data => callback(data))
}
getAPI(getdata)

var listTask

function getdata(data){
  render(data)
  let numTask = document.querySelector('.num-tasks')
  var sumData = data.length
  numTask.innerText = sumData
}
function render(data){
  let ul = document.querySelector('.body-tasks-container')
  html= data.map(value =>{
    return`<li id="${value._id}" class="body-task-item">
    <span class="body-task-item__value">${value.task}</span>
    <span class="body-task-btn-container">
    <span class="body-task-item__btn-delete"><i class="fas fa-trash-alt"></i></span>
    <span class="body-task-item__btn-change"><i class="fas fa-pencil-alt"></i></span>
    </span>
    </li>`
  })
  ul.innerHTML=html.join('')
  getBtn()
  deleteTask()
  
}

function postData(url, data = {}) {
  const response = fetch(url, {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  // return response.json(); // parses JSON response into native JavaScript objects
}


// deleteBtn.onclick= function(){
//   deleteData(api, data = {})
// };
function deleteData(url, data) {
  const response = fetch(url, {
    method: 'DELETE', 
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  // return response.json(); // parses JSON response into native JavaScript objects
}

let input = document.querySelector('.insert-place__input_content')
let inputBtn = document.querySelector('.insert-place-btn')
function validate(){
  let inputTask = input.value.trim()
  if (inputTask==''){
    alert('Please enter your task')
  }else{
    postData(api, { task: inputTask })
  getAPI(getdata)

  // .then(data => {
  //   console.log(data); // JSON data parsed by `data.json()` call
  // });
  }
}
inputBtn.onclick = function(){
  validate()
  input.value=''
}

// setInterval(function(){
  getAPI(getdata)

// },2000)

function getBtn(){
   deleteBtn = Array.from(document.querySelectorAll('.body-task-item__btn-delete'))
// console.log(deleteBtn)
}

function deleteTask(){
  deleteBtn.forEach(function(btn){
    btn.onclick = function(){
      let idTask = btn.parentElement.parentElement.id
      console.log(idTask)
      // console.log('deleted')
      deleteData(api, {idTask})
      getAPI(getdata)

    }

  })
}
function edit(){
  let editBtn = document.querySelector('.body-task-item__btn-change')
}