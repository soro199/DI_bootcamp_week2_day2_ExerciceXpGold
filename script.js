
// Exercise 1 : The World Translator

    //1 Ask the user which language they speak.
    let userLanguage=prompt("which language did you speak ?");

    //2 Convert the user’s answer to lowercase
    let lowerLanguage=userLanguage.toLowerCase();
    console.log(lowerLanguage);
    switch (lowerLanguage) {
        case 'french':
            console.log("Bonjour");
            break;
        case 'english':
            console.log("Hello");
            break;
        case 'hebrew':
            console.log("Shalom");
            break;

        default:
            console.log("01110011 01101111 01110010 01110010 01111001");
            break;
    }



    
// Exercise 2 : The Grade Assigner

    //1 Ask the user for their grade.
    let userGrade=prompt("What is Your Grade ?");

    if(isNaN(userGrade)){
        console.log("Please enter a number");
    }else{
        if(userGrade>90){
    // 2 If the grade is bigger than 90, console.log “A”
            console.log("A");
        }else if(userGrade>=81 && userGrade<=90){
    //3 If the grade is between 80 and 90 (included), console.log “B”
            console.log("B");
        }
        else if(userGrade>=70 && userGrade<=80){
    //4 If the grade is between 70(included) and 80 (included), console.log “C”
            console.log("C");
        }else{
    //5 If the grade is lower than 70, console.log “D”
            console.log("D");
        }
    }
        




// Exercise 3 : Verbing

    //1 Prompt the user for a string. It must be a verb.
    let userVerb=prompt("Please enter a verb ");

    let verbLength=userVerb.length;

    let endVerb=userVerb.slice(-3,verbLength);

    /* 2 If the length of the string is at least 3 
    and the string doesn’t end with “ing”, add ‘ing’ to the end of the string. */

    if (verbLength>=3 && endVerb!="ing") {
        userVerb+="ing";
        console.log(userVerb);
    } else if(verbLength>=3 && endVerb=="ing") {
    /* 3 If the length of the string is at least 3 
    and the string ends with “ing” add “ly” to it’s end. */
        userVerb+="fly";
    }else{
    // 4 If the length of the string is less than 3, leave it unchanged
        console.log(userVerb);
    }



