const form = document.querySelector(".form");
const userName = document.getElementById("name");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  checkInputs();
});

function checkInputs() {
  const userNameValue = userName.value.trim();
  const lastNameValue = lastName.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (userNameValue === "") {
    setErrorFor(userName, "Nome não pode ser vazio");
  } else {
    setSucessFor(userName);
  }

  if (lastNameValue === "") {
    setErrorFor(lastName, "Sobrenome não pode ser vazio");
  } else {
    setSucessFor(lastName);
  }

  if (emailValue === "") {
    setErrorFor(email, "Email não pode ser vazio");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Email inválido");
  } else {
    setSucessFor(email);
  }

  if (passwordValue === "") {
    setErrorFor(password, "Senha não pode ser vazio");
  } else if (!isValidPassword(passwordValue)) {
    setErrorFor(
      password,
      "A senha precisa conter no mínimo 8 caracteres, 1 letra maiúscula, 1 número e 1 caractere especial"
    );
  } else {
    setSucessFor(password);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  input.getAttribute("id") === "password" &&
  message ===
    "A senha precisa conter no mínimo 8 caracteres, 1 letra maiúscula, 1 número e 1 caractere especial"
    ? (small.style.bottom = "-2rem")
    : null;

  small.innerText = message;

  formControl.className = "form__control error";
}

function setSucessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form__control sucess";
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

function isValidPassword(password) {
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
    password
  );
}

/** Slider */

const testimonials = document.querySelectorAll(".testimonial");
const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");

let currentTestimonial = 0;
const maximumTestimonials = testimonials.length - 1;

testimonials.forEach((testimonial, index) => {
  testimonial.style.transform = `translateX(${100 * index}%)`;
});

arrowLeft.addEventListener("click", () => {
  if (currentTestimonial === 0) {
    currentTestimonial = maximumTestimonials;
  } else {
    currentTestimonial--;
  }

  testimonials.forEach((testimonial, index) => {
    testimonial.style.transform = `translateX(${
      100 * (index - currentTestimonial)
    }%)`;
  });
});

arrowRight.addEventListener("click", () => {
  if (currentTestimonial === maximumTestimonials) {
    currentTestimonial = 0;
  } else {
    currentTestimonial++;
  }

  testimonials.forEach((testimonial, index) => {
    testimonial.style.transform = `translateX(${
      100 * (index - currentTestimonial)
    }%)`;
  });
});
