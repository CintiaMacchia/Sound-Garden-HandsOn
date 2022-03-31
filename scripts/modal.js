const buttonOpenModal = document.querySelector("#cardContainer");
console.log(buttonOpenModal);
const buttonCloseModal = document.querySelector(".button-close-modal");
const buttonBooking = document.querySelector(".button-booking");
const inputEvento = document.querySelector("#evento");
const inputDataEvento = document.querySelector("#data-evento");
const inputNumberTickets = document.querySelector("#number-tickets");
const inputNome = document.querySelector("#nome");
const inputEmail = document.querySelector("#e-mail");

buttonOpenModal.addEventListener(
  "click",
  (openModal = () => {
    document.querySelector("#dv-modal").style.display = "block";
    // carregaModal();
  })
);


buttonBooking.addEventListener("click", async (booking) => {
  const newBooking = {
    owner_name: inputNome.value,
    owner_email: inputEmail.value,
    number_tickets: inputNumberTickets.value,
    event_id:"6244e45d44be9a585dfd9704"
  }
  const mountURL = {
    method : 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newBooking),
    redirect: 'follow'
  }
  const response = await fetch(`${BASE_URL}/bookings`, mountURL)
  const responseContent = await response.json();
  alert('Reserva Efetuada!'); 
});

buttonCloseModal.addEventListener(
  "click",
  (closeModal = () =>
    (document.querySelector("#dv-modal").style.display = "none"))
);
