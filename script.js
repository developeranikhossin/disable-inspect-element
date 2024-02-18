document.onkeydown=function(e){
    if(Event.keyCode === 123)
    {
        return false;
    }
    if(e.ctrlKey && e.keyCode === 'I'.charCodeAt(0))
    {
        return false
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0))
    {
        return false;
    }
    if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0))
    {
        return false;
    }
}

document.oncontextmenu = () => {
    alert("don't try right click")
    return false
}

// document.onkeydown = e => {
//     if(e.key == "F12"){
//         alert("don't try to another element")
//         return false
//     }
//     if(e.ctrlKey && e.key == "u"){
//         alert("don't try view page sources")
//         return false
//     }
//     if(e.ctrlKey && a.key == "c"){
//         alert ("don't try to copy page element")
//         return false
//     }
//     if(e.ctrlKey && e.key == "v"){
//         alert("don't try to paste anything to page")
//         return false
//     }
// }
