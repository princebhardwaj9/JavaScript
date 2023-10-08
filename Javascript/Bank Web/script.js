"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

btnScrollTo.addEventListener("click", function (e) {
  section1.scrollIntoView({ behavior: "smooth" });
});

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

const nums = [8, 9, 9, 9];

var plusOne = function (digits) {
  let carry = 0;
  if (digits[digits.length - 1] < 9) {
    digits[digits.length - 1] = digits[digits.length - 1] + 1;
  } else {
    let index = digits.length - 1;
    while (index >= 0) {
      if (digits[index] == 9 && index !== 0) {
        const array = `${digits[index] + 1}`.split("").map((e) => parseInt(e));
        digits[index] = array[1];

        if (digits[index - 1] + array[0] > 9) {
          digits[index - 1] = 9;
          index--;
        } else {
          digits[index - 1] = digits[index - 1] + array[0];
          return digits;
        }
      } else if (digits[index] == 9 && index == 0) {
        digits[0] = 0;
        digits.unshift(1);
        return digits;
      } else {
        return digits;
      }
    }
  }

  return digits;
};

console.log("Result would be ", plusOne(nums));
