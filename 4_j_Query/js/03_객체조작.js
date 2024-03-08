// 1. Content 설정
// 1) html()
// content 영역의 태그와 텍스트를 모두 가져온다.
console.log($("#content1").html());
// content1의 내용(태그 + 텍스트)을 content2의 추가
$("#content2").html($("#content1").html());
// 2) text()
// content 영역의 텍스트만 가져온다.
console.log($("#content3").text());
// content3의 내용(텍스트)을 content4의 추가
$("#content4").text($("#content3").text());

// 2. 요소추가
// 1) 자바스크립트와 제이쿼리
const p = document.createElement("p");
p.innerHTML = "자바스크립트로 추가";
document.querySelector("#area1").appendChild(p);

const p2 = $("<p>").html("제이쿼리로 추가");
$("#area1").append(p2);

// 2) 요소 추가 1
// $(A).append(b) : A 요소의 자식요소로 B 요소를 뒷부분에 추가한다.
$("#area1").append("<span>B</span>");

// $(A).prepend(b) : A 요소의 자식요소로 C 요소를 앞부분에 추가한다.
$("#area1").prepend("<span>C</span>");

// $(A).after(b) : A 요소의 형제 요소로 D 요소를 뒷부분에 추가한다.
$("#area1").after("<span>D</span>");

//$(A).before(b) : B요소의 형제 요소로 D 요소를 뒷부분에 추가한다.
$("#area1").before("<span>D</span>");

//$(E).insertBefore(A) :E 요소를 A 요소 형제 요소로 뒷부분에 추가한다.
$("<span>E</span>").insertBefore("#area2");

// 3. 요소 복제
/*
    만일 한 개의 이벤트 핸들러가 설정되면 두 이벤트 모두 한 곳에서 적용
    2개 이상이 되면 해당 이벤트 핸들러의 이벤트가 분리
*/
$("#item1").hover(
  //   (event) => {
  //     console.log("event1 : " + event.type); // mouseenter
  //     console.log(event.target);
  //     $(event.target).addClass("bg-hotpink");
  //   },
  //   (event) => {
  //     console.log("event2 : " + event.type); // mouseleave
  //     console.log(event.target);
  //     $(event.target).removeClass("bg-hotpink");
  //   }
  (event) => {
    $(event.target).toggleClass("bg-hotpink");
  }
);
$("#btn1").click(() => {
  // 이벤트까지 복제 하려면 매개값으로 true를 전달한다.
  // (생략시 false)
  let item = $("#item1").clone(true);
  $("#clone-result").html(item);
});

// 4. 요소 제거
// 1) remove - 선택된 요소의 이벤트까지 삭제
$("#remove").click(() => {
  let item = $("#item2").remove();
  $("#remove-result").append(item);
});

// 2) detach
$("#detach").click(() => {
  let item = $("#item2").detach();
  $("#remove-result").append(item);
});

// 3) empty
$("#empty").click(() => {
  $("#remove-test").empty();
});

// 5. 배열 관리
let array = [
  { name: "구글", link: "https://google.com" },
  { name: "네이버", link: "https://naver.com" },
  { name: "다음", link: "https://daum.net" },
];

// 자바스크립트
array.forEach((element, index, origin) => {
  console.log(element);
  console.log(index);
  console.log(origin);
  console.log("javascript --------");
});

// 제이쿼리
$(array).each((index, element) => {
  console.log(index);
  console.log(element);
  console.log("jQuery -------- ");
});

$(array).each((index, element) => {
  //   const result =
  //     "<h4><a href='" + element.link + "'>" + element.name + "</a></h4>";
  //   $("#each-test").append(result);
  // append 방식
  //   $("#each-test").append(`<h4><a href='${element.link}'>${e.name}</a><h4>`);

  // html 방식
  output += `<h4><a href='${e.link}'>${e.name}</a></h4>`;
});
$("#each-test").html(output);
