let homeCount = 0
let guestCount = 0

let homeCountEL = document.getElementById("displayhome")
let guestCountEL = document.getElementById("displayguest")


function homeplusOne() {
    homeCount += 1
    homeCountEL.textContent = homeCount
}


function plusTwo() {
    homeCount += 2
    homeCountEL.textContent = homeCount
}

function plusThree() {
    homeCount += 3
    homeCountEL.textContent = homeCount
}

function homeReset() {
    homeCountEL.textContent = count = 0
    count = 0
} 

function guestPlusOne() {
    guestCount += 1
    guestCountEL.textContent = guestCount
}

function guestPlusTwo() {
    guestCount += 2
    guestCountEL.textContent = guestCount
}

function guestPlusThree() {
    guestCount += 3
    guestCountEL.textContent = guestCount
}

function guestReset() {
    guestCountEL.textContent = count = 0
    count = 0

}