document.getElementById('submit').onclick = function() {
    var ID = document.getElementById('id_').value;
    var pass = document.getElementById('pass_').value;
    if (ID === "hyewon" && pass === "12345678") {
        alert("로그인 성공");
        window.location.href = "main.html";
    }
    else {
        alert("로그인 실패");
        window.location.href = "";
    }
}



lightbox.option({
    resizeDuration:500,
    wrapAround: true,
    disableScrolling: false,
    fitImagesInViewport:false
})




async function fetchHtmlAsText(url) {
    return await (await fetch(url)).text();
}

async function importPage(target) {
    document.querySelector('#' + target).innerHTML = await fetchHtmlAsText(target + '.html');
}
importPage('slide_index');
