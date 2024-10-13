//Dad Joke Generator.. via API Ninjas
// set localstorage expiration time...
document.addEventListener('DOMContentLoaded', dad_joke, false);	

function dad_joke(){	
    const apiUrl = 'https://api.api-ninjas.com/v1/dadjokes';
    const apiKey = '4cqcaehT7Vj0Qq+USdldFg==Mha9mRuOlilyBF4W';
    let mainJoke = document.querySelector("#dadJokeCentral p");
    
// Look for key...
if(!localStorage.jokeSeen){

    
     fetch(apiUrl, {
       headers: {
         'x-api-key': apiKey
       }
     })
     .then(response => response.json())
     .then(data => {
       // Handle the API response data
       data.forEach((element) => {
            // console.log(element.joke);
            let jokeMain = element.joke;
            mainJoke.innerHTML = jokeMain;
            console.log("Fresh Joke --", jokeMain);

            // set local storage...
            localStorage.jokeSeen = jokeMain;
        });
    })
    .catch(error => {
        // Handle any errors
        console.error(error);
    });
    
    // let jokeMain = Math.floor(Math.random() * 100);
    // console.log("Fresh Joke --", jokeMain);

    //Output joke to html...
    // mainJoke.innerHTML = jokeMain;
    //Set jokeSeen in local storage...
    // localStorage.jokeSeen = jokeMain;
}else{
    //Retrieve saved joke...
    let savedJoke = localStorage.jokeSeen;
    console.log("Joke has been seen already --", savedJoke);
    mainJoke.innerHTML = localStorage.jokeSeen;

    // setInterval(countdownToMidnight,999)
    // todaysDate();
    countDownToMidnight();
}

function countDownToMidnight(){
    const date = new Date().setHours(new Date().getHours() + 24);

    console.log(date);
    console.log(new Date(date));
}

// remove key
// delete localStorage.jokeSeen;

// function todaysDate(){
//     const today = new Date();
//     const formattedDate = today.toLocaleDateString();
//     console.log(formattedDate);
// }

// function countdownToMidnight(){
//     const now = new Date();
//     const midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);
//     const timeLeft = midnight - now;
//     const hours = Math.floor(timeLeft / 1000 / 60 / 60);
//     const minutes = Math.floor(timeLeft / 1000 / 60) % 60;
//     const seconds = Math.floor(timeLeft / 1000) % 60;
//     console.log(`${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`);
// }

// function padZero(num){
//     return (num < 10 ? "0" : "")+num;

//   }


};


