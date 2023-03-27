// This object will hold all of the data for the notes
let notes = {
    "week1":{
        "Crazy": {
            "notes" :"This is topic 1 notes",
            "code" : "this should be a block of code",
            "Lecture": "This is where  lecture notes would go" }
        ,
        "Fun": {
            "notes" :"This is topic 2 notes",
            "code" : "this should be a block of code",
            "Lecture": "This is where  lecture notes would go" }
    },
    "week2" : {
        "Coding": {
            "notes" :"Notes for topic 3",
            "code" : "this should be a block of code for topic ONE",
            "Lecture": "This is where  lecture notes would go for Topic ONE" }
        ,
        "Time": {
            "notes" :"block of notes for topic 4",
            "code" : "this should be a block of code for topic two",
            "Lecture": "This is where  lecture notes would go for topic 2" }
    }
}

/* the last item in the weeks array should be preselected. the first item in the selected week should be preselected
*/


// functionality to add a topic into the content array



// // when a week button is pushed the topic navigation bar should auto populate with the topics under the week1 section of notes object

let weekDiv = document.querySelector("#weekNav")
weekDiv.addEventListener("click", (w) => {
    let week = w.target.id
    let topics = Object.keys(notes[week])

    let prevButton = document.querySelectorAll("#topicNav > button")
     for(button of prevButton){
         button.remove()
     }
    for(key of topics){
      let topic = document.createElement('button')
        topic.innerHTML = key;
        let nav = document.querySelector('#topicNav')
        nav.append(topic)
    }
})

//when a topic is selected the header should change to be the same as that topic.
let topicDiv = document.querySelector("#topicNav")
let header = document.querySelector('#title')
topicDiv.addEventListener("click", t => {
    let topic = t.target.innerText
    header.innerHTML = `<h1> ${topic} </h1>`
    

})





//function to create an edit page or prefill existing page to be edited
// add new button into the topic nav : In object it should find the current week and create a new key value pair
// place an input text box where h2 currently sits. The contents of this box will populate the topic key in the object
// create a input text field where the content box currently reside.



// on window load the navigation bars should be created from the above arrays,
    // first select the weeknav div
    //then loop through proper array
    // for each item in the array of keys from week1 array:
        // create a button
        // assign the text to the content value
        //append it to the weeknav array
