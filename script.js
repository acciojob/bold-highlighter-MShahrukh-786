function highlight() {
    //Write your code here

// highlight() function
function highlight() {
  const boldWords = document.querySelectorAll('strong');
  boldWords.forEach((word) => {
    word.style.color = 'green';
  });
}

// return_normal() function
function return_normal() {
  const boldWords = document.querySelectorAll('strong');
  boldWords.forEach((word) => {
    word.style.color = 'black';
  });
}

// Add event listeners to the link
const link = document.querySelector('a');
link.addEventListener('mouseover', highlight);
link.addEventListener('mouseout', return_normal);



}


function return_normal() {
    //Write your code here

    
}
