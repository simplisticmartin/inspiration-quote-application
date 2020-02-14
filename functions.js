
//window.onload = function () 
//{
    let randomPicker = Math.floor(Math.random()* numberOfQuotes);
    document.getElementById("author").innerHTML += quotes[randomPicker]["quote"]; //+ String(numberOfQuotes);
    document.getElementById("picUrl").src = quotes[randomPicker]["picUrl"];
//}