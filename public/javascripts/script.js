
var demo                                           //VARIABLE TO STORE THE DIV ID IN WHICH THE TYPING ANIMATION TO BE DONE
var txt                                             //VARIABLE TO STORE THE TEXT THAT SHOULD BE ANIMATED

var demo1
var demo2
var txt1
var txt2

var data = []                                       //VARIABLE TO STORE THE DATA OF INPUT TO SAVE AS PDF

var answer = ["YES", "L I", "LI", "B B", "BB", "R I", "RI", "D"];
var userInputedAnswer = []

var score = 0;                                      //VARIABLE TO STORE THE SCORE

var clues1
var clues2

var storys

var image

var cluedisplay = 0;
var storydisplay = 0;

//VARIABLES USED FOR COUNTING THE NUMBER OF TIMES THE CODE IS ENTERED

var startcount = 0
var clue1count = 0
var clue2count = 0
var clue3count = 0
var clue4count = 0
var clue5count = 0
var finalAnswercount = 0


demo = document.getElementById("initial")           //ASSIGNING THE INITIAL DIV TO DEMO 
txt = "Agent X! You've successfully decoded my message! I've stumbled upon a covert operation that goes far deeper than anyone could have anticipated and your team is the only one I can trust. Classified documents have fallen into my possession. I require your decryption expertise and skills now more than ever. Will you lend me your assistance?              Enter yes to continue."    //ASSIGNING THE INITIAL TEXT TO txt

typing(txt);                                        //CALLING typing FUNCTION FOR THE FIRST TEXT TO BE SHOWN

timeText.innerHTML = gettingTime();


function printstory(storys) {

    var screen = document.getElementById("screen")              //SCREEN 

    var Left = document.createElement("div")                    //CREATING A NEW DIV Left (GRAND PARENT DIV OF SERVER'S MESSAGE)
    Left.className = "Left"                                     //SETTING DIV NAME AS Right FOR DOING IT CONTINUESLY


    var ServerMessage = document.createElement("div")           //CREATING A NEW DIV ServerMessage (PARENT DIV OF SERVER'S MESSAGE)
    ServerMessage.className = "ServerMessage"                   //SETTING DIV NAME AS UserMessage FOR REUSABILITY

    var story = document.createElement("div")               //CREAING A NEW DIV clue1 (DIV FOR SHOWING THE USER THE NEXT CLUE PRINTING THE CLUE)
    story.id = "story"                                  //SETTING AN ID FOR clue1


    screen.appendChild(Left)                            //MAKING Left A SUB CHILD OF screen
    Left.appendChild(ServerMessage)                     //MAKING ServerMessage A SUB CHILD OF Left
    ServerMessage.appendChild(story)                    //MAKING clue2 A SUB CHILD OF ServerMessage



    //ASSIGNING SPECIFIC VALUE TO demo AND txt

    demo = document.getElementById("story")
    txt = storys

    typing(txt);                                        //CALLING typing function

    story.id = ""


    timeText = document.createElement("div")
    timeText.id = "timeText"
    timeText.className = "timeText"

    timeText.innerHTML = gettingTime();

    ServerMessage.appendChild(timeText)                     //MAKING Time A SUB CHILD OF ServerMessage

}

function printclue1(clues1) {

    var screen = document.getElementById("screen")              //SCREEN 

    var Left = document.createElement("div")                    //CREATING A NEW DIV Left (GRAND PARENT DIV OF SERVER'S MESSAGE)
    Left.className = "Left"                                     //SETTING DIV NAME AS Right FOR DOING IT CONTINUESLY


    var ServerMessage = document.createElement("div")           //CREATING A NEW DIV ServerMessage (PARENT DIV OF SERVER'S MESSAGE)
    ServerMessage.className = "ServerMessage"                   //SETTING DIV NAME AS UserMessage FOR REUSABILITY

    var clue1 = document.createElement("div")               //CREAING A NEW DIV clue1 (DIV FOR SHOWING THE USER THE NEXT CLUE PRINTING THE CLUE)
    clue1.id = "clue1"                                  //SETTING AN ID FOR clue1


    screen.appendChild(Left)                            //MAKING Left A SUB CHILD OF screen
    Left.appendChild(ServerMessage)                     //MAKING ServerMessage A SUB CHILD OF Left
    ServerMessage.appendChild(clue1)                    //MAKING clue2 A SUB CHILD OF ServerMessage

    demo1 = document.getElementById("clue1")
    txt1 = clues1

    typing1(txt1);                                        //CALLING typing function

    clue1.id = ""                                       //TO MAKE THE ID NAME BLANK TO PREVENT THE REPEATION OF CODE IN THE SAME DIV


    timeText = document.createElement("div")
    timeText.id = "timeText"
    timeText.className = "timeText"

    timeText.innerHTML = gettingTime();

    ServerMessage.appendChild(timeText)                     //MAKING Time A SUB CHILD OF ServerMessage


}

