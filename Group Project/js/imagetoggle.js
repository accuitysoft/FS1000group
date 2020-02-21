// let element = document.getElementById("photo");

// function addClass() {
//   element.classList.add("enlarge");
// } 

// function toggleClass(){
//   if (element.classList.contains("enlarge")) {
//     element.classList.remove("enlarge")
//   } else {
//     element.classList.add("enlarge")  
//   }
// }

// element.addEventListener("click", toggleClass);

var image = document.getElementsByClassName("modalImage");

function openModal(n){
  document.getElementById("imgContainer").style.display = "block";
  image[n].style.display = "block";
}

function closeModal(n){
  document.getElementById("imgContainer").style.display = "none";
  image[n].style.display = "none";
}