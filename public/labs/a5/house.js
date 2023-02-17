function renderMansion() {
    const mansion = {
        rooms: 4,
        baths: 3,
        sqft: 2500
    }
    const roomElement = document.getElementById('room')
    const bathElement = document.getElementById('baths')
    const sqftElement = document.getElementById('sqft')
    roomElement.innerText = mansion.rooms
    bathElement.innerText = mansion.baths
    sqftElement.innerText = mansion.sqft
}

//same as above, below is using jQuery

const mansion = {
    rooms: 4,
    baths: 3,
    sqft: 2500
}
function renderMansionWithJQuery() {
    const roomElement = jQuery('#jroom')
    const bathElement = jQuery('#jbaths')
    const sqftElement =jQuery('#jsqft')

    roomElement.html(mansion.rooms)
    bathElement.html(mansion.baths)
    sqftElement.html(mansion.sqft)
}




// function renderStudents(students) {
//     const studentsElement = document.getElementById('students')
//     let lineItems = ''
//     for (let j = 0; j < students.length; j++) {
//         lineItems += `<li>${students[j].name}</li>`
//     }
//     studentsElement.innerHTML = lineItems
// }


function renderStudentsModern(students) {
    const studentsElement = document.getElementById('students')
    let lineItems = students.map(
        (student) => `<li>${student.name}</li>`
    ).join('') //join to one big string, no more commas
    studentsElement.innerHTML = lineItems
}


function renderStudentsWithJQuery(students) {
    const studentsElement = $('#jstudents')
    for (let k = 0; k < students.length; k++) {
        const lineItems = $(`<li>${students[k].name}</li>`)
        studentsElement.append(lineItems)
    }
}



renderMansion()
renderMansionWithJQuery()
renderStudentsModern([
    {name:'Alice'},
    {name:'Bob'},
    {name:'Charlie'},
    {name:'Dan'},
    {name:'Edward'}])
renderStudentsWithJQuery([
    {name:'Alice'},
    {name:'Bob'},
    {name:'Charlie'},
    {name:'Dan'}])





const lab = $('#lab')
lab.append(`
    <h1>Welcome to Javascript</h1>
`)