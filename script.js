
let flag = [false, false, false, false, false];
var rating = 0;

let spanItems = document.getElementsByClassName('star');

function changePage(){
    
    var finalScore = document.querySelector('.final-score');
    finalScore.textContent = `You selected ${rating} out of 5`;
    const scoringPage = document.getElementById('container');
    scoringPage.hidden = true;
    const thankYouPage = document.getElementById('ty-container');
    thankYouPage.hidden = false;
}

function ratingSelected(item){
    rating = parseInt(item.textContent);
    var idx = rating -1;
    console.log(idx);
    if(!flag[idx]){
        clearSelection();   
        flag[idx] = true;
        item.classList.add("clicked");
        item.classList.remove("notclicked");
    }else{
        flag[idx] = false;
        item.classList.remove("clicked");
        item.classList.add("notclicked");
    }        
}

function clearSelection(){
    for(let i = 0; i < 5; i++){
        spanItems[i].classList.remove('clicked');
        spanItems[i].classList.add('notclicked');
        flag[i] = false;
    }
}


