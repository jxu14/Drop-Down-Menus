$(document).ready(function(){
  let btn = document.querySelector('button');
  let content = document.getElementById('myDropdown');
  let drop = document.getElementById('dropdown');


  // btn.addEventListener("click", function() {
  //   content.classList.toggle("show");
  // })

  drop.addEventListener("mouseover", function() {
    content.classList.toggle("show");
  })

  drop.addEventListener("mouseout", function() {
    content.classList.remove("show");
  })
})