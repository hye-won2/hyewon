// document.getElementById('submit').onclick = function() {
//     var ID = document.getElementById('id_').value;
//     var pass = document.getElementById('pass_').value;
//     if (ID === "hyewon" && pass === "1234") {
//         alert("로그인 성공");
//         window.location.href = "main.html";
        
//     }
//     else {
//         alert("로그인 실패");
//         window.location.href = "";
//     }
// }


// function enterkey() {
// if (window.event.keyCode == 13) {
//      // 엔터키가 눌렸을 때 실행할 내용
//      $("#submit").click();
// }}


document.getElementById('submit').onclick = function() {
    var pass = document.getElementById('pass_').value;
    if (pass === "1967") {
        // alert("로그인 성공");
        window.location.href = "main.html";
        
    }
    else {
        alert("잘못된 정보입니다.");
        window.location.href = "";
    }
}


function enterkey() {
if (window.event.keyCode == 13) {
     // 엔터키가 눌렸을 때 실행할 내용
     $("#submit").click();
}}