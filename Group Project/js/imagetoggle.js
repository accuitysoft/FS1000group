let element = document.getElementById("photo");

function addClass() {
  element.classList.add("enlarge");
} 

function toggleClass(){
  if (element.classList.contains("enlarge")) {
    element.classList.remove("enlarge")
  } else {
    element.classList.add("enlarge")  
  }
}

element.addEventListener("click", toggleClass);