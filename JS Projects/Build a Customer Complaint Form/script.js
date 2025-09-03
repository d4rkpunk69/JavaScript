const form = document.getElementById("form");
const formChildren = document.querySelectorAll(
  "#form input, #form textarea, #form select"
);

const fullName = document.getElementById("full-name");
const email = document.getElementById("email");
const orderNo = document.getElementById("order-no");
const productCode = document.getElementById("product-code");
const quantity = document.getElementById("quantity");

const complaintsReasonGroup = document.querySelectorAll(
  "#complaints-group input[type='checkbox']"
);
const otherComplaint = document.getElementById("other-complaint");
const complaintDescription = document.getElementById("complaint-description");

const solutionsGroup = document.querySelectorAll(
  "#solutions-group input[type='radio']"
);
const refund = document.getElementById("refund");
const exchange = document.getElementById("exchange");
const otherSolution = document.getElementById("other-solution");
const solutionDescription = document.getElementById("solution-description");

const submitBtn = document.getElementById("submit-btn");
const messageBox = document.getElementById("message-box");

// const validFullName = /^[A-Za-z]+(?:['-]?[A-Za-z]+)*(?:\s+[A-Za-z]+(?:['-]?[A-Za-z]+)*)+$/;
const validOrderNo = /2024[\d]{6}/;
const validProductCode =
  /^([a-zA-Z]{2}[\d]{2}\-[a-zA-Z]{1}[\d]{3}-[a-zA-Z]{2}[\d]{1})/;

function validateForm() {
  const isSolutionsGroup = Array.from(solutionsGroup).some((cb) => cb.checked);
  const isComplaintsGroup = Array.from(complaintsReasonGroup).some(
    (cb) => cb.checked
  );
  return {
    "full-name": fullName.value !== "",
    email: email.validity.valid,
    "order-no": validOrderNo.test(orderNo.value) && orderNo.value.length == 10,
    "product-code": validProductCode.test(productCode.value),
    quantity: Number(quantity.value) > 0,
    "complaints-group": isComplaintsGroup,
    "complaint-description": otherComplaint.checked
      ? complaintDescription.value.length >= 20
      : isComplaintsGroup,
    "solutions-group": isSolutionsGroup,
    "solution-description": otherSolution.checked
      ? solutionDescription.value.length >= 20
      : isSolutionsGroup,
  };
}

const isValid = (results) => Object.values(results).every(Boolean);

formChildren.forEach((child) => {
  child.addEventListener("change", () => {
    messageBox.style.display = "none";
    const results = validateForm();
    Object.entries(results).forEach(([key, isFieldValid]) => {
      const el = document.getElementById(key);
      if (el)
        el.style.border = isFieldValid ? "2px solid green" : "2px solid red";
    });
  });
});

function submitNow(e) {
  e.preventDefault();

  const results = validateForm();

  if (isValid(results)) {
    messageBox.style.display = "flex";
    messageBox.textContent = "Please wait...";
    messageBox.style.color = "green";
    setTimeout(() => {
      messageBox.textContent = "Form submitted successfully!";
      // form.submit();
    }, 5000);
  } else {
    messageBox.style.display = "flex";
    messageBox.textContent =
      "Please, fill out the required fields correctly before submitting.";
    messageBox.style.color = "red";
  }

  Object.entries(results).forEach(([key, isValidkey]) => {
    const el = document.getElementById(key);
    if (el) {
      el.style.border = isValidkey ? "2px solid green" : "2px solid red";
    }
  });
}

form.addEventListener("submit", submitNow);
