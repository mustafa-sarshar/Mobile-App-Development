const inReasonEl = window.document.querySelector("#in-reason");
const inAmountEl = window.document.querySelector("#in-amount");
const btnClearEl = window.document.querySelector("#btn-clear");
const btnAddEl = window.document.querySelector("#btn-add");
const lstExpensesEl = window.document.querySelector("#lst-expenses");
const outTotalEl = window.document.querySelector("#out-total");
const alertEl = window.document.querySelector("#alert");

let expenseTotal = 0;

async function handlePresentAlert(header, subHeader, message, buttons) {
  alertEl.header = header;
  alertEl.subHeader = subHeader;
  alertEl.message = message;
  alertEl.buttons = buttons;

  window.document.body.appendChild(alertEl);
  await alertEl.present();
}

function handleClearInputFields() {
  inReasonEl.value = "";
  inAmountEl.value = "";
}

function handleUpdateTotal(amount) {
  expenseTotal += amount;
  outTotalEl.textContent = expenseTotal;
}

btnAddEl.addEventListener("click", () => {
  const reason = inReasonEl.value.trim();
  const amount = +inAmountEl.value.trim();

  if (reason.length < 1 || amount < 1) {
    handlePresentAlert("Error!", "Something went wrong.", "Please check your entered values. They are not valid!", ["Okay"]);
    return;
  }

  const itemNew = window.document.createElement("ion-item");
  itemNew.textContent = `${reason}: ${amount}`;

  lstExpensesEl.appendChild(itemNew);

  handleUpdateTotal(amount);
  handleClearInputFields();
});

btnClearEl.addEventListener("click", handleClearInputFields);

handleUpdateTotal(0);
