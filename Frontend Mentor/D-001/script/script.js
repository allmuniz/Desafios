var description = document.querySelector('div#txt1')
var img1 = document.querySelector('img#plus1')
var img2 = document.querySelector('img#plus2')
var img3 = document.querySelector('img#plus3')
var img4 = document.querySelector('img#plus4')
function openparagraph(){
    if(itens.style.display == 'block'){
        itens.style.display = 'none'
        img1.src = 'images/icon-plus.svg'       
    }else{
        itens.style.display = 'block'
        img1.src = 'images/icon-minus.svg'
    }
}
function openparagraph2(){
    if(itens2.style.display == 'block'){
        itens2.style.display = 'none'
        img2.src = 'images/icon-plus.svg'
    }else{
        itens2.style.display = 'block'
        img2.src = 'images/icon-minus.svg'
    }
}
function openparagraph3(){
    if(itens3.style.display == 'block'){
        itens3.style.display = 'none'
        img3.src = 'images/icon-plus.svg'
    }else{
        itens3.style.display = 'block'
        img3.src = 'images/icon-minus.svg'
    }
}
function openparagraph4(){
    if(itens4.style.display == 'block'){
        itens4.style.display = 'none'
        img4.src = 'images/icon-plus.svg'
    }else{
        itens4.style.display = 'block'
        img4.src = 'images/icon-minus.svg'
    }
}