function printclue2(clues2) {

    var screen = document.getElementById("screen")              //SCREEN 

    var Left = document.createElement("div")                    //CREATING A NEW DIV Left (GRAND PARENT DIV OF SERVER'S MESSAGE)
    Left.className = "Left"                                     //SETTING DIV NAME AS Right FOR DOING IT CONTINUESLY


    var ServerMessage = document.createElement("div")           //CREATING A NEW DIV ServerMessage (PARENT DIV OF SERVER'S MESSAGE)
    ServerMessage.className = "ServerMessage"                   //SETTING DIV NAME AS UserMessage FOR REUSABILITY

    var clue2 = document.createElement("div")               //CREAING A NEW DIV clue1 (DIV FOR SHOWING THE USER THE NEXT CLUE PRINTING THE CLUE)
    clue2.id = "clue2"                                  //SETTING AN ID FOR clue1


    screen.appendChild(Left)                            //MAKING Left A SUB CHILD OF screen
    Left.appendChild(ServerMessage)                     //MAKING ServerMessage A SUB CHILD OF Left
    ServerMessage.appendChild(clue2)                    //MAKING clue2 A SUB CHILD OF ServerMessage

    demo2 = document.getElementById("clue2")
    txt2 = clues2

    typing2(txt2);                                        //CALLING typing function

    clue2.id = ""                                       //TO MAKE THE ID NAME BLANK TO PREVENT THE REPEATION OF CODE IN THE SAME DIV


    timeText = document.createElement("div")
    timeText.id = "timeText"
    timeText.className = "timeText"

    timeText.innerHTML = gettingTime();

    ServerMessage.appendChild(timeText)                     //MAKING Time A SUB CHILD OF ServerMessage


}


function printimage() {

    var screen = document.getElementById("screen")              //SCREEN 

    var Left = document.createElement("div")                    //CREATING A NEW DIV Left (GRAND PARENT DIV OF SERVER'S MESSAGE)
    Left.className = "Left"                                     //SETTING DIV NAME AS Right FOR DOING IT CONTINUESLY


    var ServerMessage = document.createElement("div")           //CREATING A NEW DIV ServerMessage (PARENT DIV OF SERVER'S MESSAGE)
    ServerMessage.className = "ServerMessage"                   //SETTING DIV NAME AS UserMessage FOR REUSABILITY

    var image = document.createElement("div")               //CREAING A NEW DIV clue1 (DIV FOR SHOWING THE USER THE NEXT CLUE PRINTING THE CLUE)

    image.style.width = "20rem"
    image.style.height = "20rem"


    screen.appendChild(Left)                            //MAKING Left A SUB CHILD OF screen
    Left.appendChild(ServerMessage)                     //MAKING ServerMessage A SUB CHILD OF Left
    ServerMessage.appendChild(image)                    //MAKING clue2 A SUB CHILD OF ServerMessage

    image.style.backgroundImage = "url('./Images/sju.png')"
    image.style.backgroundSize = "cover"


    image.id = ""                                       //TO MAKE THE ID NAME BLANK TO PREVENT THE REPEATION OF CODE IN THE SAME DIV


    timeText = document.createElement("div")
    timeText.id = "timeText"
    timeText.className = "timeText"

    timeText.innerHTML = gettingTime();

    ServerMessage.appendChild(timeText)                     //MAKING Time A SUB CHILD OF ServerMessage


}

//FUNCTION FOR TYPING ANIMATION

function typing(txt) {

    var i = 0;
    var speed = 10;

    function typeWriter() {
        if (i < txt.length) {
            demo.innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);

            document.getElementById("usertext").style.pointerEvents = "none"      //SET THE POINTER NOT TO USE WILL TYPING ANIMATION IS DONE

        }
        else {

            document.getElementById("usertext").style.pointerEvents = "auto"  //SET THE POINTER BACK TO NORMAL

        }
        updateScroll();

    }

    typeWriter();

}


