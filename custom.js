
function firstClassChange(isIncrease){
    const getFirstClassInput = document.getElementById("firstClassInput");
    const getFirstClassInputNumber = parseFloat(getFirstClassInput.value);
    let totalFirstClassCost = getFirstClassInputNumber;
    if (isIncrease == true){
        totalFirstClassCost = getFirstClassInputNumber + 1;
    }
    if (isIncrease == false && getFirstClassInputNumber >0 ){
        totalFirstClassCost = getFirstClassInputNumber -1;
    }
    getFirstClassInput.value = totalFirstClassCost;

}

function economyClassChange(isIncrease){
    const getEconomyClassInput = document.getElementById("economyClassInput");
    const getEconomyClassInputNumber = parseFloat(getEconomyClassInput.value);
    let  totalEconomyClassCost = getEconomyClassInputNumber;
    if (isIncrease == true){
        totalEconomyClassCost = getEconomyClassInputNumber + 1;
    }
    if (isIncrease == false && getEconomyClassInputNumber >0 ){
        totalEconomyClassCost = getEconomyClassInputNumber - 1;
    }
    getEconomyClassInput.value = totalEconomyClassCost;

}

    document.getElementById("plus").addEventListener("click" , function(){
    firstClassChange(true);
    subtotal();
})

    document.getElementById("minus").addEventListener("click" , function(){
    firstClassChange(false);
    subtotal();
})




document.getElementById("economyPlus").addEventListener("click" , function(){
    economyClassChange(true);
    subtotal();
})

document.getElementById("economyMinus").addEventListener("click" , function(){
    economyClassChange(false);
    subtotal();
})


function subtotal(){
    const subTotal = document.getElementById("subTotalValue").innerText;
    const subTotalNumber = parseFloat(subTotal);

    const firstClassNumber =  document.getElementById("firstClassInput").value;
    const economyClassNumber = document.getElementById("economyClassInput").value;
    const totalSubTotal = (firstClassNumber*150)+(economyClassNumber*100);
    document.getElementById("subTotalValue").innerText = totalSubTotal;



    //Vat
    const vat = document.getElementById("vat").innerText;
    const vatNumber = parseFloat(vat);
    
    const newVat = 0.1* totalSubTotal;
    document.getElementById("vat").innerText = newVat;

    //Total
    const total = document.getElementById("total").innerText;
    const totalNumber = parseFloat(total);

    const newTotal = totalSubTotal + newVat;
    document.getElementById("total").innerText = newTotal;

}


const getBookNow = document.getElementById("bookNow");
getBookNow.addEventListener("click", function(){
    const getFirstPage = document.getElementById("firstPage");
    getFirstPage.style.display = "none" ;
    const getSecondPage = document.getElementById("secondPage");
    getSecondPage.style.display = "block";
    document.body.style.backgroundImage = "none";


    const firstClassQuantity = document.getElementById("firstClassQuantity").innerText;
    const a = document.getElementById("firstClassInput").value;   
    document.getElementById("firstClassQuantity").innerText = a;

    const secondClassQuantity = document.getElementById("secondClassQuantity").innerText;
    const b = document.getElementById("economyClassInput").value;   
    document.getElementById("secondClassQuantity").innerText = b;

    const firstClassAmount = document.getElementById("firstClassAmount").innerText;
    const c = a * 150;   
    document.getElementById("firstClassAmount").innerText = c;

    const getEconomyClassAmount = document.getElementById("economyClassAmount").innerText;
    const d = b * 100;   
    document.getElementById("economyClassAmount").innerText = d;

    const getTotalVat = document.getElementById("getTotalVat").innerText;
    const e = document.getElementById("vat").innerText;
    document.getElementById("getTotalVat").innerText = e;

    const getFullAmount = document.getElementById("fullAmount").innerText;
    const f = document.getElementById("total").innerText;
    document.getElementById("fullAmount").innerText = f;

})


