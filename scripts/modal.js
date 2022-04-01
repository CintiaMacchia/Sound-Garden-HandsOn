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
  buttonsOpenModal.forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelector("#dv-modal").style.display = "block";
      listEventsById(btn.getAttribute("event-id"));
    });
  });
}

buttonBooking.addEventListener("click", async (booking) => {
  const idURL = window.location.href.split("=")[1];
  const newBooking = {
    owner_name: inputNome.value,
    owner_email: inputEmail.value,
    number_tickets: inputNumberTickets.value,
    event_id: idURL,
  };
  const mountURL = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newBooking),
    redirect: "follow",
  };
  try {
    const response = await fetch(`${BASE_URL}/bookings`, mountURL);

    if (response.status != 201) {
      if (checaEmail(inputEmail.value) == "NOK") {
        alert("Informe um e-mail válido!");
      } else {
        alert("Problema com os dados da reserva! Tente novamente");
      }
      returnBegin();
    } else {
      console.log(response.status);

      const responseContent = await response.json();

      alert("Reserva Efetuada!");
      returnBegin();
    }
  } catch (error) {
    alert("Erro tente reservar novamente!");
    returnBegin();
  }
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
  const { name, number_tickets, scheduled } = responseContent;
  const datas = scheduled;
  const datasFormatadas = new Date(datas).toLocaleString("pt-BR");
  inputEvento.value = name;
  inputDataEvento.value = datasFormatadas;
  inputQtdeLugares.value = number_tickets;
};

//funções uteis
returnBegin = () => {
  if (window.location.href.indexOf("index.html") > 0) {
    return window.location.replace("./index.html");
  } else return window.location.replace("./eventos.html");
};

checaEmail = (campoEmail) => {
  if (
    campoEmail == "" ||
    campoEmail.indexOf("@") == -1 ||
    campoEmail.indexOf(".") == -1
  )
    return "NOK";
};
