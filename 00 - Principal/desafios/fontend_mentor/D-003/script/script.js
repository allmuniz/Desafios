function collectValue(numero){
    window.alert(numero);
    const mybutton = document.querySelector("button#button1")
    if(mybutton.style.backgroundColor === "rgba(255, 255, 255, 0.050)"){
        mybutton.style.backgroudColor = "rgb(149, 158, 172)";
    }else{
        mybutton.style.backgroundColor = "rgba(255, 255, 255, 0.050)"
    }
}