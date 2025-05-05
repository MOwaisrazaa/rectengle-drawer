topVal = null;
leftVal = null;

function colorValue() {
    return Math.floor(Math.random() * 257);
}

function drawRectengle(div, {clientY , clientX}){
    // console.log(event)
    // console.log(div)
    console.log(clientY, clientX)
    if(topVal == null && leftVal == null){
        topVal = clientY;
        leftVal = clientX;
    } else{
        var color = `rgba(${colorValue()},${colorValue()},${colorValue()},0.5)`
        var height = Math.abs(topVal - clientY)
        var width = Math.abs(leftVal - clientX)

        div.innerHTML += `<div class='box' style="height: ${height}px;
         width: ${width}px; backgroung-color: ${color}; top: ${topVal}px; 
         left: ${leftVal}px; "/>`

         topVal = null;
         leftVal = null;
    }



}