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
            mainJoke.innerHTML = JSON.parse(item).value;
            // mainJokeCountdown.innerHTML = new Date(JSON.parse(item).expDate);
            console.log("Reloaded Joke --",JSON.parse(item).value);
            countdownTime(JSON.parse(item).expDate);
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
                // const date = new Date().setHours(new Date().getHours()+1);
                
                // set local storage to expire in 1 day...
                const date = new Date().setDate(new Date().getDate()+1);
                // console.log(date);

                localStorage.setItem('test-item', JSON.stringify({
                    value: jokeMain,
                    expDate: date
                }));

                countdownTime(JSON.parse(localStorage.getItem('test-item')).expDate);
            });
        })
        .catch(error => {
            // Handle any errors
            console.error(error);
        });
    }

    function countdownTime(expDate){

        console.log("Expires: "+new Date(expDate));
        
        // const midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);

            setInterval(function (){
                const now = new Date();
                const timeLeft = expDate - now;
                const hours = Math.floor(timeLeft / 1000 / 60 / 60);
                const minutes = Math.floor(timeLeft / 1000 / 60) % 60;
                const seconds = Math.floor(timeLeft / 1000) % 60;
                mainJokeCountdown.innerHTML = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
                // console.log (`${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`);

        },999);

    }
    function padZero(num){
        return (num < 10 ? "0" : "")+num;

    }

function countDownToMidnight(){
    //set 
    // const date = new Date().setHours(new Date().getHours() + 24);
    const date = new Date().setHours(new Date().getHours()+24);
    mainJokeCountdown.innerHTML = new Date(date);

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


