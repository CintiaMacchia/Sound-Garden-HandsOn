let modal = document.querySelector("#modal");
const buttonOpenModal = document.querySelector(".btn-primary");
const buttonCloseModal = document.querySelector(".button-close-modal");



buttonOpenModal.addEventListener("click", function(){ 
    let modal = document.querySelector("#dv-modal");
    modal.style.display = "block"
    document.body.style.overflow = 'hidden';
  })

  buttonCloseModal.addEventListener("click", function(){ 
    let modal = document.querySelector("#dv-modal");
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
 })


