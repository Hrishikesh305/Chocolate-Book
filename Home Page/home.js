
var table = document.getElementById("maintbl");
var rowNumber= 10
var infoset = [1, "Name", "adrs", "order", "Cancelled", "2021-12-12", "Waiting"]
var currentInfoSet = [12, 31, 10, 11, 1, 2, 64, 34, 5, 3]
//The cardinal order of the info set is the row ID
//InfoID = the content of Id


for(var rowID=0; rowID <= rowNumber; rowID++){
    var tableRow = `<tr id="row${rowID}">
<td><div class="ID" id="id${rowID}" contenteditable="True"></div></td>
<td><div class="name" id="name${rowID}" contenteditable="True"></div></td>
<td><div class="address" id="adrs${rowID}" contenteditable="True"></div></td>
<td><div class="Order" id="order${rowID}" contenteditable="True"></div></td>

<td>
    <select name="Order_Status" class="Status_Selector" id="stat${rowID}">
        <option value="Inquiry">Inquiry</option>
        <option value="Cancelled">Cancelled</option>
        <option value="Pending">Pending</option>
        <option value="Making">Making</option>
        <option value="Ready">Ready</option>
        <option value="Shipped">Shipped</option>
        <option value="Closed">Closed</option> 
    </select>
</td>
<td>
    <input type="date" class="date" name="date" id="date${rowID}">
</td>
<td>
    <select name="Payment_Status" class="Pay_Selector" id="pay${rowID}">
        <option value="Waiting">Waiting</option>
        <option value="Paid_Net">Paid (Net Banking)</option>
        <option value="Paid_Cash">Paid (Cash)</option>
        <option value="Paid_Gpay">Paid (Gpay)</option>
        <option value="Give Details">Give Details</option>
        <option value="Overdue">Overdue</option> 
    </select> 
</td>
</tr>`
    table.insertAdjacentHTML('beforeend', tableRow)

}
function implementInfoset(infoSet, rowID){
    let idSkeletons = ["id", "name", "adrs", "order", "stat", "date", "pay"]
    for(var fieldNo = 0; fieldNo < 4; fieldNo++ ){
        var elementId = idSkeletons[fieldNo]+rowID+""
        console.log(elementId)
        document.getElementById(elementId).innerText = infoSet[fieldNo]
    }
    document.getElementById(`stat${rowID}`).value = infoSet[4]
    document.getElementById(`date${rowID}`).value = infoSet[5]
    document.getElementById(`pay${rowID}`).value = infoSet[6]

}
implementInfoset(infoset, 4)

function focusOnNext(currentid){
    let idSkeletons = ["id", "name", "adrs", "order", "stat", "date", "pay"]
    let Skeleton = currentid.replace(/[0-9]/g, '');
    let SkeletonId = idSkeletons.indexOf(Skeleton)
    var oldNumber = Number(currentid.replace(/[a-z]/g, ''))
    if (SkeletonId != 6 && oldNumber<= rowNumber){
        var nextSkeleton = idSkeletons[SkeletonId+1]
        var newNumber = oldNumber
        
    }
    else if (SkeletonId==6 && oldNumber<= rowNumber){
        var nextSkeleton = idSkeletons[0]
        var newNumber = oldNumber+1
    } 
    else if (oldNumber== rowNumber){
        var nextSkeleton = idSkeletons[0]
        var newNumber = 0
    }
    
    return nextSkeleton + newNumber

}
var keys = {}
function handleKeyPress(event) {
    let { keyCode, type } = event;
    let isKeyDown = (type == 'keydown');
    keys[keyCode] = isKeyDown;

    // test: enter & shift key pressed down 
    if(isKeyDown && keys[13] && keys[16]){
        console.log('enter + shift pressed')
    }
    else if(isKeyDown && keys[13] && !keys[16] && document.activeElement.nodeName != 'SELECT'){
        var currentId = document.activeElement.id;
        event.preventDefault()
        if (document.activeElement.nodeName=='INPUT'){
            let changedValue = document.activeElement.value
            console.log(`The new value of ${currentId} is ${changedValue}.`)
        }else if(document.activeElement.id !='textfield'){
            let changedValue = document.activeElement.innerText
            console.log(`The new value of ${currentId} is ${changedValue}.`)
        }
        document.getElementById(focusOnNext(currentId)).focus()
    }
    else if(isKeyDown && keys[13] && !keys[16] && document.activeElement.nodeName == 'SELECT'){
        var currentId = document.activeElement.id;
        document.getElementById(focusOnNext(currentId)).focus()
    }

};

window.addEventListener("keyup", handleKeyPress);
window.addEventListener("keydown", handleKeyPress);
addEventListener('keyup', selectPulse, false)
addEventListener('mouseup', ifSelectInput, false)//for selections
table.addEventListener("focusout",onLostFocus, false)
function ifSelectInput(){
    var selectionType = document.activeElement.nodeName
    if(selectionType =='SELECT'){
        let changedValue = document.activeElement.value
        console.log(`The new value of ${document.activeElement.id} is ${changedValue}.`)
    }
}
function selectPulse(event){
    var selectionType = document.activeElement.nodeName
    if(selectionType =='SELECT' && (event.key=='ArrowUp'||event.key == 'ArrowDown')){
        let changedValue = document.activeElement.value
        console.log(`The new value of ${document.activeElement.id} is ${changedValue}.`)
    }
}

function onLostFocus(event){
    if (event.target.nodeName=='INPUT'){
        let changedValue = event.target.value
        console.log(`The new value of ${document.activeElement.id} is ${changedValue}.`)
    }
    
}

 