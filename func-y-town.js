// This object will hold all of the data for the notes
let notes = {
    "week1":{
        "Topic 1": {
            "notes" :"This is topic 1 notes",
            "code" : "this should be a block of code",
            "Lecture": "This is where  lecture notes would go" }
        ,
        "Topic 2": {
            "notes" :"This is topic 2 notes",
            "code" : "this should be a block of code",
            "Lecture": "This is where  lecture notes would go" }
    },
    "week2" : {
        "Topic 3": {
            "notes" :"Notes for topic 3",
            "code" : "this should be a block of code for topic ONE",
            "Lecture": "This is where  lecture notes would go for Topic ONE" }
        ,
        "Topic 4": {
            "notes" :"block of notes for topic 4",
            "code" : "this should be a block of code for topic two",
            "Lecture": "This is where  lecture notes would go for topic 2" }
    }
}

/* the last item in the weeks array should be preselected. the first item in the selected week should be preselected
*/


// functionality to add a topic into the content array


let week1button = document.querySelector("#week1")
// when week1 button is pushed the topic navigation bar should auto populate with the topics under the week1 section of notes object


week1button.addEventListener("focus" ,() =>{
    //remove any buttons currently in the nav bar
    let prevButton = document.querySelectorAll("#topicNav > button")
    for(button of prevButton){
        button.remove()
    }

    // select all of the topic keys under week1
    let topics = Object.keys(notes.week1)
    // loop through those topic keys and create buttons that are then placed in the navigation panel for topics
    for(key of topics){
        let topic = document.createElement('button')
        topic.innerHTML = key;
        let nav = document.querySelector('#topicNav')
        nav.append(topic)

    }

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
