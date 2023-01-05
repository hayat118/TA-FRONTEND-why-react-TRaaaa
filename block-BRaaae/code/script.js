let form = document.querySelector('form')
let movie = document.querySelector('#movie');
let list = document.querySelector('.list');




let elm = React.createElement;

function watch(event){
    event.preventDefault()
   // let movielist=[]
    let value = event.target.elements.movie.value;
    console.log(value)
  

    let div = elm('div',{},
              elm('p',{},p=value),
              elm('button',{},button='To Watch',));
   
    ReactDOM.render(div,list);

    event.target.elements.movie.value="";


   
}




form.addEventListener('submit',watch)