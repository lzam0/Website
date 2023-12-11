let goalpagedata = {};

function initload()
{
    var goalpagedata1;
fetch("http://localhost:3000/language.json")
.then((res) => {
return res.json();
})
.then(data => {
    goalpagedata1 = data;
   document.getElementById("goalheader").textContent=goalpagedata1.maingoalspage.englishHeader;
   document.getElementById("goaltitle").textContent=goalpagedata1.maingoalspage.englishTitle;
   document.getElementById("goaldiscover").textContent=goalpagedata1.maingoalspage.englishDiscover;
   document.getElementById("goalimages").innerHTML="<a href='goal-1.html'><img src='./images/Goal1.png' alt='Goal 1'></a><a href='goal-4.html'><img src='./images/Goal4.png' alt='Goal 4'></a><a href='goal-6.html'><img src='./images/Goal6.png' alt='Goal 6'></a>"
    })
    }



function onClickLang(UserOptions) { 

  if(UserOptions == 'ENGLISH'){
   
    fetch("http://localhost:3000/language.json")
    .then((res) => {
    return res.json();
  })
  .then(data => {
    goalpagedata = data;
   
   
   document.getElementById("goalheader").textContent=goalpagedata.maingoalspage.englishHeader;
   document.getElementById("goaltitle").textContent=goalpagedata.maingoalspage.englishTitle;
   document.getElementById("goaldiscover").textContent=goalpagedata.maingoalspage.englishDiscover;
   
})}
   
  if(UserOptions == 'FRENCH'){
     fetch("http://localhost:3000/language.json")
    .then((res) => {
    return res.json();
  })
  .then(data => {
    goalpagedata = data;
   document.getElementById("goalheader").textContent=goalpagedata.maingoalspage.frenchHeader;
   document.getElementById("goaltitle").textContent=goalpagedata.maingoalspage.frenchTitle;
   document.getElementById("goaldiscover").textContent=goalpagedata.maingoalspage.frenchDiscover;
})}

}

// From here its for Goal1 page

// All Goal Pages

function initLoadGoal(goalNumber) {
  fetch(`http://localhost:3000/language.json`)
  .then((res) => res.json())
  .then((data) => {
      // goal + goalNumber
      goalpagedata[goalNumber] = data[`goal${goalNumber}page`];
      updateContent(goalNumber, 'english');
  })
  .catch((error) => {
      console.error('Error fetching language data:', error);
  });
}

function updateContent(goalNum, language){
  document.getElementById("GoalTitle").textContent = goalpagedata[goalNum][language + "Title"];
  document.getElementById("Goalheader").textContent = goalpagedata[goalNum][language + "Header"];
  
  document.getElementById("question").textContent = goalpagedata[goalNum][language + "GoalQuestion"];
  document.getElementById("answer").textContent = goalpagedata[goalNum][language + "GoalAnswer"];
  document.getElementById("why").textContent = goalpagedata[goalNum][language + "GoalWhy"];
  document.getElementById("why-response").textContent = goalpagedata[goalNum][language + "GoalWhyResponse"];
  document.getElementById("solution").textContent = goalpagedata[goalNum][language + "GoalSolution"];
  document.getElementById("solution-response").textContent = goalpagedata[goalNum][language + "GoalSolutionResponse"];
  document.getElementById("goal6image").innerHTML="<img src='http://localhost:3000/images/Goal6.png'";
}

function onClickLangGoal(goalNumber, userOptions) {
  const language = userOptions.toLowerCase();
  if (language === 'english' || language === 'french') {
      updateContent(goalNumber, language);
  } else {
      console.error('Invalid language option');
  }
}




// function initloadGoal1()
// {
//     var goalpagedata2;

