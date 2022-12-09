function OpenPage() {
    localStorage.clear();
    var page = document.getElementById("page1").textContent;
    localStorage.setItem('page', page)
}
function OpenPage1() {
    localStorage.clear();
    var page = document.getElementById("page2").textContent;
    localStorage.setItem('page', page)
}
function OpenPage2() {
    localStorage.clear();
    var page = document.getElementById("page3").textContent;
    localStorage.setItem('page', page)
}


$.getJSON("Json/Data.json", function (data) {
    var tilte = localStorage.getItem('page');

    console.log(tilte)

    for (let prop in data) {
        for (let x in prop) {
            if (data[prop][x].tilte === tilte) {
                console.log(data[prop][x])
                $("title").html(data[prop][x].title);
                $("a.nav-link2:first").html(data[prop][x].Headers);
                $("div.title h2.text-title").html(data[prop][x].tilte);
                $("div.thumbnail figure img").attr("src", data[prop][x].image);
                $("a#writer").html(data[prop][x].writer);
                $("a#date").html(data[prop][x].date);
                $("div#para p#para_1").html(data[prop][x].paragraph1);
                $("div#para p#para_2").html(data[prop][x].paragraph2);
                $("div#para p#para_3").html(data[prop][x].paragraph3);
                $("a#page1").attr("href", data[prop][x].src);
                $("div.py-2 a#Page_1").attr("href", data[prop][x].src);
                $("a#page1").html(data[prop][x].previous);
                $("img#footerImg").attr("src", data[prop][x].footerImg);
                $("a#page2").attr("href", data[prop][x].src1);
                $("div.py-2 a#Page_2").attr("href", data[prop][x].src1);
                $("a#page2").html(data[prop][x].next);
                $("img#footerImg1").attr("src", data[prop][x].nextImg);
            }
        }
    }
})