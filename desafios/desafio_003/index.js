const clickButton = document.getElementById('button')
const resultArea = document.getElementById('resultArea')
clickButton.addEventListener('click', function outcome() {

    let num1 = Number(document.getElementById('num-one').value)
    let num2 = Number(document.getElementById('num-two').value)
    let total = 0

    add = document.getElementById('box1')
    subtract = document.getElementById('box2')
    multiply = document.getElementById('box3')
    divide = document.getElementById('box4')
   
    if(add.checked) {
        total = num1 + num2    
    }
    else if (subtract.checked) {
        total = num1 - num2     
    } 
    else if(multiply.checked) {
        total = num1 * num2   
    }
    else if (divide.checked) {
        total = num1 / num2   
    }

    resultArea.textContent = total 
})