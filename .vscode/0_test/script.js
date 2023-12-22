const id = document.querySelector("#id");
const idspan = document.querySelector("#id-span");
const pwd = document.querySelector("#password");
const pwdspan = document.querySelector("#password-span");
const pwdcheck = document.querySelector("#password-check");
const pwdcheckspan = document.querySelector("#password-check-span");

const idtext = "필수 입력 항목입니다";
const pwdtext = "영문자 대/소문자, 특수문자, 숫자 포함 8 ~ 32자";
const pwdchecktext = "비밀번호와 일치하지 않습니다";

id.addEventListener("input", function () {
  if (id.value !== "") {
    idspan.innerHTML = "";
  } else {
    idspan.innerHTML = idtext;
  }
});
const regExp = /^[!-~]{8,32}$/;
pwd.addEventListener("input", function () {
  if (regExp.test(pwd.value)) {
    pwdspan.innerHTML = "";
  } else {
    pwdspan.innerHTML = pwdtext;
  }
});
pwdcheck.addEventListener("input", function () {
  if (pwd.value === pwdcheck.value) {
    pwdcheckspan.innerHTML = "";
  } else {
    pwdcheckspan.innerHTML = pwdchecktext;
  }
});

function validate() {
  if (id.value == "") {
    id.focus();
    idspan.innerHTML = idtext;
    return false;
  } else if (!regExp.test(pwd.value)) {
    pwd.focus();
    pwdspan.innerHTML = pwdtext;
    return false;
  } else if (pwd.value !== pwdcheck.value) {
    pwdcheck.focus();
    pwdcheckspan.innerHTML = pwdchecktext;
    return false;
  }
  return true;
}
