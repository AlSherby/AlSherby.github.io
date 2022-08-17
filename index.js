let btn1 = document.getElementById ("el1")
let btn2 = document.getElementById ("el-4")

let count = 1


function score() {
    count += 1
    btn1.textContent = count
}

function e2() {
        count -= 1
        btn1.textContent = count

}
// whaaaa
let count1 = 1 

function el7() {
        count1 += 1
        btn2.textContent = count1

}

function el8() {

    count1 -= 1
    btn2.textContent = count1
}
function reset1() {
    count = 0
    count1 = 0 
    btn2.textContent = count
    btn1.textContent = count1
}

// ----------------FOUL

let btn3 = document.getElementById("el-2")
let btn4 = document.getElementById ("el-3")

let foul =1 
function e3() {
    foul += 1
    btn3.textContent = foul
    
}

function e4() {
    foul -= 1
    btn3.textContent = foul
}

let foul1 = 1 
function el5() {
    foul1  += 1 
    btn4.textContent = foul1 
}

function el6() {
    foul1  -= 1
    btn4.textContent = foul1 
}
function what1() {
    foul = 0
    foul1 = 0
    btn3.textContent = foul
    btn4.textContent = foul1
}
// QUARTER
let qrtr = document.getElementById ('qrtr-el')
let qrtr1 = 1
function raw() {
    qrtr1 += 1
    qrtr.textContent = qrtr1 
}

function btne2() {
    qrtr1 -= 1
    qrtr.textContent= qrtr1
}