// fetch("http://localhost:3000/language.json")
// .then((res) => {
// return res.json();
// })
// .then(data => {
//    goalpagedata2 = data;
//    document.getElementById("GoalTitle").innerText=goalpagedata2.goal1page.englishTitle;
//    document.getElementById("Goalheader").innerText=goalpagedata2.goal1page.englishHeader;
//    document.getElementById("GoalQuestion").textContent=goalpagedata2.goal1page.englishGoalQuestion;
//    document.getElementById("GoalAnswer").textContent=goalpagedata2.goal1page.englishGoalAnswer;
//    document.getElementById("GoalWhy").textContent=goalpagedata2.goal1page.englishGoalWhy;
//    document.getElementById("GoalWhyResponse").textContent=goalpagedata2.goal1page.englishGoalWhyResponse;
//    document.getElementById("GoalSolution").textContent=goalpagedata2.goal1page.englishGoalSolution;
//    document.getElementById("GoalSolutionResponse").textContent=goalpagedata2.goal1page.englishGoalSolutionResponse;
//    document.getElementById("IntroLink").textContent=goalpagedata2.goal1page.englishIntroLink;
//    document.getElementById("goal1image").innerHTML="<img src='http://localhost:3000/images/Goal1.png' alt='Goal 1'>";
   
// })
//     }

//     function onClickLangGoal1(UserOptions) { 

//         if(UserOptions == 'ENGLISH'){
         
//           fetch("http://localhost:3000/language.json")
//           .then((res) => {
//           return res.json();
//         })
//         .then(data => {
//           goalpagedata = data;
//           document.getElementById("GoalTitle").textContent=goalpagedata.goal1page.englishTitle;
//           document.getElementById("Goalheader").textContent=goalpagedata.goal1page.englishHeader;
//           document.getElementById("GoalQuestion").textContent=goalpagedata.goal1page.englishGoalQuestion;
//           document.getElementById("GoalAnswer").textContent=goalpagedata.goal1page.englishGoalAnswer;
//           document.getElementById("GoalWhy").textContent=goalpagedata.goal1page.englishGoalWhy;
//           document.getElementById("GoalWhyResponse").textContent=goalpagedata.goal1page.englishGoalWhyResponse;
//           document.getElementById("GoalSolution").textContent=goalpagedata.goal1page.englishGoalSolution;
//           document.getElementById("GoalSolutionResponse").textContent=goalpagedata.goal1page.englishGoalSolutionResponse;

          
//       })}
         
//         if(UserOptions == 'FRENCH'){
//            fetch("http://localhost:3000/language.json")
//           .then((res) => {
//           return res.json();
//         })
//         .then(data => {
//           goalpagedata = data;
//           document.getElementById("GoalTitle").textContent=goalpagedata.goal1page.frenchTitle;
//           document.getElementById("Goalheader").textContent=goalpagedata.goal1page.frenchHeader;       
//           document.getElementById("GoalQuestion").textContent=goalpagedata.goal1page.frenchGoalQuestion;
//           document.getElementById("GoalAnswer").textContent=goalpagedata.goal1page.frenchGoalAnswer;
//           document.getElementById("GoalWhy").textContent=goalpagedata.goal1page.frenchGoalWhy;
//           document.getElementById("GoalWhyResponse").textContent=goalpagedata.goal1page.frenchGoalWhyResponse;
//           document.getElementById("GoalSolution").textContent=goalpagedata.goal1page.frenchGoalSolution;
//           document.getElementById("GoalSolutionResponse").textContent=goalpagedata.goal1page.frenchGoalSolutionResponse;
//           document.getElementById("IntroLink").textContent=goalpagedata.goal1page.frenchIntroLink;
         
//       })}
      
//       }


// // From here its for Goal4 page

// function initloadGoal4()
// {
//     var goalpagedata4;

// fetch("http://localhost:3000/language.json")
// .then((res) => {
// return res.json();
// })
// .then(data => {
//    goalpagedata4 = data;
//    //alert(goalpagedata2.goal1page.englishGoalInformation);
//    document.getElementById("GoalTitle").textContent=goalpagedata4.goal4page.englishTitle;
//    document.getElementById("Goalheader").textContent=goalpagedata4.goal4page.englishHeader;
//    document.getElementById("GoalQuestion").textContent=goalpagedata4.goal4page.englishGoalQuestion;
//    document.getElementById("GoalAnswer").textContent=goalpagedata4.goal4page.englishGoalAnswer;
//    document.getElementById("GoalWhy").textContent=goalpagedata4.goal4page.englishGoalWhy;
//    document.getElementById("GoalWhyResponse").textContent=goalpagedata4.goal4page.englishGoalWhyResponse;
//    document.getElementById("GoalSolution").textContent=goalpagedata4.goal4page.englishGoalSolution;
//    document.getElementById("GoalSolutionResponse").textContent=goalpagedata4.goal4page.englishGoalSolutionResponse;
//    document.getElementById("IntroLink").textContent=goalpagedata4.goal4page.englishIntroLink;
//    document.getElementById("goal4image").innerHTML="<img src='http://localhost:3000/images/Goal4.png' alt='Goal 4'>";
    
