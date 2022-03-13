
let addBtn = document.getElementById("AddBtn");
let blogAdd = document.getElementById("BlogAdd");
let blogCont = document.getElementById("blogContainer");
let blogCard = document.getElementById("blog_card");
let txtArea = document.getElementById("txtArea");
let BlogRemove = document.getElementById("BlogRemove");

window.onload = function(){
     
}
let date = new Date()
let blogArr = [];


// CHECKING FOR LOCAL STORAGE IF PREVIOUSLY CONTAINING ITEM 
if(localStorage.getItem("blog")===null){
      blogArr = [];
}else{
     blogArr = JSON.parse(localStorage.getItem('blog'))
     show();
}
// FOR BLOG INPUT 
const user = {
  model: true,
};

// ADDING BUTTON FOR BLOG
addBtn.addEventListener("click", () => {
     setTimeout(() => {
          txtArea.focus()
     }, 10);
     
  if (user.model) {
       blogCont.classList.remove("animate__bounceOut");
       blogCont.classList.remove("d-none");
       blogCont.classList.add("animate__bounceIn");
       blogCont.classList.add("d-flex");
       user.model = false;
  }
});


// FINAL ADD BUTTON 
blogAdd.addEventListener("click", () => {

  blogArr.push(txtArea.value);
  localStorage.setItem("blog", JSON.stringify(blogArr));
  let a = JSON.parse(localStorage.getItem("blog"));

  show();
  
  blogCont.classList.add("d-none");
  blogCont.classList.remove("d-flex");

  user.model = true;

  txtArea.value = "";
});


BlogRemove.addEventListener("click", () => {

     blogCont.classList.remove("animate__bounceIn");
     blogCont.classList.add("animate__bounceOut");
     setTimeout(() => {
          blogCont.classList.add("d-none");
          blogCont.classList.remove("d-flex");
     }, 500);
     
  user.model = true;

  txtArea.value = "";

});


// SHOWING THE BLOG 
function show(){
     let html = ''
     blogArr.forEach((item , index) => {
          html += ` <div class="card border-0 m-3" style="width: 50rem; background-color: transparent;">
          <div class="row g-0">
               <div class="col-md-1">
                    <img src="./images/img3.jpg" class="m-2 img-fluid w-100 rounded-pill" alt="...">
               </div>
               <div class="col-md-11">
                    <div id="card_body" class=" position-relative card-body border bg-dark text-white border-dark ms-3" >
                         <h5 class="card-title">bLog - ${index+1}</h5>
                         <p id="blogText" class="card-text mt-3 mb-1">${item}
                         </p>
                         <p class="card-text"><small class="text-muted">Last updated ${date.toLocaleTimeString()}</small>
                         </p>
                    </div>
               </div>
          </div>
     </div>`
     })
     
     blogCard.innerHTML = html
}

