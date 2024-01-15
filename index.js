$(document).ready(function () {
    let cards = {};
    cards = JSON.parse(localStorage.getItem("savedCards"));
    if (cards === null) {
        cards = {0:40,1:40,2:40,3:40,4:40};
        localStorage.setItem("savedCards", JSON.stringify(cards))
        console.log("create success")
    } else {
        $("#card1").prop("value", cards[0]);
        $("#card2").prop("value", cards[1]);
        $("#card3").prop("value", cards[2]);
        $("#card4").prop("value", cards[3]);
        $("#card5").prop("value", cards[4]);
        $("#insert1").attr("value", $("#card1").val());
        $("#insert2").attr("value", $("#card2").val());
        $("#insert3").attr("value", $("#card3").val());
        $("#insert4").attr("value", $("#card4").val());
        $("#insert5").attr("value", $("#card5").val());
        console.log("load success")
    }

    $("#submit").on("click", function () {
        cards[0] = ($("#card1").val());
        cards[1] = ($("#card2").val());
        cards[2] = ($("#card3").val());
        cards[3] = ($("#card4").val());
        cards[4] = ($("#card5").val());
        console.log(cards)
        localStorage.setItem("savedCards", JSON.stringify(cards))
    })

    $("#insert1").on("change", function () {
        $("#card1").prop("value", $("#insert1").val());
    })
    $("#insert2").on("change", function () {
        $("#card2").prop("value", $("#insert2").val());
    })
    $("#insert3").on("change", function () {
        $("#card3").prop("value", $("#insert3").val());
    })
    $("#insert4").on("change", function () {
        $("#card4").prop("value", $("#insert4").val());
    })
    $("#insert5").on("change", function () {
        $("#card5").prop("value", $("#insert5").val());
    })
});


function calculate() {
    let p = 0;
    p = 100+parseInt(document.getElementById('card1').value)+parseInt(document.getElementById('card2').value)/5+parseInt(document.getElementById('card3').value)/5+parseInt(document.getElementById('card4').value)/5+parseInt(document.getElementById('card5').value)/5;
    document.getElementById('result').innerHTML = p/100;
}