// })
//     }

//     function onClickLangGoal4(UserOptions) { 

//         if(UserOptions == 'ENGLISH'){
         
//           fetch("http://localhost:3000/language.json")
//           .then((res) => {
//           return res.json();
//         })
//         .then(data => {
//           goalpagedata = data;
//           document.getElementById("GoalTitle").textContent=goalpagedata.goal4page.englishTitle;
//           document.getElementById("Goalheader").textContent=goalpagedata.goal4page.englishHeader; 
         
//           document.getElementById("GoalQuestion").textContent=goalpagedata.goal4page.englishGoalQuestion;
//           document.getElementById("GoalAnswer").textContent=goalpagedata.goal4page.englishGoalAnswer;
//           document.getElementById("GoalWhy").textContent=goalpagedata.goal4page.englishGoalWhy;
//           document.getElementById("GoalWhyResponse").textContent=goalpagedata.goal4page.englishGoalWhyResponse;
//           document.getElementById("GoalSolution").textContent=goalpagedata.goal4page.englishGoalSolution;
//           document.getElementById("GoalSolutionResponse").textContent=goalpagedata.goal4page.englishGoalSolutionResponse;
//       })}
         
//         if(UserOptions == 'FRENCH'){
//            fetch("http://localhost:3000/language.json")
//           .then((res) => {
//           return res.json();
//         })
//         .then(data => {
//           goalpagedata = data;
//           document.getElementById("GoalTitle").textContent=goalpagedata.goal4page.frenchTitle;
//           document.getElementById("Goalheader").textContent=goalpagedata.goal4page.frenchHeader; 
//           document.getElementById("GoalQuestion").textContent=goalpagedata.goal4page.frenchGoalQuestion;
//           document.getElementById("GoalAnswer").textContent=goalpagedata.goal4page.frenchGoalAnswer;
//           document.getElementById("GoalWhy").textContent=goalpagedata.goal4page.frenchGoalWhy;
//           document.getElementById("GoalWhyResponse").textContent=goalpagedata.goal4page.frenchGoalWhyResponse;
//           document.getElementById("GoalSolution").textContent=goalpagedata.goal4page.frenchGoalSolution;
//           document.getElementById("GoalSolutionResponse").textContent=goalpagedata.goal4page.frenchGoalSolutionResponse;
//           document.getElementById("IntroLink").textContent=goalpagedata.goal4page.frenchIntroLink;
         
//       })}
      
//       }


// // From here its for Goal6 page

// function initloadGoal6()
// {
//     var goalpagedata6;
    

// fetch("http://localhost:3000/language.json")
// .then((res) => {
// return res.json();
// })
// .then(data => {
//    goalpagedata6 = data;
//    //alert(goalpagedata2.goal1page.englishGoalInformation);
//    document.getElementById("GoalTitle").textContent=goalpagedata6.goal6page.EnglishTitle;
//    document.getElementById("Goalheader").textContent=goalpagedata6.goal6page.EnglishHeader;
//    document.getElementById("question").textContent=goalpagedata6.goal6page.englishGoalQuestion;
//    document.getElementById("answer").textContent=goalpagedata6.goal6page.englishGoalAnswer;
//    document.getElementById("why").textContent=goalpagedata6.goal6page.englishGoalWhy;
//    document.getElementById("why-response").textContent=goalpagedata6.goal6page.englishGoalWhyResponse;
//    document.getElementById("solution").textContent=goalpagedata6.goal6page.englishGoalSolution;
//    document.getElementById("solution-response").textContent=goalpagedata6.goal6page.englishGoalSolutionResponse;
//   //  document.getElementById("GoalTitle").textContent=goalpagedata6.goal6page.englishTitle;
//   //  document.getElementById("Goalheader").textContent=goalpagedata6.goal6page.englishHeader;
//   //  document.getElementById("GoalQuestion").textContent=goalpagedata6.goal6page.englishGoalQuestion;
//   //  document.getElementById("GoalAnswer").textContent=goalpagedata6.goal6page.englishGoalAnswer;
//   //  document.getElementById("GoalWhy").textContent=goalpagedata6.goal6page.englishGoalWhy;
//   //  document.getElementById("GoalWhyResponse").textContent=goalpagedata6.goal6page.englishGoalWhyResponse;
//   //  document.getElementById("GoalSolution").textContent=goalpagedata6.goal6page.englishGoalSolution;
//   //  document.getElementById("GoalSolutionResponse").textContent=goalpagedata6.goal6page.englishGoalSolutionResponse;
//   //  document.getElementById("IntroLink").textContent=goalpagedata6.goal6page.englishIntroLink;
//    document.getElementById("goal6image").innerHTML="<img src='http://localhost:3000/images/Goal6.png' alt='Goal 1'>";
   
