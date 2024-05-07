const quoteContainer = document.getElementById('quote-container');

const quoteText = document.getElementById('quote-text');
const quoteBtn = document.getElementById('quote-btn');


quoteBtn.addEventListener('click', getQuote);

//  to fetch a random quote from the Quotable API
async function getQuote() {
    try {
        const response = await fetch('https://api.quotable.io/random');
        const data = await response.json();
        const quote = data.content;
        displayQuote(quote);
    } catch (error) {
        console.log('Error fetching quote:', error);
        displayQuote('Failed to fetch quote. Please try again later.');
    }
}

//  to display the quote on the webpage with animation
function displayQuote(quote) {
    quoteText.textContent = quote;
    quoteText.style.animation = 'none'; 
    void quoteText.offsetWidth; 
    quoteText.style.animation = 'fadeInQuote 1.5s forwards';
}





getQuote();


// ========INTRO TITLE FADE========

document.addEventListener('DOMContentLoaded', function() {
    const introContainer = document.querySelector('.intro-container');
    const title = document.querySelector('.main-title');
    const content = document.querySelector('.content');
    const introsvg = document.querySelector ('.intro_svg');
    const subtitle = document.querySelector ('.sub-title');
    

    introContainer.style.opacity = '1';
    title.style.opacity = '1';
    introsvg.style.opacity = '1'
    subtitle.style.opacity = '1'
    

    setTimeout(function() {
        introContainer.style.opacity = '0';
        title.style.opacity = '0';
        introsvg.style.opacity = '0'
        subtitle.style.opacity = '0'
        
       
        setTimeout(function() {
            content.style.opacity = '1';
        }, 1000); 
    }, 5000); 
});

