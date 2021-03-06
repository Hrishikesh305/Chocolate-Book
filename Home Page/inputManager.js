console.log(currentWindow)
addEventListener("keyup", enterKeyRegulator);
addEventListener("keydown", enterKeyRegulator);
addEventListener('keyup', arrowKeySelection, false)
addEventListener('mouseup', ifSelectInput, false)//for selections
addEventListener("focusout",onLostFocus, false)// for date


function focusOnNext(currentId){
    let idSkeletons
    if(currentWindow=="orders"){
        idSkeletons = ["id", "name", "adrs", "order", "stat", "date", "pay"]
    }
    else if(currentWindow=="batches"){
        idSkeletons = ["id", "notes", "bstat", "date", "nuts"]
    }
    else if(currentWindow=="people"){
        idSkeletons = ["id", "name", "adrs", "ph", "note"]
    }
    var numberOfColumns = idSkeletons.length-1 
    let Skeleton = currentId.replace(/[0-9]/g, '');
    let SkeletonId = idSkeletons.indexOf(Skeleton)
    var oldNumber = Number(currentId.replace(/[a-z]/g, ''))
    if (SkeletonId != numberOfColumns && oldNumber<= numberOfRows){
        var nextSkeleton = idSkeletons[SkeletonId+1]
        var newNumber = oldNumber
        
    }
    else if (SkeletonId==numberOfColumns && oldNumber<numberOfRows){
        var nextSkeleton = idSkeletons[0]
        var newNumber = oldNumber+1
    } 
    else if (oldNumber==numberOfRows){
        var nextSkeleton = idSkeletons[0]
        var newNumber = 0
    }
    console.log(nextSkeleton+newNumber)
    return nextSkeleton + newNumber

}
var keys = {}
function enterKeyRegulator(event) {
    let { keyCode, type } = event;
    let isKeyDown = (type == 'keydown');
    keys[keyCode] = isKeyDown;

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
        event.preventDefault();
    }

};

function ifSelectInput(){
    var selectionType = document.activeElement.nodeName
    if(selectionType =='SELECT'){
        let changedValue = document.activeElement.value
        console.log(`The new value of ${document.activeElement.id} is ${changedValue}.`)
    }
}

function arrowKeySelection(event){
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