// })
//     }

//     function onClickLangGoal6(UserOptions) { 

//         if(UserOptions == 'ENGLISH'){
         
//           fetch("http://localhost:3000/language.json")
//           .then((res) => {
//           return res.json();
//         })
//         .then(data => {
//           goalpagedata = data;
//           document.getElementById("GoalTitle").textContent=goalpagedata.goal6page.EnglishTitle;
//           document.getElementById("goal-title").textContent=goalpagedata.goal6page.EnglishHeader;
//           document.getElementById("question").textContent=goalpagedata.goal6page.englishGoalQuestion;
//           document.getElementById("answer").textContent=goalpagedata.goal6page.englishGoalAnswer;
//           document.getElementById("why").textContent=goalpagedata.goal6page.englishGoalWhy;
//           document.getElementById("why-response").textContent=goalpagedata.goal6page.englishGoalWhyResponse;
//           document.getElementById("solution").textContent=goalpagedata.goal6page.englishGoalSolution;
//           document.getElementById("solution-response").textContent=goalpagedata.goal6page.englishGoalSolutionResponse;
//       })}
         
//         if(UserOptions == 'FRENCH'){
//            fetch("http://localhost:3000/language.json")
//           .then((res) => {
//           return res.json();
//         })
//         .then(data => {
//           goalpagedata = data;

//           document.getElementById("GoalTitle").textContent=goalpagedata.goal6page.frenchTitle;
//           document.getElementById("Goalheader").textContent=goalpagedata.goal6page.frenchHeader; 
//           document.getElementById("GoalQuestion").textContent=goalpagedata.goal6page.frenchGoalQuestion;
//           document.getElementById("GoalAnswer").textContent=goalpagedata.goal6page.frenchGoalAnswer;
//           document.getElementById("GoalWhy").textContent=goalpagedata.goal6page.frenchGoalWhy;
//           document.getElementById("GoalWhyResponse").textContent=goalpagedata.goal6page.frenchGoalWhyResponse;
//           document.getElementById("GoalSolution").textContent=goalpagedata.goal6page.frenchGoalSolution;
//           document.getElementById("GoalSolutionResponse").textContent=goalpagedata.goal6page.frenchGoalSolutionResponse;
//           document.getElementById("IntroLink").textContent=goalpagedata.goal6page.frenchIntroLink;
         
//       })}
      
//       }



function createContent(){
  // get header
  const header = document.querySelector("header");

  // get container class
  const container = document.querySelector(".container");

  // get information container
  const information = document.querySelector(".goal-information");

  // create new content
  const question = document.createElement("h2");
  question.id = "question";

  const answer = document.createElement("p");
  answer.id = "answer";

  const why = document.createElement("h2");
  why.id = "why";

  const whyAnswer = document.createElement("p");
  whyAnswer.id = "why-response";

  const solution = document.createElement("h2");
  solution.id = "solution";

  const solutionAnswer = document.createElement("p");
  solutionAnswer.id = "solution-response";
  
  const more = document.createElement("p");
  more.id = "more";

  const link = document.createElement("a");
  link.id = "link";
  link.textContent = "http://www.un.org/sustainabledevelopment";
  link.href = "http://www.un.org/sustainabledevelopment";


  information.append(question);
  information.append(answer);
  information.append(why);
  information.append(whyAnswer);
  information.append(solution);
  information.append(solutionAnswer);
  information.append(more);
  information.append(link);

}
  
createContent();