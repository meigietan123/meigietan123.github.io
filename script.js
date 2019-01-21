const keywords = ["cats", "books", "cakes", "cookies", "Paris", "fireworks", "burgers", "hotels", "KLCC", "bags", 
                 "flowers", "travel", "Kuala Lumpur", "Grand Canyon", "New York"];

const list = document.getElementById('list-data');
const answersList = document.getElementById('choices');

let answer = ""

function reset(){
    answersList.innerHTML = "";
    answer = keywords[Math.floor(Math.random() * keywords.length)];
    getTaggedPhotos(answer);

    const choices = [];
    choices.push(answer);

    while(choices.length < 4){
        const rand = keywords[Math.floor(Math.random() * keywords.length)];
        if(choices.indexOf(rand) == -1){
            choices.push(rand);
        }
    }

    choices.sort(function(){
        return Math.random() * 2 - 1;
    });

    for(let i=0; i< choices.length; i++){
        const li = document.createElement('li');
        const btn = document.createElement('button');
        li.appendChild(btn)
        btn.innerHTML= choices[i]
        btn.style.backgroundColor = 'lightblue';
        btn.onclick = function(){
            if(btn.innerHTML == answer){
                window.alert(' You are correct!')
            }
            else{
                window.alert('Sorry! The correct answer is ' + answer + '')
            }
            reset();
        }
        answersList.appendChild(li);
    }
}
function getTaggedPhotos(tagName){
    fetch('https://api.tumblr.com/v2/tagged?tag='+ tagName +'&api_key=Pw8m0o4YT86Ql71tASIDkrQgOkOELwT4fy3k0N07CYlNolZEV3')
        .then(function(response){
         console.log(response)

         if(!response.ok){
             window.alert('Hey, seems like something went wrong, please contact help at <tanmeigie123@gmai.com>');
             return;
         }

         return response.json();
    })
        .then(function(result){
            if(!result){
                return;
            }
          
          //clear list
          list.innerHTML = '';

          const items = result.response;
  
          for(let i = 0; i < items.length; i++){
            const item = items[i];
  
              if(item.photos != undefined){
              const altSizes = item.photos[0].alt_sizes
              const imgSrc = altSizes[altSizes.length - 3].url;
  
              const img = document.createElement('img');
              img.src = imgSrc;
  
              const li = document.createElement('li');
              
              li.appendChild(img);
    
              list.appendChild(li);
          }
      }
  })
        .catch(function(err){
            window.alert('Hey seems like the Tumblr API is down, please try again later.')
            console.log('message:', err)
        })
}

reset()