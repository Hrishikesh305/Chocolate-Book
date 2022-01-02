
$('#F')
    .mouseenter(()=>(document.getElementById('Filterimg').src = 'Images\\Filter_grey.png'))
    .mouseleave(()=>(document.getElementById('Filterimg').src = 'Images\\Filter.png'))
    
$('#S')
    .mouseenter(()=>(document.getElementById('Spreadsheetimg').src = 'Images\\Spreadsheet_grey.png'))
    .mouseleave(()=>(document.getElementById('Spreadsheetimg').src = 'Images\\Spreadsheet.png'))

function removeNavStyle(){
    let navBtns = document.getElementsByClassName('navbtn')
    for(navIndex=0; navIndex<navBtns.length; navIndex++){
        navBtns[navIndex].style.borderLeft = "black solid 0px"
    }
}
//nav bar setting


var orderButton = document.getElementById("orders")
orderButton.onclick = function(){
    removeNavStyle()
    orderButton.style.borderLeft = "grey solid 4px"
    currentWindow = "orders"
    changeTable()
}


var batchButton = document.getElementById("batchs")
batchButton.onclick = function(){
    removeNavStyle()
    batchButton.style.borderLeft = "grey solid 4px"
    currentWindow = "batches"
    changeTable()
}

var customerButton = document.getElementById("people")
customerButton.onclick = function(){
    removeNavStyle()
    customerButton.style.borderLeft = "grey solid 4px"
    currentWindow = "people"
    changeTable()
}

