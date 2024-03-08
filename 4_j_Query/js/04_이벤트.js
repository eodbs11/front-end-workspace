// 1. 이벤트 연결
// 1) on, off
/*
$("#area1").on("mouseenter", (event) => {
  $(event.target).css("background-color", "beige").text("마우스가 올라감");
});
*/
// 마우스가 내려갈 때(mouseleave)
// -> 배경 색상 : hotpink, 글자는 '마우스가 내려감'
/*
$("#area1").on("mouseleave", (event) => {
  $(event.target).css("background-color", "hotpink").text("마우스가 내려감");
});
*/
/*
$("#area1").on("mouseenter mouseleave", (event) => {
  if (event.type === "mouseenter") {
    // mouseenter인 경우
    $(event.target).css("background-color", "beige").text("마우스가 올라감");
  } else if (event.type === "mouseleave") {
    // mouseleave인 경우
    $(event.target).css("background-color", "hotpink").text("마우스가 내려감");
  }
});

$("#area1").on("click", (event) => {
  // 배경 색상은 white, 텍스트는 '',
  // mouseenter, mouseleave 이벤트 제거
  $(event.target)
    .css("background-color", "white")
    .text("")
    .off("mouseenter mouseleave");
});
*/

$("#area1").on({
  mouseenter: (event) => {
    $(event.target).css("background-color", "beige").text("마우스가 올라감");
  },
  mouseleave: (event) => {
    $(event.target).css("background-color", "hotpink").text("마우스가 내려감");
  },
  click: (event) => {
    $(event.target)
      .css("background-color", "white")
      .text("")
      .off("mouseenter mouseleave");
  },
});

// 2) one
$("#area2").one("click", () => {
  alert("처음이자 마지막으로 이벤트 핸들러 실행");
});

// 2. 키보드 이벤트
// 1) keydown, keypress, keyup
// keydown : 키보드가 눌려질 때
/*
  $("#textarea1").keydown((e) => {
    console.log(`keydown - e.key : ${e.key}, e.keyCode : ${e.keyCode}`);
  });
  */
// keypress : 글자가 입력될 때
/*
  $("#textarea1").keypress((e) => {
    console.log(`keypress - e.key : ${e.key}, e.keyCode : ${e.keyCode}`);
  });
  */
// keyup : 키보드가 떼어질 때
/*
  $("#textarea1").keyup((e) => {
    console.log(`keyup - e.key : ${e.key}, e.keyCode : ${e.keyCode}`);
  });
  */

// on을 이용해서 한꺼번에~
$("#textarea1").on({
  keydown: (e) => {
    console.log(`keydown - e.key : ${e.key}, e.keyCode : ${e.keyCode}`);
  },
  keypress: (e) => {
    console.log(`keypress - e.key : ${e.key}, e.keyCode : ${e.keyCode}`);
  },
  keyup: (e) => {
    console.log(`keyup - e.key : ${e.key}, e.keyCode : ${e.keyCode}`);
  },
});

$("#textarea2").on("keyup", (e) => {
  console.log($(e.target).val().length);
  let target = $(e.target);
  let textLength = target.val().length;
  let maxLength = parseInt($("#maxLength").text());

  console.log(typeof maxLength);

  //   if (textLength > maxLength) {
  //     target.val(target.val().substr(0, maxLength));
  //   } else if(){

  //   }else {
  //     $("#idCheck").text(textLength);
  //   }
});

// 3. trigger() 메서드
$("#area3").click(() => {
  let counter = $("#counter2");
  let currentCount = parseInt(counter.text());
  counter.text(++currentCount);
});

$("#btn").click(() => {
  $("#area3").trigger("click");
});