function typing1(txt1) {

    var i = 0;
    var speed = 10;

    function typeWriter1() {
        if (i < txt1.length) {
            demo1.innerHTML += txt1.charAt(i);
            i++;
            setTimeout(typeWriter1, speed);

            document.getElementById("usertext").style.pointerEvents = "none"      //SET THE POINTER NOT TO USE WILL TYPING ANIMATION IS DONE

        }
        else {

            document.getElementById("usertext").style.pointerEvents = "auto"  //SET THE POINTER BACK TO NORMAL

        }
        updateScroll();

    }

    typeWriter1();

}


function typing2(txt2) {

    var i = 0;
    var speed = 10;

    function typeWriter2() {
        if (i < txt2.length) {
            demo2.innerHTML += txt2.charAt(i);
            i++;
            setTimeout(typeWriter2, speed);

            document.getElementById("usertext").style.pointerEvents = "none"      //SET THE POINTER NOT TO USE WILL TYPING ANIMATION IS DONE

        }
        else {

            document.getElementById("usertext").style.pointerEvents = "auto"  //SET THE POINTER BACK TO NORMAL

        }
        updateScroll();

    }

    typeWriter2();

}


//SETTING TIMINGS

function gettingTime() {

    var dt = new Date();
    let hours = dt.getHours();
    let minutes = dt.getMinutes();
    let ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes.toString().padStart(2, '0');
    let time = hours + ':' + minutes + " " + ampm;
    return time;

}

function secondTime() {

    var dt = new Date();
    let hours = dt.getHours();
    let minutes = dt.getMinutes();
    let seconds = dt.getSeconds();
    let ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes.toString().padStart(2, '0');
    let time = hours + ':' + minutes + ':' + seconds + " " + ampm;
    return time
}

function formTime() {

    var dt = new Date();
    let hours = dt.getHours();
    let minutes = dt.getMinutes();
    let ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes.toString().padStart(2, '0');
    let time = hours + ':' + minutes + " " + ampm;
    return time;

}

//SETTING ENTER CLICK TO CALLING SENT()


document.getElementById("usertext").addEventListener("keypress", function (event) {
    if (event.which == 13) {
        event.preventDefault();
        document.getElementById('formTime').value = formTime() + " " + document.getElementById("usertext").value
        document.getElementById('form').submit()
        sentcheck();
    }
});

//PIN SCROLL LOCK DOWN

function updateScroll() {
    var element = document.getElementById("screen");
    element.scrollTop = element.scrollHeight;
}

//TO CALL A FUNCTION ONLY IF THERE IS CONTENT

function sentcheck() {

    if (document.getElementById("usertext").value != "")

        sent();
}



// ALL THE THINGS TO BE DONE WHEN THE SENT BUTTON IS CLICKED

