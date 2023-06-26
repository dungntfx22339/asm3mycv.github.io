// 1.KHỐI KIỂM TRA EMAIL

// Biến tìm kiếm email
const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// Khai báo biến cơ sở chứa dữ liệu
const btnCheck = document.querySelector(".check");
const info = document.querySelector(".information");
const inputForm = document.getElementById("form-group");
let inputEl = document.getElementById("inputEmail");
let getInputValue = function () {
  console.log(inputEl.value);
  return inputEl.value;
};

// Khai báo hàm tìm kiếm
let result = function () {
  let x = regex.test(getInputValue());
  return x;
};

// Hàm hiện nội dung
const check = function () {
  if (result() == true) {
    info.classList.remove("hidden");
    inputForm.classList.add("hidden");
  } else {
    alert("Invalid Email");
  }
};
// Biểu thức thực thi khi click vào Button submit
btnCheck.addEventListener("click", check);

//2. BEHAVE SECTION THÔNG TIN CÁ NHÂN.

// Khai báo Button
const btnEl1 = document.querySelector(".btn--0");
const btnEl2 = document.querySelector(".btn--1");
const btnEl3 = document.querySelector(".btn--2");
const btnEl4 = document.querySelector(".btn--3");
const btnEl5 = document.querySelector(".btn--4");
const btnEl6 = document.querySelector(".btn--5");

// Khai báo container hide
const expEl1 = document.querySelector(".explore--0");
const expEl2 = document.querySelector(".explore--1");
const expEl3 = document.querySelector(".explore--2");
const expEl4 = document.querySelector(".explore--3");
const expEl5 = document.querySelector(".explore--4");
const expEl6 = document.querySelector(".explore--5");

//Mảng chứa dữ liệu lặp
const btnsShow = [btnEl1, btnEl2, btnEl3, btnEl4, btnEl5, btnEl6];
const expsExp = [expEl1, expEl2, expEl3, expEl4, expEl5, expEl6];

// Hàm Click show/hide
for (let i = 0; i < btnsShow.length; i++) {
  btnsShow[i].addEventListener("click", function () {
    if (
      expsExp[`${btnsShow.indexOf(btnsShow[i])}`].classList.contains("hidden")
    ) {
      btnsShow[i].textContent = `▲ View less`;
    } else {
      btnsShow[i].textContent = `▼ View more`;
    }
    console.log(`${btnsShow.indexOf(btnsShow[i])}`);
    expsExp[`${btnsShow.indexOf(btnsShow[i])}`].classList.toggle("hidden");
  });
}
