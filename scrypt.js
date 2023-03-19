var slct=document.getElementById("slct")
var inpt=document.getElementById("inpt")
var kzt=document.getElementById("kzt")
var usd=document.getElementById("usd")
var euro=document.getElementById("euro")


function moneyConvert(){

    let money=inpt.value
    let choise=slct.options[slct.selectedIndex].text
    if(choise=="KZT"){
        kzt.value="-"
        usd.value=(money/431).toFixed(2)
        euro.value=(money/509).toFixed(2)
    }
    else if(choise=="USD"){
        kzt.value=money*429
        usd.value="-"
        euro.value=((money*429)/509).toFixed(2)
    }
    else if(choise=="EUR"){
        kzt.value=money*507
        usd.value=((money*507)/431).toFixed(2)
        euro.value="-"
    }
}




