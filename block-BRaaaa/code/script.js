let form=document.querySelector('form');
let movie=document.querySelector('#movie');
let list=document.querySelector('.list');

function watch(event){
  event.preventDeafault();
  let value=event.target.elements.movie.value;
  console.log(value);


  let p=document.createElement('p');
  let button=document.createElement('button');

  button.addEventListener('click',function(){
    if(button.innerText==='To Watch'){
      button.innerText='Watched'
    }else if(button.innerText==='Watched'){
      button.innerText='To Watch'
    }
  })

  let div=document.createElement('div');
  p.innerText=value;
  button.innerText='To Watch';
  div.append(p,button);
  list.append(div);

  event.target.elements.movie.value="";
  
}

form.addEventListener('submit' , watch)