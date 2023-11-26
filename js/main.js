// let userList = document.querySelector('.user__list')

// function fnFetch() {
//   fetch('https://jsonplaceholder.typicode.com/users')
//     .then((res) => res.json())
//     .then((data) => userMap(data))
// }
// fnFetch()

// function userMap(data) {
//   userList.innerHTML = ''
//   data.map((item) => {
//     let newLi = document.createElement('li')
//     newLi.classList.add('col-3')
//     newLi.innerHTML = `<div class="card" style="width: 18rem;">
//                 <img src="https://villagesonmacarthur.com/wp-content/uploads/2020/12/Blank-Avatar.png" class="card-img-top" alt="...">
//                 <div class="card-body">
//                 <h5 class="card-title">${item.id}</h5>
//                 <h5 class="card-title">${item.name}</h5>
//                 <p class="card-text"> ${item.username}</p>
//                   <button onclick="postMap(${item.id})"   class="btn btn-primary">go to posts</button>
//                 </div>
//               </div>`
//     userList.appendChild(newLi)
//   })
// }


// function postMap(id ) {
//   userList.innerHTML = ''
//   fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
//     .then((res) => res.json())
//     .then((data) => {
//       data.map((item) => {
//         let newLi = document.createElement('li')
//         newLi.classList.add('col-3')
//         newLi.innerHTML = `<div class="card" style="width: 18rem;">
//                 <img src="https://villagesonmacarthur.com/wp-content/uploads/2020/12/Blank-Avatar.png" class="card-img-top" alt="...">
//                 <div class="card-body">
//                 <h5 class="card-title btn btn-danger ">${item.userId}-user</h5>
//                 <h5 class="card-title btn btn-success ">${item.id} -post</h5>
//                 <h5 class="card-title">${item.title}</h5>
//                 <p class="card-text"> ${item.username}</p>
//                   <button onclick="postMap(${item.id})"   class="btn btn-primary">go to comment</button>
//                 </div>
//               </div>`
//         userList.appendChild(newLi)
//       })
//     })
// }

// function commentsMap(id) {
//   userList.innerHTML = ''
//   fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
//     .then((res) => res.json())
//     .then((data) => {
//       data.map((item) => {
//         let newLi = document.createElement('li')
//         newLi.classList.add('col-3')
//         newLi.innerHTML = `<div class="card" style="width: 18rem;">
//                 <div class="card-body">
//                 <h5 class="card-title btn btn-danger ">${item.postId}-post</h5>
//                 <h5 class="card-title btn btn-success ">${item.id} -comment</h5>
//                 <h5 class="card-title">${item.body}</h5>
//                 <p class="card-text"> ${item.name}</p>
//                   <button onclick="postMap(${item.id})"   class="btn btn-primary">${item.email}</button>
//                 </div>
//               </div>`
//         userList.appendChild(newLi)
//       })
//     })
// }



let userList = document.querySelector('.user__list')

function fnFetch() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((data) => userMap(data))
}
fnFetch()

function userMap(data) {
  userList.innerHTML = ''
  data.map((item) => {
    let newLi = document.createElement('li')
    newLi.classList.add('col-3')
    newLi.innerHTML = `<div class="card" style="width: 18rem;"> 
                <img src="https://villagesonmacarthur.com/wp-content/uploads/2020/12/Blank-Avatar.png" class="card-img-top" alt="..."> 
                <div class="card-body"> 
                <h5 class="card-title">${item.id}</h5> 
                <h5 class="card-title">${item.name}</h5> 
                <p class="card-text"> ${item.username}</p> 
                  <button onclick="postMap(${item.id})"   class="btn btn-primary">go to posts</button> 
                </div> 
              </div>`
    userList.appendChild(newLi)
  })
}


function postMap(id) {
  userList.innerHTML = ''
  fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    .then((res) => res.json())
    .then((data) => {
      data.map((item) => {
        let newLi = document.createElement('li')
        newLi.classList.add('col-3')
        newLi.innerHTML = `<div class="card" style="width: 18rem;"> 
                <img src="https://villagesonmacarthur.com/wp-content/uploads/2020/12/Blank-Avatar.png" class="card-img-top" alt="..."> 
                <div class="card-body"> 
                <h5 class="card-title btn btn-danger ">${item.userId}-user</h5> 
                <h5 class="card-title btn btn-success ">${item.id} -post</h5> 
                <h5 class="card-title">${item.title}</h5> 
                <p class="card-text"> ${item.username}</p> 
                  <button onclick="commentsMap(${item.id})"   class="btn btn-primary">go to comment</button> 
                </div> 
              </div>`
        userList.appendChild(newLi)
      })
    })
}

function commentsMap(id) {
  console.log(id);
  userList.innerHTML = ''
  fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
    .then((res) => res.json())
    .then((data) => {
      data.map((item) => {
        let newLi = document.createElement('li')
        newLi.classList.add('col-3')
        newLi.innerHTML = `
              <div class="card" style="width: 18rem;"> 
                <div class="card-body"> 
                  <h5 class="card-title btn btn-danger ">${item.postId}-post</h5> 
                  <h5 class="card-title btn btn-success ">${item.id} -comment</h5> 
                  <h5 class="card-title">Comment: ${item.body}</h5> 
                  <p class="card-text"> ${item.name}</p> 
                  <button  "   class="btn btn-primary"><a href="mailto:${item.email}">${item.email} </a> </button> 
    <img class="likes" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSygWyWx9zJb24OtRyoq4jt_WYRpZO9lNL0dowC74TQ8Q&s" alt="">
    <button class="like"></button>
                </div> 
              </div>`
        userList.appendChild(newLi)
      })
    })
}