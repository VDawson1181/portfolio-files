//Dad Joke Generator.. via API Ninjas
// set localstorage expiration time...
document.addEventListener('DOMContentLoaded', dad_joke, false);	

function dad_joke(){	
    const apiUrl = 'https://api.api-ninjas.com/v1/dadjokes';
    const apiKey = '4cqcaehT7Vj0Qq+USdldFg==Mha9mRuOlilyBF4W';
    let mainJoke = document.querySelector("#dadJokeCentral p");
    let mainJokeCountdown = document.querySelector("#dadJokeCentral h2.countdown span");
    
// Look for key...

const item = localStorage.getItem('test-item');

if(item){
    const res = (new Date()).getTime() > JSON.parse(item).expDate;
    // console.log((new Date()).getTime() , JSON.parse(item).expDate)
    if(res){
        console.log("remove local storage...")
        localStorage.removeItem('test-item');
        getAFreshJoke();
    }else{
        //     const now = new Date();
//     const midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);
//     const timeLeft = midnight - now;
//     const hours = Math.floor(timeLeft / 1000 / 60 / 60);
//     const minutes = Math.floor(timeLeft / 1000 / 60) % 60;
//     const seconds = Math.floor(timeLeft / 1000) % 60;
//     console.log(`${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`);

        mainJoke.innerHTML = JSON.parse(item).value;
        mainJokeCountdown.innerHTML = new Date(JSON.parse(item).expDate);
        console.log(JSON.parse(item).value);
        console.log("Expires: "+new Date(JSON.parse(item).expDate));
    }
}else{
    // Fresh joke....
    getAFreshJoke();
}


function getAFreshJoke(){
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
 
             // set local storage to expire in 1 hour...
             const date = new Date().setHours(new Date().getHours()+1);
             // const date = new Date().setDate(new Date().getDate()+1);
            //  const date = new Date(new Date().setHours(11,55,59,0));
             console.log(date);


             mainJokeCountdown.innerHTML = new Date(date);
 
             // localStorage.jokeSeen = jokeMain;
             localStorage.setItem('test-item', JSON.stringify({
                 value: jokeMain,
                 expDate: date
             }));
         });
     })
     .catch(error => {
         // Handle any errors
         console.error(error);
     });
}

function countDownToMidnight(){
    //set 
    // const date = new Date().setHours(new Date().getHours() + 24);
    const date = new Date().setHours(new Date().getHours()+24);
    mainJokeCountdown.innerHTML = new Date(date);


    // console.log(new Date(date));

    // setInterval(function (){
    //     // console.log(date);

    //     mainJokeCountdown.innerHTML = new Date(date);

    // },999);

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


