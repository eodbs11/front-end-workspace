// 1. filtering 메서드 
// 선택된 요소들중 첫 번째 요소를 가져와서 스타일 변경
$("h4").first().css("font-size", "4rem"); 
$("h4" :first).css("color", "red");
$("h4").first().css("font-size", "background-color", yellow); 
// 선택된 요소들 중 마지막 요소를 가져와서 스타일 변경(last) 
// -> font-size: 3rem 변경
$("h4:last").css("font-size", "3rem"); 
// 선택된 요소들 중 3번쨰 요소를 가져와서 스타일 변경 
// : eq(인덱스) -> 해당 텍스트를 변경! 텍스트 변경 : text 
// 텍스트내용은 "eq에 의해 선택되었습니다"
$("h4.eq(2)").text("eq에 의해 선택되었습니다");

// 선택된 요소들 중 홀수 인덱스에 요소를 가져와서 스타일 변경
// 홀수(odd) / 짝수(even)
// 배경색 : hotpink, 글자색 : white

$("h4.odd").css({"background-color": "hotpink", "color": "white"});

// 선택된 요소들 중 특정 요소가 아닌 요소들을 선택해서 스타일 변경
// $("h4:not(.test")
// $("h4").filter(":not(.test)")
// $("h4").not(".test").css({"background-color": "orange", "color": "white"})

// 2. Ancestors 메서드
// 선택된 요소의 바로 상위에 있는 부모 요소
console.log($("span").parent());
// 선택된 요소의 모든 상위 요소
console.log($("span").parents());

// span 요소의 부모 요소에 스타일 적용
// : 글자색 - red, 테두리 : 2px solid
$("span").parent().css({ "color": "white", border:"2px solid"});


// li 요소의 모든 상위 요소에 스타일 적용
// : 글자색 - blue
$("li").parents().css(color:"blue");

// li 요소의 상위 요소 중 div만 스타일 적용
// : 테두리 : 2px dashed tomato
(: ㄱㄴㅇ)
// span 요소부터 div요소 이전까지 상위 요소 스타일 설정
// 배경색 : lavenderblush
$("span").parentsUtill("div").css("backgrond-color", "lavenderblush");

// 3. Descendants 메서드
let style1={color:"deeppink", border:"2px solid" };
let style2={color:"blue", border:"2px solid" };
let style3={color:"green", border:"2px solid" };
let style4={color:"hotpink", border:"2px solid" };
let style5={color:"deeppink", border:"2px solid" };

console.log($(".wrap").children());
console.log($(".wrap").find("span"));

//클래스가 wrap인 요소의
// 자식 요소들에 styl1 적용
$(".wrap").children().css(style1);
// 자식의 자식 요소들에 style2 적용
$(".wrap").children().children().css(style2);
// 자식의 자식 요소중 ul 태그의 style3 적용
$(".wrap").children().children("ul").css(style3);
// 자식의 자식의 자식요소중 li 태그의 style4 적용
$(".wrap").children().children().children("li").css(style4);
// 모든 하위 요소 중 span 태그의 style5 적용
$(".wrap").find("span").css(style5);

// 4. Sideways 메서드
// h2 요소의 형제 요소들에 style3 적용
$("wrap2 h2").siblings().css(style3);

//h2 요소의 형제 요소중 p 요소에 style2 적용
$("wrap2 h2").siblings("p").css(style2);

//h2 요소의 다음 형제 요소에 style1 적용
$(".wrap2 h2").next().css(style1);

//h2 요소의 다음에 오는 모든 형제 요소에 스타일 적용
$(".wrap2 h2").nextAll().css("background", "pink");

// h2 요소 이후부터 p 요소 이전에 모든 형제 요소에 스타일 적용
$(".wrap h2").nextUntil("p").css("border", "dashed");

// h2 요소의 이전(prev) 형제 요소에 style5 적용
$(".wrap2 h2").prev().css(style5);
// h2 요소의 이전에 오는 모든(prevAll) 형제 요소에
// 배경색 : moccasin
$(".wrap2 h2").prevAll().css("background", "moccasin");
// h2 요소 이전부터 p요소 이후까지(prevUntil)의 모든 현재 요소에
// 글자크기 : 2rem
$(".wrap2 h2").prevUntil("p").css("font-size", "2rem");




