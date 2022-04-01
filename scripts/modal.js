let buttonsOpenModal = document.querySelectorAll(".openModal");
const buttonCloseModal = document.querySelector(".button-close-modal");
const buttonBooking = document.querySelector(".button-booking");
const inputNumberTickets = document.querySelector("#number-tickets");
const inputNome = document.querySelector("#nome");
const inputEmail = document.querySelector("#e-mail");
const inputEvento = document.querySelector("#evento");
const inputQtdeLugares = document.querySelector("#lugares-disponiveis");
const inputDataEvento = document.querySelector("#data-evento");
let idURL = window.location.href.split("=")[1];


function adicionarEvento() {
  buttonsOpenModal = document.querySelectorAll(".openModal");
  buttonsOpenModal.forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelector("#dv-modal").style.display = "block";
        //console.log(btn);
        //console.log(btn.getAttribute('event-id'));
        listEventsById(btn.getAttribute('event-id'));
      }
    );
  });
}

buttonBooking.addEventListener("click", async (booking) => {
  const idURL = window.location.href.split("=")[1];
  console.log(idURL);
  const newBooking = {
    owner_name: inputNome.value,
    owner_email: inputEmail.value,
    number_tickets: inputNumberTickets.value,
    event_id: idURL,
  };
  console.log(newBooking);
  const mountURL = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newBooking),
    redirect: "follow",
  };
  const response = await fetch(`${BASE_URL}/bookings`, mountURL);
  const responseContent = await response.json();
  alert("Reserva Efetuada!");
  if (window.location.href.indexOf("index.html") > 0) {
    return window.location.replace("./index.html");
  } else return window.location.replace("./eventos.html");
});

buttonCloseModal.addEventListener(
  "click",
  (closeModal = () =>
    (document.querySelector("#dv-modal").style.display = "none"))
);

const listEventsById = async (event_id) => {
  const request = await fetch(`${BASE_URL}/events/${event_id}`, requestOptions);
  const responseContent = await request.json();
  //console.log(responseContent);
  const { name, number_tickets, scheduled } = responseContent
  const datas = scheduled;
  const datasFormatadas = new Date(datas).toLocaleString("pt-BR");
  inputEvento.value = name;
  inputDataEvento.value = datasFormatadas;
  inputQtdeLugares.value = number_tickets;
}
