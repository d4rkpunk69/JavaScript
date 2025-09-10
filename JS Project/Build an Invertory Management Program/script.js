let inventory = [];

inventory.push({ name: "yeast", quantity: 100 }); // sample

const findProductIndex = (name) =>
  inventory.findIndex((p) => p.name === name.toLowerCase());

function addProduct(product) {
  const name = product.name.toLowerCase();
  const quantity = Number(product.quantity);
  const index = findProductIndex(name);

  if (index === -1) {
    inventory.push({ name, quantity });
    logToConsole(`${name} added to inventory`, "success");
  } else {
    inventory[index].quantity += quantity;
    logToConsole(`${name} quantity updated`, "info");
  }

  updateInventoryDisplay();
}

function removeProduct(name, amount) {
  const lowerName = name.toLowerCase();
  const index = findProductIndex(lowerName);

  if (index === -1) {
    logToConsole(`${lowerName} not found`, "error");
    return;
  }

  const product = inventory[index];

  if (amount > product.quantity) {
    logToConsole(
      `Not enough ${lowerName} available, remaining pieces: ${product.quantity}`,
      "error"
    );
    return;
  } else {
    product.quantity -= amount;
    if (product.quantity <= 0) {
      inventory.splice(index, 1);
    }
  }

  logToConsole(`Remaining ${lowerName} pieces: ${product.quantity}`, "info");
  updateInventoryDisplay();
}

function logToConsole(message, type = "log") {
  const consoleOutput = document.getElementById("consoleOutput");
  const messageElement = document.createElement("div");
  messageElement.classList.add(type);
  messageElement.textContent = "> " + message;
  consoleOutput.appendChild(messageElement);
  consoleOutput.scrollTop = consoleOutput.scrollHeight;

  console.log(message);
}

function updateInventoryDisplay() {
  const inventoryBody = document.getElementById("inventoryBody");
  const emptyMessage = document.getElementById("emptyMessage");

  inventoryBody.innerHTML = "";

  if (inventory.length === 0) {
    emptyMessage.style.display = "block";
    return;
  }

  emptyMessage.style.display = "none";

  inventory.forEach((product) => {
    const row = document.createElement("tr");

    const nameCell = document.createElement("td");
    nameCell.textContent = product.name;

    const quantityCell = document.createElement("td");
    quantityCell.textContent = product.quantity;

    row.appendChild(nameCell);
    row.appendChild(quantityCell);

    inventoryBody.appendChild(row);
  });
}

function runDemoOperations() {
  logToConsole("Running demo operations...", "info");

  addProduct({ name: "flour", quantity: 5 });
  addProduct({ name: "FLOUR", quantity: 5 });
  addProduct({ name: "vinegar", quantity: 333 });
  addProduct({ name: "vinegar", quantity: 333 });

  removeProduct("Food Color", 5);
  removeProduct("flour", 30);
  removeProduct("vinegar", 333);

  logToConsole("Demo operations completed", "info");
  logToConsole(
    "Final inventory: " + JSON.stringify(inventory, null, 2),
    "info"
  );
}

document.addEventListener("DOMContentLoaded", function () {
  updateInventoryDisplay();

  document.getElementById("addBtn").addEventListener("click", function () {
    const name = document.getElementById("addName").value;
    const quantity = document.getElementById("addQuantity").value;

    if (!name || !quantity) {
      logToConsole("Please enter both product name and quantity", "error");
      return;
    }

    addProduct({ name, quantity });

    document.getElementById("addName").value = "";
    document.getElementById("addQuantity").value = "";
  });

  document.getElementById("removeBtn").addEventListener("click", function () {
    const name = document.getElementById("removeName").value;
    const quantity = document.getElementById("removeQuantity").value;

    if (!name || !quantity) {
      logToConsole("Please enter both product name and quantity", "error");
      return;
    }

    removeProduct(name, quantity);

    document.getElementById("removeName").value = "";
    document.getElementById("removeQuantity").value = "";
  });

  document
    .getElementById("runDemoBtn")
    .addEventListener("click", runDemoOperations);

  document
    .getElementById("clearConsoleBtn")
    .addEventListener("click", function () {
      document.getElementById("consoleOutput").innerHTML = "";
    });
 // !
  const inputs = document.querySelectorAll("input");
  inputs.forEach((input) => {
    input.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        if (input.id === "addName" || input.id === "addQuantity") {
          document.getElementById("addBtn").click();
        } else if (input.id === "removeName" || input.id === "removeQuantity") {
          document.getElementById("removeBtn").click();
        }
      }
    });
  });

  logToConsole("Inventory management system initialized", "success");
  logToConsole(
    'Type "runDemoOperations()" in the browser console to run the demo',
    "info"
  );
});
