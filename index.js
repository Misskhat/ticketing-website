function idConvertToNumber(id) {
  const idName = document.getElementById(id).innerText;
  const idNum = parseInt(idName);
  return idNum;
}
const seatPrice = idConvertToNumber("ticket-price");
const seats = document.getElementsByClassName("bus-seat");
for (const seat of seats) {
  seat.addEventListener("click", function (event) {
    const totalSeat = document.getElementById("total-seat");
    totalSeat.innerText = totalSeat.innerText - 1;
    const selectedSeatNumber = document.getElementById("selected-seat-number");
    selectedSeatNumber.innerText = parseInt(selectedSeatNumber.innerText) + 1;
    const seatNumber = event.target.innerText;
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
    p1.innerText = seatNumber;
    p2.innerText = "Economoy";
    p3.innerText = seatPrice;
    const selectedSeatContainer = document.getElementById(
      "selected-seat-container"
    );
    selectedSeatContainer.appendChild(p1);
    selectedSeatContainer.appendChild(p2);
    selectedSeatContainer.appendChild(p3);
    updateTotalCost("total-price");
  });
}

function updateTotalCost(id) {
  const totalPrice = idConvertToNumber(id);
  const newPrice = totalPrice + seatPrice;
  document.getElementById(id).innerText = newPrice;
}
