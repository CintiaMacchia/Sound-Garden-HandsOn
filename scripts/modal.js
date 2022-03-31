const buttonOpenModal = document.querySelector("#cardContainer");
const buttonCloseModal = document.querySelector(".button-close-modal");
const buttonBooking = document.querySelector(".button-booking");
const inputNumberTickets = document.querySelector("#number-tickets");
const inputNome = document.querySelector("#nome");
const inputEmail = document.querySelector("#e-mail");
const inputEvento = document.querySelector("#evento");
const inputQtdeLugares = document.querySelector("#lugares-disponiveis");
const inputDataEvento = document.querySelector("#data-evento");


buttonOpenModal.addEventListener(
  "click",
  (openModal = () => {
    document.querySelector("#dv-modal").style.display = "block";
    //listEventsById();
  })
);


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


// const listEventsById = async () => {
//     console.log(idURL)
//     const request = await fetch(`${BASE_URL}/events/6244e75e44be9a585dfd9908`, requestOptions);
//     const responseContent = await request.json();

//     // responseContent.forEach(evento => {
//     //   const datas = evento.scheduled;
//     //     const datasFormatadas = new Date(datas);
//     //     inputEvento.value = evento.name;
//     //     inputDataEvento.value = datasFormatadas;
//     //     inputQtdeLugares.value = evento.number_tickets;      
//     // });
//     //console.log(responseContent);


// }


