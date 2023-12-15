const h1 = document.querySelector("h1");
h1.onmouseenter = function () {
  h1.style.backgroundColor = "skyblue";
};

h1.onmouseenter = function () {
  h1.style.backgroundColor = "pink";
};

// h1.onclick = function () {
//   h1.style.backgroundColor = "purple";
// };

h1.addEventListener("click", function () {
  h1.style.backgroundColor = "purple";
});

const container = document.querySelector(".container");
const img = document.querySelectorAll(".container img");

// 이벤트 객체 - 발생한 이벤트에 대한 많은 정보를 담고 있는 애
function removeHander(e) {
  //   container.removeChild(this);
  console.log(e.currentTarget);
  console.log(e.target);
  if (e.target !== e.currentTarget) {
    // e.currentTarget.removeChild(e.target);
    e.target.style.display = "none";
  }
}

container.addEventListener("click", removeHander);

// for (item of img) {
//   item.addEventListener("click", removeHander);
// }
