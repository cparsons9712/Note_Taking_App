// This object will hold all of the data for the notes
let notes = {
    "week1":{
        "Fluorescent Adolescent": {
            "notes" :"You used to get it in your fishnets <br> now you only get it in your nightdress <br> Discarded all the naughty nights for niceness <br>Landed in a very common crisis <br>Everything's in order in a black hole <br>Nothing seems as pretty as the past though <br>That Bloody Mary's lacking in Tabasco <br>Remember when you used to be a rascal?",
            "code" : "Fluorescent Adolescent is a ballad about getting older and finding out that life isn’t as fun anymore. It describes a woman who dreams of her youth while her current life is unsatisfying and boring, with emphasis on her sex life.",
            "lecture": "Written and performed by Artic Monkeys" }
        ,
        "Prescription Kid": {
            "notes" :"I'm just a prescription kid, I'll deal with it <br>I-I hate myself and the place I'm in <br>Got to better, I lost myself <br>Now I sleep on the floor, I can't help myself <br>I-I only want her 'cause she looks so fit <br>The sex is so good, I don't want to be fat <br>Flavorize like Americans live, and I'll be your prescription kid <br>I'll be your prescription kid",
            "code" : "Yeah, I wrote that song when there was a lot of school shootings happening in America. It’s a first-person account of someone that’s really fucked up and has access to medication that he shouldn’t be prescribed. And he’s almost treating this scenario like a Bonnie and Clyde situation where he’s saying, “Let’s get a gun, Bonnie. We don’t have to live.” It’s a story of someone taking action about how they feel and then someone being insightful about how they feel. So there’s the first half, is where it’s really, really aggressive, someone basically saying, “Let’s kill ourselves” to his girlfriend. “We don’t have to live; guns are legal in America, so let’s go and buy one.” She also was in the fucking head, and then and hurting other people in the process. And the second half is basically not doing that and explaining how they feel. So there’s two sides to it. You see school shooters on the news, and I think it’s disgusting, but it doesn’t really matter. At the end of the day, they are sick people. You can say that with a lot of other horrific crimes that have been committed, doesn’t mean you have to sympathize with them at all. But to say that they’re well people would be criminal because they’re not well people. No one does that if they’re well, they’re mentally well, so instead of just saying “Fuck school shooters; fuck the NRA” like a lot of other artists do. It’s like, “OK, well, why don’t I take that energy and write something a bit more interesting?” That’s what that song is about.",
            "lecture": "Kid Brunswick" }
    },
    "week2" : {
        "Coding": {
            "notes" :"Notes for topic 3",
            "code" : "this should be a block of code for topic ONE",
            "lecture": "This is where  lecture notes would go for Topic ONE" }
        ,
        "Time": {
            "notes" :"block of notes for topic 4",
            "code" : "this should be a block of code for topic two",
            "lecture": "This is where  lecture notes would go for topic 2" }
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

//when a topic is selected the header should change to be the same as that topic.
let topicDiv = document.querySelector("#topicNav")
let header = document.querySelector('#title')
topicDiv.addEventListener("click", t => {
let mainCont = document.querySelector(".contentSelection");
    let topic = t.target.innerText
    header.innerHTML = `<h1> ${topic} </h1>`
    let mainDis = document.querySelector('#mainContent')
    mainDis.innerHTML = ""

    // connect the content type navigation to the content under topic so that the button is connecting to the correct data to populate main body div

    mainCont.addEventListener("click", (c) => {
        //this needs to grab the value from the notes key in week.topic.notes and set the innerhtml of mainContent to equal the value.

        let key = c.target.id
        let weekTopic = notes[week]
        let topicContent = weekTopic[topic]
        mainDis.innerHTML = topicContent[key]
    })
})



})



/*
TO DO:

edit froms
new forms
*/




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
