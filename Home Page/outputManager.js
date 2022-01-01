
var table = document.getElementById("maintbl");
var numberOfRows= 10
var infoset = [1, "Name", "adrs", "order", "Cancelled", "2021-12-12", "Waiting"]
var currentInfoSet = [12, 31, 10, 11, 1, 2, 64, 34, 5, 3]
//The cardinal order of the info set is the row ID
//InfoID = the content of Id


for(var rowID=0; rowID <= numberOfRows; rowID++){
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



 