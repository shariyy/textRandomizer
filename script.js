
const text = document.getElementById('text')
const textContainer = document.getElementById('container')
let ogstring = [...text.innerText]
text.addEventListener('mouseover', ()=>{
    let count = -3
   let interval = setInterval(() => {
    text.innerText = text.innerText.split('').map((letter, i) => 
    {

    if (i < count) {
        console.log(count, i+3);
         return ogstring[i] 
    }if (Number.isFinite(parseInt(letter))) {
        return Math.floor(Math.random()*(9-0)+0).toString() 
     } return letters()   
    }).join('')
    count+=1/10
    if (count > ogstring.length) {
        clearInterval(interval)
       }
    }, 50)}
   );
   

function letters() {
   return String.fromCharCode(Math.floor(Math.random()*(90-65)+65))
}

function updateDivSize() {
    var textHeight = text.clientHeight;
    var textwidth = text.clientWidth; 
    textContainer.style.height = textHeight + 'px'; 
    textContainer.style.width = textwidth+'px'
}
  
updateDivSize()
