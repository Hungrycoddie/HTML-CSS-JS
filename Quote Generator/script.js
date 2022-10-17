const quoteText = document.querySelector(".quote"),
quoteBtn = document.querySelector("button"),
authorName = document.querySelector(".name"),
//speach copy tweet   
speechBtn = document.querySelector(".speech"),
copyBtn = document.querySelector(".copy"),
twitterBtn = document.querySelector(".twitter"),
synth = speechSynthesis;

// random quote function 
function randomQuote(){
    quoteBtn.classList.add("loading");
    quoteBtn.innerText = "Loading Quote...";

// Fetching random quote or data from a API = api.quotable.io/random-fetch ;
//phrasing it into a .js object  
    
    fetch("http://api.quotable.io/random").then(response => response.json()).then(result => {
        quoteText.innerText = result.content;
        authorName.innerText = result.author;
        quoteBtn.classList.remove("loading");
        quoteBtn.innerText = "New Quote";
    });
}

// speach function 
// utterance = new SpeechSynthesisUtterance() is a web API that represents a speach requests
// utterance is speachsynthesis type of speach is uttarance 

speechBtn.addEventListener("click", ()=>{
    if(!quoteBtn.classList.contains("loading")){
        let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} A Quote by ${authorName.innerText}`);
        synth.speak(utterance);
        setInterval(()=>{
            !synth.speaking ? speechBtn.classList.remove("active") : speechBtn.classList.add("active");
        }, 10);
    }
});

//copying quote on when copy button is clicked 
//writetext() property writes the specified text string to the system clipboard 
//

copyBtn.addEventListener("click", ()=>{
    navigator.clipboard.writeText(quoteText.innerText +"*Quote by* -"+authorName.innerHTML);
});

// opening a new twitter tab with passing quote into url / adding fetched quote into url 

twitterBtn.addEventListener("click", ()=>{
    let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText} - Quote by ${authorName.innerText}`;
    window.open(tweetUrl, "_blank");
});

quoteBtn.addEventListener("click", randomQuote);