// bring in data from database
// fundaments
// Bring data from the data from the database
// identify where we will be placing the data
// select it by id (or to grab)
// fetch the data
// convert to readable format => json
// display
// loop through the data
// apppend the data

// GET POST PUT DELETE
// GET
let postform = document.getElementById('postform')
let entry_list = document.getElementById('entries')
let dataUrl = 'http://localhost:3000/diaryEntries'
fetch (dataUrl)
.then(res => res.json())  //promise
.then(data => displayData(data))  //json

displayData = (data) => {
    data.map(i => {
        let entry = document.createElement('div')
        entry.innerHTML = `
        <h3>Title: ${i.title}</h3>
        <h6>Date: ${i.date}
        <p> ${i.content}</p>
        `

        console.log(entries)
        entry_list.appendChild(entry)
    })
}

// POST REQUEST
//posting our experiences
// function

//access the inout values an store them in our database
// fetch
// define method
// define headers and bodies
// convert to json
// add an event listener

let addDiaryentry = (event) =>{
    event.preventDefault()
    let title = document.getElementById('title').value
    let date = document.getElementById('date').value
    let experience = document.getElementById('experience').value
  

    const entryObj = {
        title:title,
        date:date,
        content:experience,
    }
    // two parameters
    fetch(dataUrl,{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        body: JSON.stringify(entryObj)
    })
.then(res => res.json())
.then(data => console.log(data))

}
postform.addEventListener('submit',addDiaryentry)