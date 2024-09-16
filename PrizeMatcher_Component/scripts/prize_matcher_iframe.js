// Prize Matcher JS -- VAD

        // Create the question and display it...
        let pm_question_count = 0;
        let pm_prizes = [];
        const questionContainer = document.getElementById("screenQuestions");

        // Company Array... With URL redirect links, and company logos. images from https://www.brandsoftheworld.com
        const mp_prize_map = [
            ["Amazon","https://www.amazon.com","https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-original-577x577/s3/012015/amazon-logo-rgb.png?itok=VaPUAQJF"],
            ["Home Depot","https://www.homedepot.com","https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-original-577x577/s3/0018/4102/brand.gif?itok=LKud2xI-"],
            ["Visa","https://www.visa.com","https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-original-577x577/s3/092018/untitled-1_1.png?C3N3SkdbNYvT._tJW.AAychWVLWXqKNu&itok=vCjMCVZr"],
            ["Best Buy","https://www.bestbuy.com","https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/122014/best_buy.png?itok=6zQ3TwY1"],
            ["Walmart","https://www.walmart.com","https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/102016/untitled-2_25.jpg?itok=Fn6-ZK8D"],
            ["Cabelas","https://www.cabelas.com","https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0006/9894/brand.gif?itok=tmDyZtOH"],
            ["Target","https://www.target.com","https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/102012/targetr-converted.png?itok=7xtHQE09"],
            ["Cash","https://www.pch.com","https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0003/5120/brand.gif?itok=t1snWFXW"],
            ["Petco","https://www.petco.com","https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/022018/untitled-1_10.png?lR5ba0Yhy.Kfmrg6Nzeo96aCVSDTKfd0&itok=sEW_AVsq"],
            ["Kohls","https://www.kohls.com","https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0003/2360/brand.gif?itok=PV-aAzn4"],
            ["McDonalds","https://www.mcdonalds.com","https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/072019/mc_donalds.jpg?kym3UM70BSEnkSEHwiOkiC7ML8rO1EQi&itok=o2MwTR0p"],
            ["Applebees","https://www.applebees.com","https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/092010/applebees.jpg?itok=-KryXU-1"],
            ["Cracker Barrel","https://www.crackerbarrel.com","https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/072011/cracker_barrel__old_country_store.jpeg?itok=qGcAgd7m"],
            ["Chik-Fil-A","https://www.chick-fil-a.com","https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/042013/chick-fil-a.png?itok=UvqtgDLP"],
            ["Olive Garden","https://www.olivegarden.com","https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/122014/olive-garden-logo-redesign-2014_4762_0.png?itok=cm0iP5Oe"],
            ["NA","",""]
        ];

        // question vars
        const pm_question_1 = new pm_question(
            "What's your favotite thing to do in your spare time?",
            [["shopping",0],["DIY Projects",1],["Exercising",2],["Playing on my phone",2],["something else",2]]
        );
        const pm_question_2 = new pm_question(
            "Where do you like to shop most?",
            [["Best Buy",3],["Walmart",4],["Cabelas",5],["Target",6],["Other",7]],
        );
        const pm_question_3 = new pm_question(
            "Do you have a pet?",
            [["Dog",8],["Cat",8],["Other",8],["No Pets",9]],
        );
        const pm_question_4 = new pm_question(
            "Which Restaurant is your favorite?",
            [["McDonalds",10],["Applebees",11],["Cracker Barrel",12],["Chik-Fil-A",13],["Other",14]],
        );
        const pm_question_5 = new pm_question(
            "What's your favorite thing to do on a saturday night?",
            [["Go out to eat",15],["Wath TV",15],["Go Shopping Online",15],["Throw a party",15],["something else",15]],
        );
        const pm_question_6 = new pm_question(
            "What would you do if you had tons of extra cash?",
            [["Pay mortgage",15],["Vacation",15],["Get a new car",15],["Save it",15]],
        );

        
        // Answer arrays for the end screens... holders for the prize/company images/data.
        let screenPrizesClaim = document.querySelectorAll("#pm_screen_claim .screenAnswers li"),
            screenPrizesOutro = document.querySelectorAll("#pm_screen_outro .screenAnswers li");

        //Dynamically create the questions and answers depending on how many questions you create... the only relevant questions are the first 4 tho.
        function pm_question(question,answers){
            this.question = question;
            this.answers = answers;

            // Create a new Li with a class of pm_question_#.
            const newLi = document.createElement("li");
                  newLi.classList.add(`pm_question_${pm_question_count++}`);
                  newLi.classList.add(`pm_default_ease`);

            // Create a new question paragraph with class question.
            const newPara = document.createElement("p");
                  newPara.classList.add("question");
            
            // Create a new text node with the question text, and append it into the new paragraph.
            const newQuestion = document.createTextNode(this.question);
                  newPara.appendChild(newQuestion);
            
            // append the new Li to the question container, and place the new paragraph inside the new Li.            
            questionContainer.append(newLi);
            newLi.appendChild(newPara);

            // Loop through the answers array and create a new answer element for each answer.
            this.answers.forEach((element, index) => {
                
                let questionChoices = document.createElement("a");
                questionChoices.classList.add("answer");
                questionChoices.classList.add("answer_"+index);
                questionChoices.setAttribute("data-pmap", this.answers[index][1]);
                let newAnswers = document.createTextNode(this.answers[index][0]);
                questionChoices.appendChild(newAnswers);
                
                newLi.appendChild(questionChoices);
            });            
        }


        // function displayChosenCard(parentElement, pmCard){       
        function displayChosenCard(){       
            // console.log(pm_prizes, pmCard);

            pm_prizes.forEach((element,index) => {
                if(index<=3){

                    // screenPrizesClaim[index].innerHTML = `#${pm_prizes[index]}: ${mp_prize_map[pm_prizes[index]][0]}`;
                    screenPrizesClaim[index].style.backgroundImage = `url('${mp_prize_map[pm_prizes[index]][2]}')`;                 
                    // screenPrizesOutro[index].innerHTML = `#${pm_prizes[index]}: ${mp_prize_map[pm_prizes[index]][0]} <br>`;
                    screenPrizesOutro[index].style.backgroundImage = `url('${mp_prize_map[pm_prizes[index]][2]}')`;  

                        let questionAnswerLink = document.createElement("a"),
                            questionAnswerCopy = document.createTextNode("Enter Now");
                            questionAnswerLink.classList.add("answer_"+index); 
                            questionAnswerLink.setAttribute("data-exitlink", mp_prize_map[pm_prizes[index]][1]);                                
                            questionAnswerLink.appendChild(questionAnswerCopy);
                            
                        screenPrizesOutro[index].append(questionAnswerLink);

                }

            });




            let pm_exit_btns = document.querySelectorAll("#pm_screen_outro .screenAnswers li a");
                pm_exit_btns.forEach((element,index) => {
                    pm_exit_btns[index].addEventListener('click', function actBtn(e){
                        e.preventDefault();   
                        
                        // console.log(this.parentElement, this.dataset.exitlink);
                        // pass in wildcard "*" to allow for any domain -- change origin to the domain you want to allow
                        window.parent.postMessage(this.dataset.exitlink, "*");
                        
                    });
                });
                        
        }

            //         let pm_MorePrizes_Link = document.createElement("a"),
            // pm_MorePrizes_Copy = document.createTextNode("Show Me More Prizes");
            // pm_MorePrizes_Link.setAttribute("data-exitlink", "https://www.pch.com/sweepstakes");                                
            // pm_MorePrizes_Link.appendChild(pm_MorePrizes_Copy);

            // let screenPrizesOutroContainer = document.querySelector("#pm_screen_outro .screenAnswers");
            //     screenPrizesOutroContainer.append(pm_MorePrizes_Link);
            
            
        let pm_intro_btn = document.querySelector("#pm_content_main .screen_intro .intro_Btn");
        let pm_pch_logo = document.querySelector("#pch_logo");
        let pm_main_logo = document.querySelector("#pm_Logo_Main");
        let pm_main_bkgrnd = document.querySelector("#pm_coins_bkgrnd");
        let pm_question_container = document.querySelector("#question_cover");
        let pm_question_scroll_container = document.querySelector("#question_cover #screenQuestions");
        let pm_question_selectors = document.querySelectorAll("#screenQuestions li");
        let pm_answer_btns = document.querySelectorAll("#screenQuestions .answer");
        let pm_claim_btn = document.querySelector("#pm_screen_claim .answer_final");
        let mp_question_slide = 0;
        // Get saved data from sessionStorage

        let pm_session_data = JSON.parse(sessionStorage.getItem("pm_prize_arr"));
        pm_answer_btns.forEach((element,index) => {
            pm_answer_btns[index].addEventListener('click', function actBtn(e){
                e.preventDefault();   

                console.log(this.parentElement, this.parentElement.nextSibling);

                mp_question_slide -= 750;
                element.parentElement.classList.add("questions_closed");
                setTimeout(function(){
                    element.parentElement.style.display="none";
                    if(element.parentElement.nextSibling != null){
                        element.parentElement.nextSibling.style.left="0";
                    }
                    console.log(mp_question_slide)
                }, 500);
                pm_prizes.push(this.dataset.pmap);
                sessionStorage.setItem("pm_prize_arr", JSON.stringify(pm_prizes));

                // displayChosenCard(this.parentElement, this.dataset.pmap);
                displayChosenCard();

            });
        });
        
        if(pm_session_data != null){

            pm_pch_logo.classList.remove("pm_default_ease");
            pm_pch_logo.style.opacity="0";
            pm_main_logo.classList.remove("pm_default_ease");
            pm_main_logo.style.top="-65px";
            pm_main_bkgrnd.classList.remove("pm_default_ease");
            pm_main_bkgrnd.style.top="-70px";
            pm_question_container.classList.remove("pm_default_ease");
            pm_question_container.style.top="310px";
                   
            pm_session_data.forEach((element, index) => {
                pm_prizes.push(pm_session_data[index]);
                // console.log(index, pm_prizes[index], pm_question_selectors[index]);

                // pm_question_selectors[index].style.opacity="0";
                pm_question_selectors[index].style.display="none";
                if(pm_question_selectors[index+1] != null){
                pm_question_selectors[index+1].style.left="0";
                }
                // displayChosenCard(pm_question_selectors[index], pm_prizes[index]);
                displayChosenCard();
            });
        }

        pm_claim_btn.addEventListener('click', function actBtn(e){
            e.preventDefault();   
            console.log(this.parentElement.className)
            this.parentElement.style.display="none";
        });

        let pm_counter = 1;
        pm_intro_btn.addEventListener('click', function actBtn(e,){
            e.preventDefault();   
            pm_counter++;
            // console.log(pm_counter++)
            pm_pch_logo.style.opacity="0";
            pm_main_logo.style.top="-65px";
            pm_main_bkgrnd.style.top="-70px";
            pm_question_container.style.top="310px";
            setTimeout(function(){
                pm_question_selectors[0].style.left="0";
            },500);
            
            // if(pm_counter % 2 == 0){
            //     console.log("open")
            //     pm_question_container.classList.add("questions_open");
            //     }else{
            //     console.log("close")
            //     pm_question_container.classList.remove("questions_open");
            // }
        });


        // let pm_showMore_link = document.querySelector("#ShowMeMoreLink");
        // // console.log(pm_showMore_link.dataset.showmorelink);

        // pm_showMore_link.addEventListener('click', function actBtn(e){
        //             e.preventDefault();   
                    
        //     // pass in wildcard "*" to allow for any domain -- change origin to the domain you want to allow
        //     window.parent.postMessage(pm_showMore_link.dataset.showmorelink, "*");

        // });