function sent() {

    var userinput = document.getElementById("usertext").value   //FOR TAKING THE VALUE OF INPUT FROM THE USER


    document.getElementById("usertext").value = ""              //MAKING THE VALUE IN THE TEXTBOX AS BLANK


    var screen = document.getElementById("screen")              //SCREEN 


    var Right = document.createElement("div")                   //CREATING A NEW DIV Right (GRAND PARENT DIV OF USER'S MESSAGE)
    Right.className = "Right"                                   //SETTING DIV NAME AS Right FOR DOING IT CONTINUESLY



    var UserMessage = document.createElement("div")             //CREATING A NEW DIV UserMessage (PARENT DIV OF USER'S MESSAGE)
    UserMessage.className = "UserMessage"                       //SETTING DIV NAME AS UserMessage FOR REUSABILITY


    var useranswer = document.createElement("div")              //CREAING A NEW DIV useranswer (DIV FOR ENTERING THE VALUE THAT THE USER HAD INPUT)
    useranswer.innerHTML = userinput                            //ASSIGNING THE VALUE ENTERED BY THE USER TO THE useranswer



    userinput = userinput.toUpperCase();                        //CHANGING THE CASE OF THE INPUT TEXT TO UPPER CASE

    timeText = document.createElement("div")
    timeText.id = "timeText"
    timeText.className = "timeText"

    timeText.innerHTML = gettingTime();


    screen.appendChild(Right)                                   //MAKING Right A SUB CHILD OF screen
    Right.appendChild(UserMessage)                              //MAKING UserMessage A SUB CHILD OF Right
    UserMessage.appendChild(useranswer)                         //MAKING useranswer A SUB CHILD OF UserMessage
    UserMessage.appendChild(timeText)                           //MAKING Time A SUB CHILD OF Usermessage


    var Left = document.createElement("div")                    //CREATING A NEW DIV Left (GRAND PARENT DIV OF SERVER'S MESSAGE)
    Left.className = "Left"                                     //SETTING DIV NAME AS Right FOR DOING IT CONTINUESLY


    var ServerMessage = document.createElement("div")           //CREATING A NEW DIV ServerMessage (PARENT DIV OF SERVER'S MESSAGE)
    ServerMessage.className = "ServerMessage"                   //SETTING DIV NAME AS UserMessage FOR REUSABILITY





    if ((userinput === answer[0]) && (startcount < 1)) {

        storys = "Perfect! My intel reveals that each line of the document conceals a letter of the alphabet. This is urgent, so we'll take it 2 lines at a time."


        printstory(storys);


        clues1 = "This is the first line: Where Acer meets Dell, we watch the waddling of a penguin os."
        clues2 = "This is the second line: Provide data. But browse in secret. An endless loop.          What letters do you think these correspond to?"
        printclue1(clues1);
        printclue2(clues2)

        userInputedAnswer.push(userinput)
        //printimage()
        startcount++


    }

    else if ((userInputedAnswer[0] === answer[0]) && (userinput === answer[1] || userinput === answer[2]) && (clue1count < 1)) {

        storys = "I knew it was a good idea to come to you! Hmm. These lines seem rather similar."


        printstory(storys);


        clues1 = "This is the third line: Only 2? Pair with me, I'm human. What else could I be? "
        clues2 = "This is the fourth line: Convenient Chrome. Lion secure. Honey? This is a mistake."
        printclue1(clues1);
        printclue2(clues2)


        userInputedAnswer.push(userinput)
        //printimage()
        clue1count++


    }

    else if ((userInputedAnswer[0] === answer[0] && userInputedAnswer[1] === answer[1] || userInputedAnswer[1] === answer[2]) && (userinput === answer[3] || userinput === answer[4]) && (clue2count < 1)) {

        storys = "We're getting closer!"


        printstory(storys);


        clues1 = "The fifth line: Give it back, I’ll do it again. I won’t be alone, I’ll call myself."
        clues2 = "The sixth line: Everywhere yet nowhere. Apple operates, always organized data."
        printclue1(clues1);
        printclue2(clues2)


        userInputedAnswer.push(userinput)
        //printimage()
        clue2count++


    }

    else if (((userInputedAnswer[0] === answer[0]) && (userInputedAnswer[1] === answer[1] || userInputedAnswer[1] === answer[2]) && (userInputedAnswer[2] === answer[3] || userInputedAnswer[2] === answer[4])) && (userinput === answer[5] || userinput === answer[6]) && (clue3count < 1)) {

        storys = "Agent! My cover is blown! We don't have enough time to get through this entire document. The next line is our only hope. Remember, time is of the essence!"


        printstory(storys);


        clues1 = "Your final line: Fixing mistakes? Unravel the secret. But you can never be Holmes."
        printclue1(clues1);


        userInputedAnswer.push(userinput)
        //printimage()
        clue3count++


    }

    else if ((userInputedAnswer[0] === answer[0] && (userInputedAnswer[1] === answer[1] || userInputedAnswer[1] === answer[2]) && (userInputedAnswer[2] === answer[3] || userInputedAnswer[2] === answer[4]) && (userInputedAnswer[3] === answer[5] || userInputedAnswer[3] === answer[6]) && (userinput === answer[7]) && (clue4count < 1)))
     {

        storys = "I'm being tracked! I need your team to finish this mission for me."




        printstory(storys);


        clues1 = "LIB BRID"
        printclue1(clues1);

        clues2 = "This must lead somewhere. Your team needs to get there now! Hurry!"
        printclue2(clues2);


        userInputedAnswer.push(userinput)
        //printimage()
        clue4count++


    }

    else {

        storys = "That doesn't fit my intel. Could you run it by your team once more?"

        printstory(storys);

    }




    updateScroll();                                             //CALLING updateScroll FUNCTION TO ALWAYS PIN THE SCREEN DOWN



    Time.id = ""
}



//SAVE AND DOWNLOAD THE FILE

function func_savedata(data) {



    var doc = new jsPDF()

    doc.text(data, 20, 10)
    doc.save('save.pdf')



}

