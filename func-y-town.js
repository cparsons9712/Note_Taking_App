// This object will hold all of the data for the notes
let notes = {
  week1: {
    "Fluorescent Adolescent": {
      notes:
        "You used to get it in your fishnets <br> now you only get it in your nightdress <br> Discarded all the naughty nights for niceness <br>Landed in a very common crisis <br>Everything's in order in a black hole <br>Nothing seems as pretty as the past though <br>That Bloody Mary's lacking in Tabasco <br>Remember when you used to be a rascal?",
      code: "Fluorescent Adolescent is a ballad about getting older and finding out that life isn’t as fun anymore. It describes a woman who dreams of her youth while her current life is unsatisfying and boring, with emphasis on her sex life.",
      lecture: "Written and performed by Artic Monkeys",
    },
    "Prescription Kid": {
      notes:
        "I'm just a prescription kid, I'll deal with it <br>I-I hate myself and the place I'm in <br>Got to better, I lost myself <br>Now I sleep on the floor, I can't help myself <br>I-I only want her 'cause she looks so fit <br>The sex is so good, I don't want to be fat <br>Flavorize like Americans live, and I'll be your prescription kid <br>I'll be your prescription kid",
      code: "Yeah, I wrote that song when there was a lot of school shootings happening in America. It’s a first-person account of someone that’s really fucked up and has access to medication that he shouldn’t be prescribed. And he’s almost treating this scenario like a Bonnie and Clyde situation where he’s saying, “Let’s get a gun, Bonnie. We don’t have to live.” It’s a story of someone taking action about how they feel and then someone being insightful about how they feel. So there’s the first half, is where it’s really, really aggressive, someone basically saying, “Let’s kill ourselves” to his girlfriend. “We don’t have to live; guns are legal in America, so let’s go and buy one.” She also was in the fucking head, and then and hurting other people in the process. And the second half is basically not doing that and explaining how they feel. So there’s two sides to it. You see school shooters on the news, and I think it’s disgusting, but it doesn’t really matter. At the end of the day, they are sick people. You can say that with a lot of other horrific crimes that have been committed, doesn’t mean you have to sympathize with them at all. But to say that they’re well people would be criminal because they’re not well people. No one does that if they’re well, they’re mentally well, so instead of just saying “Fuck school shooters; fuck the NRA” like a lot of other artists do. It’s like, “OK, well, why don’t I take that energy and write something a bit more interesting?” That’s what that song is about.",
      lecture: "Kid Brunswick",
    },
  },
  week2: {
    Coding: {
      notes: "Notes for topic 3",
      code: "this should be a block of code for topic ONE",
      lecture: "This is where  lecture notes would go for Topic ONE",
    },
    Time: {
      notes: "block of notes for topic 4",
      code: "this should be a block of code for topic two",
      lecture: "This is where  lecture notes would go for topic 2",
    },
  },
};
/***************************************** Populate topic navigation**************************************/
// // when a week button is pushed the topic navigation bar should auto populate with the topics under the week1 section of notes object

let weekDiv = document.querySelector("#weekNav"); // select the navigation panel for weeks
weekDiv.addEventListener("click", (w) => { // create a click event listener for week buttons
  let week = w.target.id; // select the button that was clicked
  let topics = Object.keys(notes[week]); // create an array of all the topic objects under the selected week
  let prevButton = document.querySelectorAll("#topicNav > button"); // selects all the currently shown topic buttons
  for (button of prevButton) { // loop through all the currently shown topic buttons
    button.remove(); //remove any preexisting buttons
  }
  for (key of topics) { // loop through the array of topics in the selected week object
    let topic = document.createElement("button"); // create a button
    topic.innerHTML = key; // set the text of that button to the current topic
    let nav = document.querySelector("#topicNav"); // select the topic navigation panel
    nav.append(topic); // add the topic button into the navigation panel
  }
  /********************************** Populate the Header  ****************************************************/
  //when a topic is selected the header should change to be the same as that topic.
  let topicDiv = document.querySelector("#topicNav"); // select the navigation panel
  let header = document.querySelector("#title"); // select the div that holds the title text
  topicDiv.addEventListener("click", (t) => { // add a click listener for all of the topic buttons
    let mainCont = document.querySelector(".contentSelection"); // select the div that holds the buttons for notes, code, and lecture
    let topic = t.target.innerText; // specify the topic button that was clicked and grab the text for it
    header.innerHTML = `<h1> ${topic} </h1>`; // set the header to be the same as the topic button
    let mainDis = document.querySelector("#mainContent"); // select the div that displays the text content for the specified topic
    mainDis.innerHTML = ""; // clear the text content div of any currently existing text


 /******************************* Populate the content field  ******************************/
    // connect the content type navigation to the content under topic so that the button is connecting to the correct data to populate main body div

    mainCont.addEventListener("click", (c) => { // when a notes, code, or lecture button is clicked

      let key = c.target.id; // specify the exact button that was clicked
      let weekTopic = notes[week]; // get the object of topics from that week
      let topicContent = weekTopic[topic]; // specify the topic that you need the content for
      mainDis.innerHTML = topicContent[key]; // grab the content type that corresponds with the button click and display it in the main content text div

/*********************************** Edit functionality ***********************************/

      //when the edit button is clicked we need to save all the current data into local storage, replace title and contents with input fields prefilled with past data

      let editButton = document.querySelector('#edit') // grab the edit button
      editButton.addEventListener("click", ()=>{ // when the edit button is clicked
        localStorage.setItem("header", header.innerHTML) // take the currently displayed header and save it into local storage

        let changeTitle = document.createElement("input") // create an input field for the title
        changeTitle.type = "text"; // specify that it will be a text input
        changeTitle.size = "70" // make the width of the text input larger
        header.innerHTML = "" // empty the title of any currently existing text
        header.appendChild(changeTitle); // place the input field where the text used to exist

        if(localStorage.getItem("header")) { // check local storage for a saved title
          changeTitle.value = localStorage.getItem("header") // place that saved title into the input field to be manipulated
        }

        editButton.style.display = "none" // hide the edit button
        let saveButton = document.querySelector("#save") // grab the save button
        saveButton.style.display = "block" // show the save button where the edit button once was

        
/********************** Save Changes Functionality  **************************************************/
        //when save button is clicked the location in the object should be rewitten with the contents of the input fields, and the save button should hide and be replaced with edit button
        saveButton.addEventListener("click", () => { // when the save button is clicked
          header.innerHTML = `<h1> ${changeTitle.value} </h1>`; // change the header from the input to a text field containing what was in the input field

          //how can I keep the h1 without showing it in input field. Maybe use a span inside the h1 tags?
          // how can I change the key's text while keeping the values the same? delete and rewrite?

        })

      })



    });

   //  body goes to local storage
    //current div is replaced with input fields
    // if local storage has information
    // input fields are populated from local storage


    //on save rewrite the appropriate location in the notes object with the text content of the input field. * look into ways to keep html formatting in multi-line text field.


  });
})

/*
TO DO:
Hide Notes/Code/Lecture buttons until a topic is selected
edit froms
new forms
*/

//function to create an edit page or prefill existing page to be edited
// add new button into the topic nav : In object it should find the current week and create a new key value pair
// create a input text field where the content box currently reside.
